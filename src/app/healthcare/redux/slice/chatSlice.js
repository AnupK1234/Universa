import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],
  selectedConversation: null,
  messages: [],
  uploadingFile: false,
  questionaire: [],
  avatarConversation: false,
  avatarConversationMessages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
    setSelectedConversation: (state, action) => {
      state.selectedConversation = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setUploadingFile: (state, action) => {
      state.uploadingFile = action.payload;
    },
    setQuestionaire: (state, action) => {
      state.questionaire = action.payload;
    },
    setAvatarConversation: (state) => {
      state.avatarConversation = !state.avatarConversation;
    },
    setAvatarConversationMessages: (state, action) => {
      state.avatarConversationMessages.push(action.payload);
    },
  },
});

export const {
  setConversations,
  setSelectedConversation,
  setMessages,
  addMessage,
  toggleSidebar,
  setUploadingFile,
  setQuestionaire,
  setAvatarConversation,
  setAvatarConversationMessages,
} = chatSlice.actions;

export default chatSlice.reducer;
