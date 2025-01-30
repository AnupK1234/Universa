import SendICO from "@public/arrow-right-dark.svg";
import CameraICO from "@public/camera-off.svg";
import PaperclipICO from "@public/clip.svg";
import MicICO from "@public/mic-on.svg";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatInput = ({ setInput, handleSend, input, handleFileUpload }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { isLoading, isAvatarVisible } = useSelector((state) => state.simli);
  const [showFileOptions, setShowFileOptions] = useState(false);
  const textareaRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim()) {
      handleSend();
    }
  };

  const handleInputInteraction = (e) => {
    // Small timeout to let the default behavior complete
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(input.length, input.length);
      }
    }, 0);
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to avoid constant growth
      textarea.style.height = "auto";
      // Set new height based on scrollHeight, with a max-height
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [input]);

  // const handleStart = () => {
  //   dispatch(
  //     startSimli({
  //       agentId: "your-agent-id",
  //       onStart: () => console.log("Started from Something component"),
  //     })
  //   );
  // };

  // const handleStop = () => {
  //   dispatch(
  //     stopSimli({
  //       onClose: () => console.log("Stopped from Something component"),
  //     })
  //   );
  // };

  return (
    <div className="relative mt-auto border-2 border-[#A3B0DE] rounded-full">
      <div className="flex items-center gap-2 bg-[#353D5A] rounded-full p-3 pr-4">
        <button
          className="p-2 bg-white/10 rounded-full"
          onClick={() => setShowFileOptions(!showFileOptions)}
        >
          <PaperclipICO className="w-5 h-5" />
        </button>
        {showFileOptions && (
          <div className="absolute bottom-full left-0 mb-2 bg-[#353D5A] rounded-lg shadow-lg">
            <button
              className="block w-full px-4 py-2 text-white hover:bg-white/10"
              onClick={() => {
                handleFileUpload("image");
                setShowFileOptions(false);
              }}
            >
              Upload Image
            </button>
            <button
              className="block w-full px-4 py-2 text-white hover:bg-white/10"
              onClick={() => {
                handleFileUpload("pdf");
                setShowFileOptions(false);
              }}
            >
              Upload PDF
            </button>
          </div>
        )}
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          onFocus={handleInputInteraction}
          placeholder="Type here"
          rows={1}
          className="w-[2rem] flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 resize-none overflow-y-auto scrollbar-thin"
          style={{
            minHeight: "24px",
            maxHeight: "150px",
            lineHeight: "24px",
            scrollbarWidth: "thin",
            scrollbarColor: "#A3B0DE transparent",
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#A3B0DE",
              borderRadius: "4px",
            },
          }}
        />
        <div className="flex items-center gap-2">
          <button
            className={`p-2 ${
              input.trim() ? "bg-accent" : "bg-teal-700"
            } rounded-full`}
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <SendICO className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white/10 rounded-full">
            <MicICO className="w-5 h-5" />
          </button>
          <button className="hidden md:block p-2 bg-white/10 rounded-full">
            <CameraICO className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
