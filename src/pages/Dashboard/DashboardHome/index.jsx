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
        <div className="flex-1 flex-col h-screen">
            {/* InputBox Component */}
            <div className="rounded-2xl">
                <div className="w-full">
                    <ChatBox />
                </div>
            </div>
        </div>
    )
}

export default DashboardHome;