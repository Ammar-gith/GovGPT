import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Popup from "../Popup";

import { FaUser } from "react-icons/fa";

const DashboardHeader = ({ toggleSidebar }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown if user clicks outside of profile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    // User Profile
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // User Setting Popup
    const toggleSettingsPopup = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    return (
        <header className="relative">
            <div className="flex items-center justify-between px-4 py-2 border-b bg-white z-10 shadow-md w-full">
                {/* Left: Logo or Menu Button */}
                <div className="flex items-center space-x-2">
                    <button onClick={toggleSidebar} className="p-2 rounded-md md:hidden hover:bg-gray-100">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-lg mx-2 text-token-text-secondary"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <span className="sr-only">New chat</span>
                    </button>
                </div>

                {/* Right: User Menu */}
                <div className="flex items-center space-x-4">
                    {/* <Link to={"/#"} className="font-medium text-white bg-darkgreen rounded-md py-1 px-2"> Policy Links </Link> */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
                            aria-haspopup="true"
                            aria-expanded={isDropdownOpen}
                        >
                            <span className="sr-only">Open user menu</span>
                            <FaUser className="text-gray-500" size={20} />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-2" role="menu" aria-orientation="vertical">
                                    {/* <Link
                                    to="#"
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-3 h-5 w-5 text-gray-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    My GPTs
                                </Link> */}
                                    <button
                                        onClick={toggleSettingsPopup}
                                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-3 h-5 w-5 text-gray-400"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="3"></circle>
                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                        </svg>
                                        Settings
                                    </button>
                                    <hr className="my-1 border-gray-200" />
                                    <Link
                                        to="/"
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-3 h-5 w-5 text-gray-400"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                            <polyline points="16 17 21 12 16 7"></polyline>
                                            <line x1="21" y1="12" x2="9" y2="12"></line>
                                        </svg>
                                        Log out
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Popup */}
                <Popup isOpen={isSettingsOpen} onClose={toggleSettingsPopup} title="Setting">
                    <h2 className="text-xl font-bold mb-4">Coming Soon</h2>
                    {/* <p>You can put any content you like here.</p> */}
                </Popup>
            </div>
        </header>
    );
};

DashboardHeader.propTypes = {
    toggleSidebar: PropTypes.func.isRequired
};
export default DashboardHeader;