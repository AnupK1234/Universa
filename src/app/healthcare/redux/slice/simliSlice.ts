// slices/simliSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SimliClient } from 'simli-client';
import axios from "../../lib/axiosInstance";
import { SIMLI_API_KEY } from "../../constants/keys";

interface SimliState {
  isLoading: boolean;
  isAvatarVisible: boolean;
  error: string | null;
}

const initialState: SimliState = {
  isLoading: false,
  isAvatarVisible: false,
  error: null,
};

// Simli client instance (kept outside redux store since it's not serializable)
let simliClient: SimliClient | null = null;
let conversation: any = null; // Replace 'any' with your actual conversation type

// Async thunks
export const initializeSimli = createAsyncThunk(
  'simli/initialize',
  async ({ 
    videoRef, 
    audioRef, 
    simli_faceid 
  }: { 
    videoRef: React.RefObject<HTMLVideoElement>;
    audioRef: React.RefObject<HTMLAudioElement>;
    simli_faceid: string;
  }) => {
    if (videoRef.current && audioRef.current) {
      simliClient = new SimliClient();
      const SimliConfig = {
        apiKey: SIMLI_API_KEY,
        faceID: simli_faceid,
        handleSilence: true,
        videoRef: videoRef,
        audioRef: audioRef,
      };
      simliClient.Initialize(SimliConfig as any);
    }
  }
);

export const startSimli = createAsyncThunk(
  'simli/start',
  async ({ 
    agentId, 
    onStart 
  }: { 
    agentId: string;
    onStart: () => void;
  }, { rejectWithValue }) => {
    try {
      // Request microphone access
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Start Simli client
      if (simliClient) {
        await simliClient.start();
        
        // Set up event listeners
        simliClient.on('connected', async () => {
          const audioData = new Uint8Array(6000).fill(0);
          simliClient?.sendAudioData(audioData);
          
          // Get signed URL and start ElevenLabs conversation
          const response = await axios.get('/conversation/get-signed-url');
          if ('error' in response) {
            throw new Error('Failed to get ElevenLabs URL');
          }
          
          // Start conversation (replace with your actual conversation implementation)
          conversation = {
            setVolume: (vol: { volume: number }) => {},
            startSession: (params: any) => {},
          };
          
          conversation.setVolume({ volume: 0 });
          conversation.startSession({
            agentId: agentId,
            signedUrl: response.data.signedUrl,
          });
        });

        onStart();
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const stopSimli = createAsyncThunk(
  'simli/stop',
  async ({ onClose }: { onClose: () => void }, { rejectWithValue }) => {
    try {
      const conversation_id = await conversation?.endSession();
      simliClient?.close();
      onClose();

      // Save conversation
      setTimeout(() => {
        axios.post("/conversation/avatar-conversation", {
          conversation_id
        }).catch(error => {
          console.error('Error saving conversation:', error);
        });
      }, 5000);

      return conversation_id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const simliSlice = createSlice({
  name: 'simli',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startSimli.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startSimli.fulfilled, (state) => {
        state.isLoading = false;
        state.isAvatarVisible = true;
      })
      .addCase(startSimli.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(stopSimli.fulfilled, (state) => {
        state.isAvatarVisible = false;
        state.isLoading = false;
      });
  },
});

export default simliSlice.reducer;