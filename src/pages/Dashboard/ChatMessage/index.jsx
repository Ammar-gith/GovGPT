const ChatMessage = ({ sender, text }) => {
    const isUser = sender === "user";
    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
            <div
                className={`max-w-xs p-3 rounded-lg text-sm ${isUser ? "bg-darkgreen text-white" : "bg-gray-200 text-gray-900"
                    }`}
            >
                {text} {/* Directly render the text (no need for JSON.stringify) */}
            </div>
        </div>
    );
};

export default ChatMessage;