import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import AuthModal from "../AuthModal/AuthModal";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const [isAuthOpen, setIsAuthOpen] = useState(false);

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "Chat", link: "/dashboard" },
        { name: "Fake News", link: "#fake-news" },
        { name: "Privacy Policy", link: "#policy" }
    ]

    return (
        <header className="w-full relative p-4 shadow-md bg-white dark:bg-gray-900">
            <div className="container m-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <Link to={"/"}>GovGPT</Link>
                </h1>
                <div className="flex gap-4">
                    {/* Navigation Menu */}
                    <nav className={`absolute md:relative top-14 md:top-0 left-0 w-full md:w-auto md:flex bg-white dark:bg-gray-900 shadow-md md:shadow-none transition-all z-10 ${menuOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className="block p-2 font-medium"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Dark Mode Toggle */}
                    {/* <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
                        {darkMode ? <BsSun className="text-yellow-500" /> : <BsMoon className="text-gray-700" />}
                    </button> */}

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* <div className="flex justify-center items-center h-screen">
                        <button
                            className="bg-blue-500 text-white px-5 py-2 rounded"
                            onClick={() => setIsAuthOpen(true)}
                        >
                            Open Auth Modal
                        </button>

                        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
                    </div> */}
                </div>
            </div>
        </header>
    );
}

export default Header;