import { useState, useEffect, useRef } from "react";
import ChatMessage from "../ChatMessage";
import InputBox from "../InputBox";
import { askGovGPT } from "../../../../api/govgpt";
const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const chatBoxRef = useRef();

    const [loading, setLoading] = useState(false);

    const handleSendMessage = async (userMessage) => {
        setMessages([...messages, { sender: "user", text: userMessage }]);
        setLoading(true);

        try {
            const botResponse = await askGovGPT(userMessage);
            console.log("Bot Response:", botResponse); // Debugging: Check the response

            // Ensure botResponse is a string
            const messageText = typeof botResponse === "string" ? botResponse : JSON.stringify(botResponse);

            // Update the messages state
            const updatedMessages = [
                ...messages,
                { sender: "user", text: userMessage },
                { sender: "bot", text: messageText },
            ];
            setMessages(updatedMessages);

            console.log("Updated Messages:", updatedMessages); // Log the updated messages state
        } catch (error) {
            console.error("Error fetching response:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "bot", text: "Error fetching response. Please try again." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Auto-scroll whenever  chat history updates
        chatBoxRef.current.scrollTo({ top: chatBoxRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex flex-col h-[calc(100vh-80px)] bg-gray-100">
            {/* Message Display Area */}
            <h1 className="text-2xl font-bold text-center mb-4">GovGPT Chat</h1>
            <div ref={chatBoxRef} className="min-h-[690px] overflow-y-auto bg-lightgray/50 rounded-lg p-4 border border-gray-300 chat-scrollbar">
                {messages.map((message, index) => (
                    <ChatMessage key={index} sender={message.sender} text={message.text} />
                ))}
                {loading && (
                    <p className="text-sm italic text-gray-500">GovGPT is typing...</p>
                )}
            </div>

            {/* InputBox Component */}
            <div className="bg-[#e6e5e5] rounded-2xl mt-4">
                <InputBox handleSendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default ChatBox;