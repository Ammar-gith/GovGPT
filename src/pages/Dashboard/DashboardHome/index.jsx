import { useState } from "react";
import { askGovGPT } from "../../../../api/govgpt";
import ChatBox from "../ChatBox";

const DashboardHome = () => {

    const [inputValue, setInputValue] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSend(inputValue);
            setInputValue("");
        }
    };
    return (
        <div className="flex-1 flex-col h-screen bg-gray-100">
            {/* Message Display Area */}
            {/* <div className="flex-grow overflow-y-auto p-4 space-y-4 chat-scrollbar">
                <div className="">
                    <h1 className="text-4xl font-bold font-poppins text-center">What can I help with? </h1>
                </div>
            </div> */}

            {/* InputBox Component */}
            <div className="bg-[#e6e5e5] rounded-2xl mt-4">
                <div className="w-full">
                    <ChatBox />
                </div>
            </div>
        </div>
    )
}

export default DashboardHome;