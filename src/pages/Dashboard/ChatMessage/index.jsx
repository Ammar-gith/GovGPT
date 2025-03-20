// import { FaUser, FaRobot } from "react-icons/fa"; // Import icons

// const ChatMessage = ({ sender, text }) => {
//     const isUser = sender === "user";

//     // Modify response formatting
//     const formattedText = text.replace("References:", "<br /><strong>References:</strong>");

//     return (
//         <div className={`flex items-start ${isUser ? "justify-end" : "justify-start"} mb-2`}>
//             {!isUser && <FaRobot className="text-gray-500 mr-2" size={20} />} {/* Bot icon */}
//             <div
//                 className={`max-w-xs p-3 rounded-lg text-sm ${isUser ? "bg-darkgreen text-white" : "bg-gray-200 text-gray-900"
//                     }`}
//                 dangerouslySetInnerHTML={{ __html: formattedText }} // Inject formatted text
//             />
//             {isUser && <FaUser className="text-darkgreen ml-2" size={20} />} {/* User icon */}
//         </div>
//     );
// };

// export default ChatMessage;

import { useState } from "react";
import { FaUser, FaRobot, FaTimes } from "react-icons/fa";

const ChatMessage = ({ sender, text }) => {
    const isUser = sender === "user";
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Extract "Context" data correctly
    const contextMatch = text.match(/Context:\s*(.*)/s); // Match everything after "Context:"
    const contextData = contextMatch ? contextMatch[1].trim() : ""; // Ensure it captures everything

    // Remove context from main message
    const textWithoutContext = contextData ? text.replace(contextMatch[0], "").trim() : text;

    return (
        <div className={`flex items-start ${isUser ? "justify-end" : "justify-start"} mb-2`}>
            {!isUser && <FaRobot className="text-gray-500 mr-2" size={20} />}
            <div
                className={`max-w-xs p-3 rounded-lg text-sm ${isUser ? "bg-darkgreen text-white" : "bg-gray-200 text-gray-900"}`}
            >
                {textWithoutContext}
                {contextData && (
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="text-darkgreen underline text-xs"
                    >
                        View More
                    </button>
                )}
            </div>
            {isUser && <FaUser className="text-darkgreen ml-2" size={20} />}

            {/* Popup Modal (Scrollable with Close Icon on Top) */}
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-96 overflow-y-auto relative">
                        {/* Close Button at Top Right */}
                        <button
                            onClick={() => setIsPopupOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        >
                            <FaTimes size={20} />
                        </button>
                        <h2 className="text-lg font-bold mb-4">All Data</h2>
                        <pre className="text-gray-800 text-sm whitespace-pre-wrap">{contextData}</pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatMessage;


