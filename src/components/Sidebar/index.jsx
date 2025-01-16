import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const links = [
        { name: "New Chat", path: "/dashboard/chat" },
        { name: "History", path: "/dashboard/history" },
        // { name: "Settings", path: "/dashboard/settings" },
        // { name: "Profile", path: "/dashboard/profile" },
        // { name: "Help", path: "/dashboard/help" },
        // { name: "About", path: "/dashboard/about" },
    ];

    return (
        <div id="sidebar" className="w-64 bg-gray-800 text-white flex flex-col h-screen" >
            {/* Sidebar Header */}
            <div className="p-4 text-2xl font-bold border-b border-gray-700">
                <h1>GovGPT Dashboard</h1>
            </div>

            {/* Scrollable Links */}
            <nav className="flex-1 overflow-y-auto custom-scrollbar">
                <ul className="mt-6 space-y-2">
                    {links.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `block px-4 py-2 ${isActive ? "bg-gray-700" : "hover:bg-gray-600"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
