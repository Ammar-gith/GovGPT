import { NavLink, Link } from "react-router-dom";
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
        <aside id="sidebar" className="w-64 bg-gray-50 text-black flex flex-col h-screen border-r border-gray-200" >
            {/* Sidebar Header */}
            <div className="p-4">
                   <h1 className="text-xl ">
                        <Link to={"/"} className="flex items-center gap-2">
                        <img src="/imgs/govgpt-logo.png" alt="GovGPT Logo" className="w-20 h-10 object-contain" />

                                {/* <span className="text-2xl font-bold text-green-700">GovGPT</span> */}
                        </Link>
                    </h1>
            </div>

            {/* Scrollable Links */}
            <nav className="flex-1 overflow-y-auto sidebar-scrollbar">
                <ul className="mt-6 space-y-2 mx-2">
                    <li className="block px-4 py-2 text-md font-bold">Policy Links</li>
                    {googleDriveLinks
                        .slice().sort((a, b) => a.name.localeCompare(b.name)).map((driveLinks, index) => (
                            <li key={index}>
                                <NavLink
                                    to={driveLinks.link}
                                    className={({ isActive }) =>
                                        `block px-4 py-1 font-normal text-black text-sm capitalize border rounded-2xl  ${isActive ? "bg-green-50 border-green-200" : "border-gray-200 hover:bg-green-50"}`
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