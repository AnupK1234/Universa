import axios from "../lib/axiosInstance"
import {
  setConversations,
  setMessages,
  addMessage,
  setSelectedConversation,
  setUploadingFile,
} from "../redux/slice/chatSlice";

export const fetchConversations = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/chat/conversations/user/${userId}`);
    dispatch(setConversations(data));
  } catch (error) {
    console.error("Failed to fetch conversations:", error);
  }
};

export const loadConversation = (conversation) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/chat/conversations/${conversation._id}/messages`
    );
    dispatch(setSelectedConversation(conversation));
    dispatch(setMessages(data));
  } catch (error) {
    console.error("Failed to load conversation:", error);
  }
};

export const handleSendMessage =
  (message, user, selectedConversation) => async (dispatch) => {
    try {
      dispatch(addMessage({ content: message, sender: user._id }));

      const { data } = await axios.post("/chat/messages", {
        conversationId: selectedConversation._id,
        sender: user._id,
        content: message,
      });

      dispatch(addMessage(data.botMessage));

      if (data.conversationTitle !== "Untitled Conversation") {
        dispatch(
          setSelectedConversation((prev) => ({
            ...prev,
            title: data.conversationTitle,
          }))
        );
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

export const handleFileUpload =
  (file, type, user, selectedConversation) => async (dispatch) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("conversationId", selectedConversation._id);
    formData.append("sender", user._id);
    formData.append("content", `Uploaded ${type}: ${file.name}`);
    formData.append("fileType", type);

    dispatch(setUploadingFile(true));

    try {
      const { data } = await axios.post(
        `/chat/${type === "image" ? "img-analysis" : "pdf-analysis"}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      dispatch(
        addMessage({
          ...data.newMsg,
          fileType: type,
          fileName: file.name,
        })
      );
      dispatch(
        addMessage({
          sender: null,
          content: data.content,
        })
      );
    } catch (error) {
      console.error("File upload failed:", error);
      dispatch(
        addMessage({
          sender: null,
          content: `Error processing ${type}. Please try again.`,
        })
      );
    } finally {
      dispatch(setUploadingFile(false));
    }
  };
