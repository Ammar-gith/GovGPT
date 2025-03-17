import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AuthModal = ({ isOpen, onClose }) => {
    const [tab, setTab] = useState("login"); // 'login' or 'signup'
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (!isOpen) return null; // Hide modal if not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-96 rounded-lg shadow-lg">
                {/* Header with Close Button */}
                <div className="flex justify-between items-center px-5 py-3 border-b">
                    <h2 className="text-lg font-semibold">
                        {tab === "login" ? "Welcome Back" : "Create Account"}
                    </h2>
                    <FaTimes
                        className="cursor-pointer text-gray-600 hover:text-gray-900"
                        onClick={onClose}
                    />
                </div>

                {/* Tabs for Login/Signup */}
                <div className="flex">
                    <button
                        className={`w-1/2 py-2 ${tab === "login" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
                        onClick={() => setTab("login")}
                    >
                        Login
                    </button>
                    <button
                        className={`w-1/2 py-2 ${tab === "signup" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
                        onClick={() => setTab("signup")}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Login Form */}
                {tab === "login" && (
                    <div className="p-5">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-2 border rounded mb-2"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-2 border rounded mb-4"
                            onChange={handleChange}
                        />
                        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                            Login
                        </button>
                    </div>
                )}

                {/* Signup Form */}
                {tab === "signup" && (
                    <div className="p-5">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="w-full p-2 border rounded mb-2"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-2 border rounded mb-2"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-2 border rounded mb-2"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="w-full p-2 border rounded mb-4"
                            onChange={handleChange}
                        />
                        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthModal;
