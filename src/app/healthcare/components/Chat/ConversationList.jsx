import React from "react";
import { MessageSquarePlus } from "lucide-react";
import CloseICO from "@public/close-white.svg";
import axios from "../../lib/axiosInstance";
import { fetchConversations, loadConversation } from "../../services/chatService";
import { useDispatch, useSelector } from "react-redux";

const ConversationList = ({ setMessages, setSelectedConversation }) => {
  const { user } = useSelector((state) => state.user);
  const { conversations, selectedConversation } = useSelector(
    (state) => state.chat
  );
  const dispatch = useDispatch();

  if (conversations.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center py-12 px-4">
        <MessageSquarePlus className="w-12 h-12 text-white/50 mb-4" />
        <p className="text-white/70 text-center font-cera">
          No conversations yet.
          <br />
          Please create a new conversation.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      {conversations.map((conv) => (
        <div
          key={conv._id}
          className="group flex items-center justify-between py-2 px-3 mb-1 bg-white/5 hover:bg-white/10 rounded-[50px] transition-colors duration-200"
          onClick={() => dispatch(loadConversation(conv))}
        >
          <p className="text-white truncate font-cera font-medium">
            {conv.title}
          </p>
          <button
            className="hidden group-hover:flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full p-1"
            onClick={(e) => {
              e.stopPropagation();

              axios
                .delete(`/chat/conversations/${conv._id}`)
                .then(() => {
                  dispatch(fetchConversations(user._id));
                  if (selectedConversation?._id === conv._id) {
                    dispatch(setSelectedConversation(null))
                    dispatch(setMessages([]))
                  }
                })
                .catch((err) => console.error(err));
            }}
          >
            <CloseICO />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
