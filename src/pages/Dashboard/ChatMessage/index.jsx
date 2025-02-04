// const ChatMessage = ({ sender, text }) => {
//     const isUser = sender === "user";
//     return (
//         <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
//             <div
//                 className={`max-w-xs p-3 rounded-lg text-sm ${isUser ? "bg-darkgreen text-white" : "bg-gray-200 text-gray-900"
//                     }`}
//             >
//                 {text} {/* Directly render the text (no need for JSON.stringify) */}
//             </div>
//         </div>
//     );
// };

// export default ChatMessage;


import { FaUser, FaRobot } from "react-icons/fa"; // Import icons

const ChatMessage = ({ sender, text }) => {
    const isUser = sender === "user";

    return (
        <div className={`flex items-start ${isUser ? "justify-end" : "justify-start"} mb-2`}>
            {!isUser && <FaRobot className="text-gray-500 mr-2" size={20} />} {/* Bot icon */}
            <div
                className={`max-w-xs p-3 rounded-lg text-sm ${isUser ? "bg-darkgreen text-white" : "bg-gray-200 text-gray-900"
                    }`}
            >
                {text}
            </div>
            {isUser && <FaUser className="text-darkgreen ml-2" size={20} />} {/* User icon */}
        </div>
    );
};

export default ChatMessage;
