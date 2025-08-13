import { useState, useEffect, useRef } from "react";
import ChatMessage from "../ChatMessage";
import InputBox from "../InputBox";
import { askGovGPT } from "../../../../api/govgpt";
import SuggestedPrompts from "../../../components/SuggestedPrompts";

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [showSuggestedPrompts, setShowSuggestedPrompts] = useState(true);
    const chatBoxRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async (userMessage) => {
        setShowSuggestedPrompts(false);
        setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
        setLoading(true);

        try {
            const botResponse = await askGovGPT(userMessage);
            const messageText = typeof botResponse === "string" ? botResponse : JSON.stringify(botResponse);

            setMessages(prev => [
                ...prev,
                { sender: "bot", text: messageText },
            ]);
        } catch (error) {
            console.error("Error fetching response:", error);
            setMessages(prev => [
                ...prev,
                { sender: "bot", text: "Error fetching response. Please try again." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        chatBoxRef.current?.scrollTo({ top: chatBoxRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex flex-col h-screen"> 
            {/* Scrollable messages area */}
            <div
                ref={chatBoxRef}
                className="flex-1 w-full overflow-y-auto chat-scrollbar  pt-4 pb-24"
           
            >
                {messages.map((message, index) => (
                    <ChatMessage key={index} sender={message.sender} text={message.text} />
                ))}
                {loading && (
                    <p className="text-sm italic text-gray-500 mb-4">GovGPT is typing...</p>
                )}
            </div>
            
            {/* Fixed input area */}
            <div className="sticky bottom-0 bg-white">
                {showSuggestedPrompts && (
                    <SuggestedPrompts onPromptClick={handleSendMessage} />
                )}
                <div className="rounded-3xl">
                    <InputBox handleSendMessage={handleSendMessage} />
                </div>
                <p className="text-center mb-2 font-poppins text-xs text-gray-500">
                    GovGPT can make mistakes. Check important info.
                </p>
            </div>
        </div>
    );
};

export default ChatBox;
