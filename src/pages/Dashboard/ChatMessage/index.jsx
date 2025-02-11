import { FaUser, FaRobot } from "react-icons/fa"; // Import icons

const ChatMessage = ({ sender, text }) => {
    const isUser = sender === "user";

    // Modify response formatting
    const formattedText = text.replace("References:", "<br /><strong>References:</strong>");

    return (
        <div className={`flex items-start ${isUser ? "justify-end" : "justify-start"} mb-2`}>
            {!isUser && <FaRobot className="text-gray-500 mr-2" size={20} />} {/* Bot icon */}
            <div
                className={`max-w-xs p-3 rounded-lg text-sm ${isUser ? "bg-darkgreen text-white" : "bg-gray-200 text-gray-900"
                    }`}
                dangerouslySetInnerHTML={{ __html: formattedText }} // Inject formatted text
            />
            {isUser && <FaUser className="text-darkgreen ml-2" size={20} />} {/* User icon */}
        </div>
    );
};

export default ChatMessage;

