import MicICO from "@public/mic-on.svg";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import MessageContent from "./MessageContent";
// import Avatar3 from "@/app/components/ElevenLab_Simli/Avatar3";

const MessagesSection = ({ messages, isTyping }) => {
  const { selectedConversation } = useSelector(
    (state) => state.chat
  );
  const messagesEndRef = useRef(null);
  const [avatar, setAvatar] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-[70vh] md:h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {messages.length ? (
        messages?.map((message, index) => <MessageContent message={message} key={index} />)
      ) : (
        <div className="mb-2 lg:flex">
          <div className={`${avatar ? "block" : "hidden"}  lg:hidden`}>
            {/* <Avatar3/> */}
            <button className="w-full flex items-center justify-center gap-2 bg-[#11F4D1] px-6 py-4 rounded-full text-[#2B344C] text-sm font-cera font-bold"
            onClick={ () => setAvatar(false)}
            >
              CHAT
            </button> 
          </div>
          
          <div className={`${avatar && "hidden"} text-white lg:flex flex-col w-full`}>
            <span className="leading-relaxed font-bold">
              {selectedConversation ? `Post your first message to chat` : `Please create a New Chat or Select an Existing conversation from Chat History to continue`}
            </span>
            <div className="flex flex-col rounded-[10px] p-4 font-bold bg-white/5 w-full lg:p-5 lg:mt-5">
              <span className="flex items-start md:items-center lg:pb-3">
                <span>
                1.
                </span>
                <div className="flex flex-col items-start ml-4 md:ml-0 md:flex-row md:items-center">
                  <span className="p-2 bg-white/10 rounded-full lg:mx-4">
                    <MicICO />
                  </span>{" "}
                  <span>Use microphone button to talk.</span>
                </div>
              </span>
              {/* <span className="flex items-center lg:pb-3">
                2.{" "}
                <div className="flex flex-col md:flex-row items-center">
                  <span className="p-2 bg-white/10 rounded-full lg:mx-4">
                    <CameraICO />
                  </span>{" "}
                  <span>Use camera button to turn your camera on/off.</span>
                </div>
              </span> */}
              <span className="flex lg:pb-3">
                2.  Or use the field below to type.
              </span>
            </div>
          </div>
        </div>
      )}
      {isTyping && (
        <div className="mb-2 flex">
          <span className="text-[#00FFD1] font-semibold mr-4">Doc:</span>
          <span className="text-white leading-relaxed flex items-center">
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </span>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessagesSection;
