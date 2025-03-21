// import { useState } from "react";
// import { FaUser, FaRobot, FaTimes } from "react-icons/fa";

// const ChatMessage = ({ sender, text = "" }) => {
//     const isUser = sender === "user";
//     const [isPopupOpen, setIsPopupOpen] = useState(false);

//     // Ensure text is defined before running match
//     const contextMatch = text?.match(/Context:\s*(.*)/s);
//     const contextData = contextMatch ? contextMatch[1].trim() : "";

//     // Remove context from main message
//     const textWithoutContext = contextData ? text.replace(contextMatch[0], "").trim().replace("References:", "\nReferences:") : text;

//     return (
//         <div className={`flex items-start ${isUser ? "justify-end" : "justify-start"} mb-2`}>
//             {!isUser && <FaRobot className="text-gray-500 mr-2" size={20} />}
//             <div className={`max-w-xs p-3 rounded-lg text-sm ${isUser ? "bg-darkgreen text-white" : "bg-gray-200 text-gray-900"}`}>
//                 {textWithoutContext || "No response received."}
//                 {contextData && (
//                     <button onClick={() => setIsPopupOpen(true)} className="text-darkgreen underline ml-1 text-xs">
//                         View More
//                     </button>
//                 )}
//             </div>
//             {isUser && <FaUser className="text-darkgreen ml-2" size={20} />}

//             {/* Popup Modal */}
//             {isPopupOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-96 overflow-y-auto relative">
//                         <button onClick={() => setIsPopupOpen(false)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
//                             <FaTimes size={20} />
//                         </button>
//                         <h2 className="text-lg font-bold mb-4">Details</h2>
//                         <pre className="text-gray-800 text-sm whitespace-pre-wrap">{contextData}</pre>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatMessage;

import { useState } from "react";
import { FaUser, FaRobot, FaTimes } from "react-icons/fa";

const ChatMessage = ({ sender, text = "" }) => {
    const isUser = sender === "user";
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Extract Context if it exists
    const contextMatch = text?.match(/Context:\s*(.*)/s);
    const contextData = contextMatch ? contextMatch[1].trim() : "";

    // Ensure "References" starts on a new line, but "Answer:" stays inline
    let mainContent = contextData ? text.replace(contextMatch[0], "").trim() : text;
    mainContent = mainContent.replace(/^Answer:\s*\n*/, "Answer: "); // Ensure "Answer:" stays inline

    // Move "References:" to a new line and make it bold
    mainContent = mainContent.replace(/References:/, "<strong>References:</strong>").trim();

    return (
        <div className={`flex items-start ${isUser ? "justify-end" : "justify-start"} mb-2`}>
            {!isUser && <FaRobot className="text-gray-500 mr-2" size={20} />}
            <div className={`max-w-xs p-3 rounded-lg text-sm ${isUser ? "bg-darkgreen text-white" : "bg-gray-200 text-gray-900"}`}>
                <span className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: mainContent || "No response received." }} />

                {/* Show "View More" button only if Context exists */}
                {contextData && (
                    <button onClick={() => setIsPopupOpen(true)} className="text-darkgreen underline ml-1 text-xs">
                        View More
                    </button>
                )}
            </div>
            {isUser && <FaUser className="text-darkgreen ml-2" size={20} />}

            {/* Popup Modal for Context Details */}
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-96 overflow-y-auto relative">
                        <button onClick={() => setIsPopupOpen(false)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                            <FaTimes size={20} />
                        </button>
                        <h2 className="text-lg font-bold mb-4">Details</h2>
                        <pre className="text-gray-800 text-sm whitespace-pre-wrap">{contextData}</pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatMessage;
