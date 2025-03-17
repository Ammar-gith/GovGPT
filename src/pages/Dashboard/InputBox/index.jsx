import PropTypes from "prop-types";
import { useState, useRef } from "react";

const InputBox = ({ handleSendMessage }) => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null); // Initialize ref properly

    const handleSend = () => {
        if (!inputValue.trim()) return;
        handleSendMessage(inputValue); // Send the input message to parent
        setInputValue(""); // Clear the input field
    };

    return (
        <div className="w-full">
            <div className="relative p-2">
                <div className="w-full relative">
                    <textarea
                        ref={inputRef} // Attach ref to the textarea
                        className="outline-none w-full p-2 bg-transparent rounded-sm"
                        placeholder="Enter Message..."
                        value={inputValue} // Controlled component
                        onChange={(e) => setInputValue(e.target.value)} // Update state
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault(); // Prevent newline
                                handleSend();
                            }
                        }}
                    />
                    <button
                        type="submit"
                        className="h-8 w-8 rounded-full bg-black text-white absolute right-2 bottom-3"
                        onClick={handleSend}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-2xl"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

InputBox.propTypes = {
    handleSendMessage: PropTypes.func.isRequired,
};

export default InputBox;