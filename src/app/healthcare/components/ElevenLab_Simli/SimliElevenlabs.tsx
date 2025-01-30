import { cn } from '../../lib/clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimliClient } from 'simli-client';
import { SIMLI_API_KEY } from '../../constants/keys';
import { setAvatarConversation, setAvatarConversationMessages } from "../../redux/slice/chatSlice";
import axios from '../../lib/axiosInstance';
import { useConversation } from './elevenlabs-react';
import IconSparkleLoader from './IconSparkleLoader';
import VideoBox from './VideoBox';
// import { getElevenLabsSignedUrl } from "./actions/actions";
import MultiStepForm from '../Chat/MultiStepForm';
import {handleAvatarQuestionaireFormSubmit} from "../../services/questionareService"

interface SimliElevenlabsProps {
  simli_faceid: string;
  agentId: string; // ElevenLabs agent ID
  onStart: () => void;
  onClose: () => void;
  showDottedFace: boolean;
}

const simliClient = new SimliClient();

const getSignedUrl = async () => {
  const response = await axios.get('/conversation/get-signed-url');
  return response;
};

const SimliElevenlabs: React.FC<SimliElevenlabsProps> = ({
  simli_faceid,
  agentId,
  onStart,
  onClose,
  showDottedFace,
}) => {
  // State management
  const [isLoading, setIsLoading] = useState(false);
  const [isAvatarVisible, setIsAvatarVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [, setError] = useState('');
  const dispatch = useDispatch()
  const { questionaire }  = useSelector((state:any) => state.chat);
  const { user } = useSelector((state:any) => state.user);
  const [formData, setFormData] = useState(null);

  // Refs for media elements
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Initialize ElevenLabs conversation hook
  const conversation = useConversation({
    onConnect: () => {
      console.log('ElevenLabs conversation connected');
      setIsAvatarVisible(true);
      setIsLoading(false);
      // sendAudioDataToSimli();
    },

    onDisconnect: () => {
      console.log('ElevenLabs conversation disconnected');
      setIsAvatarVisible(false);
      simliClient?.ClearBuffer();
      simliClient?.close();
    },

    onMessage: (message) => {
      console.log('ElevenLabs conversation message:', message);
      dispatch(setAvatarConversationMessages(message))
    },

    onModeChange(data) {
      // console.log('ElevenLabs conversation mode change:', data);
      if (data.mode === 'interrupted') {
        simliClient?.ClearBuffer();
      }
    },

    onError: (error) => {
      console.error('ElevenLabs conversation error:', error);
      setError(`Conversation error: ${error}`);
    },

    onAudioData: (audioData: Uint8Array) => {
      // console.log('ElevenLabs conversation audio data:', audioData);
      simliClient.sendAudioData(audioData);
    },
  });

  /**
   * Initializes the Simli client with the provided configuration.
   */
  const initializeSimliClient = useCallback(() => {
    if (videoRef?.current && audioRef?.current) {
      const SimliConfig = {
        apiKey: SIMLI_API_KEY,
        faceID: simli_faceid,
        handleSilence: true,
        videoRef: videoRef.current,
        audioRef: audioRef.current,
      };

      simliClient.Initialize(SimliConfig as any);
      console.log('Simli Client initialized');
    }
  }, [simli_faceid]);

  const startElevenLabsConversation = async () => {
    if (!formData) return;

    // console.log("Questionare2 : ", questionaire)
    // If agent is not publis then we must get signed URL from ElevenLabs
    let startConvReturn;

    const questionareResult = await handleAvatarQuestionaireFormSubmit(user, formData);
    // console.log("RESULT : ", questionareResult)

    await getSignedUrl().then((res) => {
      if ('error' in res) {
        console.error('Failed to get ElevenLabs URL:', res.error);
        return;
      }

      // console.log('Got ElevenLabs signed URL:', res.data.signedUrl);

      // Mute ElevenLabs internal audio to only hear it from Simli's side
      conversation.setVolume({ volume: 0 });

      startConvReturn = conversation.startSession({
        agentId: agentId,
        signedUrl: res.data.signedUrl,
        overrides: {
          agent: {
            prompt: {
              prompt: questionareResult.prompt,
            },
            firstMessage: questionareResult.firstMessage,
          },
        },
      });
    });
  };

  /**
   * Handles the start of the interaction
   */
  let questionareResult;
  const handleStart = useCallback(async (questionnaireData:any) => {
    setIsFormOpen(false);
    setIsLoading(true);
    setError('');
    onStart();
    dispatch(setAvatarConversation())
    setFormData(questionnaireData);

    try {

      // questionareResult = await handleAvatarQuestionaireFormSubmit(user, questionaire);
      // console.log("RESULT : ", questionareResult)

      // Request microphone access
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start Simli client
      await simliClient?.start();
    } catch (error: any) {
      console.error('Error starting interaction:', error);
      setError(`Error starting interaction: ${error.message}`);
      setIsLoading(false);
    }
  }, [agentId, conversation, onStart, dispatch]);

  /**
   * Handles stopping the interaction
   */
  const handleStop = useCallback(async () => {
    console.log('Stopping interaction...');
    setIsLoading(false);
    setError('');
    setIsAvatarVisible(false);
    dispatch(setAvatarConversation())

    // Clean up ElevenLabs conversation
    const conversation_id = await conversation.endSession();
    // console.log("End data of conv : ", endData); // This prints the conversation id
    

    // Clean up Simli client
    simliClient?.close();

    onClose();
    console.log('Interaction stopped');
    setTimeout(() => {
      axios.post("/conversation/avatar-conversation", {
          conversation_id
      }).catch(error => {
          console.error('Error saving conversation:', error);
      });
  }, 5000);
  }, [conversation, onClose]);

  // Initialize Simli client on mount
  useEffect(() => {
    initializeSimliClient();

    if (simliClient) {
      simliClient?.on('connected', () => {
        console.log('SimliClient connected');
        const audioData = new Uint8Array(6000).fill(0);
        simliClient?.sendAudioData(audioData);
        console.log('Sent initial audio data');

        startElevenLabsConversation();
      });

      simliClient?.on('disconnected', () => {
        console.log('SimliClient disconnected');
      });
    }

    // return () => {
    //   conversation.endSession();
    // };
  }, [initializeSimliClient, formData]);

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          showDottedFace ? 'h-0 overflow-hidden' : 'h-auto'
        }`}
      >
        <VideoBox video={videoRef} audio={audioRef} />
      </div>
      <div className="flex flex-col items-center">
        {!isAvatarVisible ? (
          <button
            onClick={() => setIsFormOpen(true)}
            disabled={isLoading}
            className={cn(
              'w-full h-[52px] mt-4 disabled:hover:rounded-[100px] bg-simliblue text-black bg-white py-3 px-6 rounded-[100px] transition-all duration-300 hover:rounded-sm',
              'flex justify-center items-center'
            )}
          >
            {isLoading ? (
              <IconSparkleLoader className="h-[20px] animate-loader" />
            ) : (
              <span className="font-abc-repro-mono font-bold w-[164px]">
                Start Avatar Interaction
              </span>
            )}
          </button>
        ) : (
          <>
            <div className="flex items-center gap-4 w-full">
              <button
                onClick={handleStop}
                className={cn(
                  'mt-4 group text-white flex-grow bg-red hover:rounded-sm hover:bg-white h-[52px] px-6 rounded-[100px] transition-all duration-300'
                )}
              >
                <span className="font-abc-repro-mono group-hover:text-black font-bold w-[164px] transition-all duration-300">
                  Stop Interaction
                </span>
              </button>
            </div>
          </>
        )}
      </div>
      <MultiStepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} convoType="avatar" handleConversationStart={handleStart}/>
    </>
  );
};

export default SimliElevenlabs;
