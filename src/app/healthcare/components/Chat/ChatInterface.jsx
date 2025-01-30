"use client";
import {
  addMessage,
  setMessages,
  setSelectedConversation
} from "../../redux/slice/chatSlice";
import AddIcon from "@public/add-chat.svg";
import HamburgerICO from "@public/chat-history.svg";
import { fetchConversations } from "../../services/chatService";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar3 from "../ElevenLab_Simli/Avatar3";
import axios from "../../lib/axiosInstance";
import AvatarConversation from "./AvatarConversation";
import ChatInput from "./ChatInput";
import ConversationList from "./ConversationList";
import MessagesSection from "./MessagesSection";
import MultiStepForm from "./MultiStepForm";

const ChatInterface = () => {
  const [showChatHistory, setShowChatHistory] = useState(false);
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [sseConnection, setSSEConnection] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { conversations, selectedConversation, messages, avatarConversation } = useSelector(
    (state) => state.chat
  );
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchConversations(user._id));
  }, [dispatch, user._id]);

  // useEffect(() => {
  //   if (selectedConversation?._id) {
  //     // Close existing connection if any
  //     if (sseConnection) {
  //       sseConnection.close();
  //     }

  //     // Setup new SSE connection
  //     const eventSource = new EventSource(
  //       `${API_URL}/api/v1/chat/sse/${selectedConversation._id}`
  //     );

  //     eventSource.onmessage = (event) => {
  //       const data = JSON.parse(event.data);
  //       if (data.type === "new_message") {
  //         dispatch(setMessages([...messages, data.message]));
  //       }
  //     };

  //     eventSource.onerror = (error) => {
  //       console.log("SSE Error:", error);
  //       eventSource.close();
  //     };

  //     setSSEConnection(eventSource);

  //     // Cleanup on unmount or conversation change
  //     return () => {
  //       eventSource.close();
  //     };
  //   }
  // }, [selectedConversation?._id]);

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    setInput("");
    setIsTyping(true);
    dispatch(addMessage({ content: input, sender: user._id }));

    axios
      .post("/chat/messages", {
        conversationId: selectedConversation._id,
        sender: user._id,
        content: input,
      })
      .then((res) => {
        setIsTyping(false);
        dispatch(addMessage(res.data.botMessage));

        if (res.data.conversationTitle !== "Untitled Conversation") {
          dispatch(
            setSelectedConversation({
              ...selectedConversation,
              title: res.data.conversationTitle,
            })
          );
        }
      })
      .catch((err) => {
        setIsTyping(false);
        console.error(err);
      });
  };

  const handleFileUpload = async (type) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = type === "image" ? "image/*" : "application/pdf";

    fileInput.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);
      formData.append("conversationId", selectedConversation._id);
      formData.append("sender", user._id);
      formData.append("content", `Uploaded ${type}: ${file.name}`);
      formData.append("fileType", type);

      setUploadingFile(true);
      setIsTyping(true);

      try {
        // Add user's upload message with loading state
        const uploadMessage = {
          sender: user._id,
          content: `Uploaded ${type}: ${file.name}`,
          isLoading: true,
          fileType: type,
          fileName: file.name,
        };
        dispatch(addMessage(uploadMessage));

        const response = await axios.post(
          `/chat/${type === "image" ? "img-analysis" : "pdf-analysis"}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        // Update messages to include the file display and response
        dispatch(
          setMessages([
            ...messages.filter(
              (msg) => !(msg.isLoading && msg.sender === user._id)
            ),
            {
              ...response.data.newMsg,
              fileType: type,
              fileName: file.name,
            },
            {
              sender: null,
              content: response.data.content,
            },
          ])
        );
      } catch (error) {
        console.error("File upload failed:", error);
        dispatch(
          setMessages([
            ...messages.filter(
              (msg) => !(msg.isLoading && msg.sender === user._id)
            ),
            {
              sender: null,
              content: `Error processing ${type}. Please try again.`,
            },
          ])
        );
      } finally {
        setUploadingFile(false);
        setIsTyping(false);
      }
    };

    fileInput.click();
  };

  // const handleFormSubmit = (formData) => {
  //   axios
  //     .post("/chat/conversations", {
  //       userId: user._id,
  //       questionaireData: formData,
  //     })
  //     .then((res) => {
  //       dispatch(fetchConversations(user._id));
  //       dispatch(loadConversation(res.data));
  //     })
  //     .catch((err) => console.error(err));
  // };

  return (
    <>
      <motion.section
        className="w-[90%] h-[90vh] fixed rounded-[50px] z-10 flex flex-col lg:flex-row bg-[#353D5A]"
        initial={{ y: 300 }}
        animate={{ y: 0 }}
      >
        {/* Left side - Image or Chat History */}
        <div className="w-full lg:w-1/3 flex flex-col bg-[#303855] rounded-l-[50px]">
          <div
            className="block md:hidden"
            onClick={() => setShowChatHistory(!showChatHistory)}
          >
            <HamburgerICO className="w-5" />
          </div>
          {showChatHistory ? (
            <>
              <div className="h-[85%] overflow-y-auto p-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <ConversationList
                  setMessages={setMessages}
                  setSelectedConversation={setSelectedConversation}
                  setIsFormOpen={setIsFormOpen}
                />
                <div className="md:hidden flex items-center justify-center">
                  <button
                    className="flex items-center justify-center gap-2 bg-[#11F4D1] px-4 py-2 rounded-full text-[#2B344C] text-sm font-cera font-bold"
                    onClick={() => setIsFormOpen(true)}
                  >
                    <AddIcon />
                    NEW CHAT
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="hidden h-[85%] relative lg:flex justify-center items-center">
              <Avatar3 className="" />
            </div>
          )}

          {/* Two Buttons */}
          <div className="hidden md:flex gap-2 justify-center lg:p-5 mt-auto">
            <button
              onClick={() => setShowChatHistory(!showChatHistory)}
              className={`lg:w-1/2 flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-cera font-bold ${
                showChatHistory
                  ? "bg-[#515F86] text-white"
                  : "bg-[#3D4B72] text-white"
              }`}
            >
              <HamburgerICO className="w-5" />
              {showChatHistory ? "CLOSE" : "CHAT HISTORY"}
            </button>
            <button
              className="lg:w-1/2 flex items-center justify-center gap-2 bg-[#11F4D1] px-6 py-4 rounded-full text-[#2B344C] text-sm font-cera font-bold"
              onClick={() => setIsFormOpen(true)}
            >
              <AddIcon />
              NEW CHAT
            </button>
          </div>
        </div>

        {/* Right side - Chat interface */}
        <div className={`flex-1 p-6 lg:p-8 flex flex-col`}>
          {!avatarConversation && (
            <MessagesSection messages={messages} isTyping={isTyping} />
          )}
          {avatarConversation && <AvatarConversation />}
          {selectedConversation && (
            <ChatInput
              input={input}
              setInput={setInput}
              handleSend={handleSend}
              handleFileUpload={handleFileUpload}
            />
          )}
        </div>
      </motion.section>
      <MultiStepForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        convoType="chat"
      />
    </>
  );
};

export default ChatInterface;
