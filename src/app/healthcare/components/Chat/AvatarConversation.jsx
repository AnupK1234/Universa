import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

const AvatarConversation = () => {
  const messagesEndRef = useRef(null);
  const { avatarConversationMessages } = useSelector((state) => state.chat);

  useEffect(() => {
    scrollToBottom();
  }, [avatarConversationMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {avatarConversationMessages.length > 0 &&
        avatarConversationMessages.map((message, index) => (
          <div className="mb-2 flex" key={index}>
            <span className="text-[#00FFD1] font-semibold mr-4">
              {message.source === "user" ? "You:" : "Doc:"}
            </span>
            <span className="text-white leading-relaxed">
              <ReactMarkdown>{message.message}</ReactMarkdown>
            </span>
          </div>
        ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default AvatarConversation;
