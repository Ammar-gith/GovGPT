import { useState, useEffect, useRef } from "react";
import ChatMessage from "../ChatMessage";
import InputBox from "../InputBox";
import { askGovGPT } from "../../../../api/govgpt";
import SuggestedPrompts from "../../../components/suggestedPrompts";

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [showSuggestedPrompts, setShowSuggestedPrompts] = useState(true);
    const chatBoxRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async (userMessage) => {
        setShowSuggestedPrompts(false);  // Hide suggested prompts
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
            <div ref={chatBoxRef} className="flex-1 overflow-y-auto px-4 pt-4 chat-scrollbar" >
                {messages.map((message, index) => (
                    <ChatMessage key={index} sender={message.sender} text={message.text} />
                ))}
                {loading && (
                    <p className="text-sm italic text-gray-500 mb-4">GovGPT is typing...</p>
                )}
            </div>

            <div className="sticky bottom-3 pt-4">
                {/* Show Suggested Prompts only if no message has been sent */}
                {showSuggestedPrompts && <SuggestedPrompts onPromptClick={handleSendMessage} />}
                <div className="bg-white shadow-md rounded-2xl">
                    <InputBox handleSendMessage={handleSendMessage} />
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
