import { NavLink } from "react-router-dom";

const Sidebar = () => {
    // const links = [
    //     { name: "New Chat", path: "/dashboard/chat" },
    //     { name: "History", path: "/dashboard/history" },
    // ];

    const googleDriveLinks = [
        { name: "ESTACODE 2024", link: "https://drive.google.com/file/d/1aQQkvCc-KzFFhGBzb6uhV1hOEIb-rEHN/view?usp=sharing" },
        { name: "Khyber Pakhtunkhwa Government Rules of Business, 1985", link: "https://drive.google.com/file/d/1Q_WUXEqFXCH76OVt8M5wLj63qB0yq6oe/view?usp=sharing" },
        { name: "Executive Handbook 2024", link: "https://drive.google.com/file/d/1r_Dh_Fd0db4Rsk8Wo9SGn-mKi5Ouz5O_/view?usp=sharing" },
    ];

    return (
        <aside id="sidebar" className="w-64 bg-gray-200 text-black flex flex-col h-screen" >
            {/* Sidebar Header */}
            <div className="p-4 text-2xl font-bold border-b border-gray-300">
                <h1>Gov GPT</h1>
            </div>

            {/* Scrollable Links */}
            <nav className="flex-1 overflow-y-auto sidebar-scrollbar">
                {/* <ul className="mt-6 space-y-2">
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
                </ul> */}
                <ul className="mt-6 space-y-2">
                    <li className="block px-4 py-2 text-lg font-bold">Policy Links</li>
                    {/* {googleDriveLinks.map((driveLinks, index) => (
                        <li key={index}>
                            <NavLink
                                to={driveLinks.link}
                                className={({ isActive }) =>
                                    `block px-4 py-1 capitalize ${isActive ? "bg-gray-700" : "hover:bg-gray-600"
                                    }`
                                }
                                target="_blank">
                                {driveLinks.name}
                            </NavLink>
                        </li>
                    ))} */}
                    {googleDriveLinks
                        .slice().sort((a, b) => a.name.localeCompare(b.name)).map((driveLinks, index) => (
                            <li key={index}>
                                <NavLink
                                    to={driveLinks.link}
                                    className={({ isActive }) =>
                                        `block px-4 py-1 font-normal text-black capitalize ${isActive ? "bg-gray-200" : "hover:bg-gray-300"}`
                                    }
                                    target="_blank"
                                >
                                    {driveLinks.name}
                                </NavLink>
                            </li>
                        ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;