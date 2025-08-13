import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaFileAlt, FaBook, FaFolderOpen } from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const googleDriveLinks = [
        {
            name: "ESTACODE 2024",
            link: "https://drive.google.com/file/d/1aQQkvCc-KzFFhGBzb6uhV1hOEIb-rEHN/view?usp=sharing",
            icon: <FaFileAlt size={18} />
        },
        {
            name: "Khyber Pakhtunkhwa Government Rules of Business, 1985",
            link: "https://drive.google.com/file/d/1Q_WUXEqFXCH76OVt8M5wLj63qB0yq6oe/view?usp=sharing",
            icon: <FaBook size={18} />
        },
        {
            name: "Executive Handbook 2024",
            link: "https://drive.google.com/file/d/1r_Dh_Fd0db4Rsk8Wo9SGn-mKi5Ouz5O_/view?usp=sharing",
            icon: <FaFolderOpen size={18} />
        },
    ];

    return (
        <aside
            className={`bg-gray-50 text-black flex flex-col h-screen border-r border-gray-200 transition-all duration-300 
                ${isOpen ? "w-64" : "w-20"}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4">
                {isOpen && (
                    <Link to={"/"} className="flex items-center gap-2">
                        <img
                            src="/imgs/govgpt-logo.png"
                            alt="GovGPT Logo"
                            className={`object-contain transition-all duration-300 ${isOpen ? "w-20 h-10" : "w-10 h-8"}`}
                        />
                    </Link>
                )}
                <button
                    // onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-600 hover:text-green-600 focus:outline-none"
                >
                    <FiMenu size={22} />
                </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto sidebar-scrollbar">
                <ul className="mt-6 space-y-2 mx-2">
                    {isOpen && <li className="block px-4 py-2 text-md font-bold">Policy Links</li>}
                    {googleDriveLinks
                        .slice()
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((driveLinks, index) => (
                            <li key={index}>
                                <NavLink
                                    to={driveLinks.link}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-1 font-normal text-black text-sm capitalize border rounded-2xl transition-all duration-200 
                                        ${isActive ? "bg-green-50 border-green-200" : "border-gray-200 hover:bg-green-50"}`
                                    }
                                    target="_blank"
                                >
                                    {isOpen ? (
                                        <>
                                            <span>{driveLinks.name}</span>
                                        </>
                                    ) : (
                                        <span className="text-lg">{driveLinks.icon}</span>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
