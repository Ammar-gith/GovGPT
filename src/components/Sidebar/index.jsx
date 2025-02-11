import { NavLink } from "react-router-dom";

const Sidebar = () => {
    // const links = [
    //     { name: "New Chat", path: "/dashboard/chat" },
    //     { name: "History", path: "/dashboard/history" },
    // ];

    const googleDriveLinks = [
        { name: "ESTACODE 2024", link: "https://drive.google.com/file/d/1aQQkvCc-KzFFhGBzb6uhV1hOEIb-rEHN/view?usp=sharing" },
        { name: "health Policy", link: "https://drive.google.com/file/d/17LHKdm1uPlw4kQP_sYuj0p9cyJBnzlFP/view?usp=sharing" },
        { name: "the khyber pakhtunkhwa arms act, 2013", link: "https://drive.google.com/file/d/1mQCSJZyeTsH_yIohlAWyfg4g4eggG-wJ/view?usp=sharing" },
        { name: "khyber pakhtunkhwa civil servants pension rules, 2021", link: "/dashboard/profile" },
        { name: "agriculture Policy khyber pakhtunkhwa", link: "https://drive.google.com/file/d/1Iv5WhfAwSbVFzTKEjwvfcPNJGg2Wp-Jo/view?usp=sharing" },
        { name: "government of khyber pakhtunkhwa board of revenue revenue & estate department 2015", link: "https://drive.google.com/file/d/1EzSWMu5BJg0JsZNkZTxUfwaONs8nbuir/view?usp=sharing" },
        { name: "government of khyber pakhtunkhwa planning and development department (2019 - 2023)", link: "https://drive.google.com/file/d/1e5XsD4cfI-T6HLUXjhgKSf2euRP0uzg4/view?usp=sharing" },
        { name: "the khyber pakhtunkhwa contributory provident fund rules, 2022", link: "https://drive.google.com/file/d/1Ec3zeoLEIzOOO-1IiKaSHySaVWfukeY5/view?usp=sharing" },
        { name: "the khyber pakhtunkhwa emergency rescue service act, 2012", link: "https://drive.google.com/file/d/1zXLEFbIxnS6JdoEJVxhB2C3w9RIr7H4l/view?usp=sharing" },
        { name: "the khyber pakhtunkhwa sales tax on services act, 2022", link: "https://drive.google.com/file/d/1WEerv6cb0trt-2Df-IhHZaraNoli-X9_/view?usp=sharing" },
        { name: "the khyber pakhtunkhwa water act, 2020", link: "https://drive.google.com/file/d/1845RjRLgctVvRW2mX1jO5VJKBQtG73TN/view?usp=sharing" },
        { name: "the khyber pakhtunkhwa zakat and ushr act, 2011", link: "https://drive.google.com/file/d/1xCQTburYEoIA_ZK8jMykKBCLrQOaww4g/view?usp=sharing" },
        { name: "the khyber pakhtunkhwa police (amendment) act, 2024", link: "https://drive.google.com/file/d/1Va6W_iBgAQvyMf1kqrzUweh6x0zbe9V3/view?usp=sharing" },
        { name: "khyber pakhtunkhwa provincial assembly secretariat employees act, 2024", link: "https://drive.google.com/file/d/1U4UutakbBOZfdH4LtR2qfFVKrmgQIFDN/view?usp=sharing" },
    ];

    return (
        <aside id="sidebar" className="w-64 bg-gray-800 text-white flex flex-col h-screen" >
            {/* Sidebar Header */}
            <div className="p-4 text-2xl font-bold border-b border-gray-700">
                <h1>GovGPT Dashboard</h1>
            </div>

            {/* Scrollable Links */}
            <nav className="flex-1 overflow-y-auto custom-scrollbar">
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
                    <li className="block px-4 py-2 text-xl font-bold">Policy Links</li>
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
                                        `block px-4 py-1 font-thin capitalize ${isActive ? "bg-gray-700" : "hover:bg-gray-600"}`
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
