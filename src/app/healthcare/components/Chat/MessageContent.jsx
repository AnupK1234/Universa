import { FiFile, FiLoader } from "react-icons/fi";
import ReactMarkdown from "react-markdown";

const MessageContent = ({ message }) => {
  if (message.isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex">
          <span className="text-[#00FFD1] font-semibold mr-4">You:</span>
          <div className="flex items-center">
            <FiLoader className="animate-spin mr-2" />
            <span>
              Uploading {message.fileType}: {message.fileName}...
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (message.fileType === "image" && message.fileUrl) {
    return (
      <div className="space-y-2 ">
        <div className="flex">
          <span className="text-[#00FFD1] font-semibold mr-4">You:</span>
          <div>
            <img
              src={message.fileUrl}
              alt={message.fileName}
              className="max-w-[300px] max-h-[300px] rounded-lg object-contain"
            />
            {/* <p>{message.content}</p> */}
          </div>
        </div>
      </div>
    );
  }

  if (message.fileType === "pdf" && message.fileUrl) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex">
          <span className="text-[#00FFD1] font-semibold mr-4">You:</span>
          <div className="flex">
            <FiFile size={24} />
            <a
              href={message.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500"
            >
              {message.content}
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="mb-2 flex" key={message?.id}>
        <span className="text-[#00FFD1] font-semibold mr-4">
          {message?.sender ? "You:" : "Doc:"}
        </span>
        <span className="text-white leading-relaxed">
          <ReactMarkdown>{message?.content}</ReactMarkdown>
        </span>
      </div>
    </>
  );
};

export default MessageContent;
