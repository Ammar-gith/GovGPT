// // import PropTypes from "prop-types";
// // import { useState } from "react";
// // import { Outlet } from "react-router-dom";
// // import Sidebar from "../../components/Sidebar";
// // import DashboardHeader from "../../components/DashboardHeader";

// // const DashboardLayout = ({ children }) => {
// //     const [isSidebarVisible, setIsSidebarVisible] = useState(true);

// //     // Toggle the sidebar visibility
// //     const toggleSidebar = () => {
// //         setIsSidebarVisible(!isSidebarVisible);
// //     };

// //     return (
// //         <div className="flex h-screen overflow-hidden relative">
// //             {/* Sidebar */}
// //             <div className={`transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
// //                 {isSidebarVisible && <Sidebar />}
// //             </div>

// //             {/* Main Dashboard Content */}
// //             <div id="dashboard-main" className="flex flex-col flex-grow h-screen overflow-y-auto relative">
// //                 {/* Header */}
// //                 <DashboardHeader toggleSidebar={toggleSidebar} />

// //                 {/* Main Content */}
// //                 <main className="flex-grow bg-gray-100 py-3">
// //                     <div className="max-w-3xl mx-auto">
// //                         {children || <Outlet />}
// //                     </div>
// //                 </main>
// //             </div>
// //         </div>
// //     );
// // };

// // DashboardLayout.propTypes = {
// //     children: PropTypes.node,
// // };

// // export default DashboardLayout;

// import PropTypes from "prop-types";
// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../../components/Sidebar";
// import DashboardHeader from "../../components/DashboardHeader";

// const DashboardLayout = ({ children }) => {
//     const [isSidebarVisible, setIsSidebarVisible] = useState(true);

//     // Toggle the sidebar visibility
//     const toggleSidebar = () => {
//         setIsSidebarVisible(!isSidebarVisible);
//     };

//     return (
//         <div className="flex h-screen overflow-hidden relative">
//             {/* Sidebar */}
//             <div className={`transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
//                 {isSidebarVisible && <Sidebar />}
//             </div>

//             {/* Main Dashboard Content */}
//             <div id="dashboard-main" className="flex flex-col flex-grow h-screen relative">
//                 {/* Header */}
//                 <DashboardHeader toggleSidebar={toggleSidebar} />

//                 {/* Main Content */}
//                 <main className="flex-grow bg-gray-100 py-3">
//                     <div className="max-w-3xl mx-auto">
//                         {children || <Outlet />}
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// };

// DashboardLayout.propTypes = {
//     children: PropTypes.node,
// };

// export default DashboardLayout;


import PropTypes from "prop-types";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const DashboardLayout = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex h-screen overflow-hidden relative">
            {/* Sidebar */}
            <div className={`transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
                }`}>
                {isSidebarVisible && <Sidebar />}
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col flex-1 min-h-0">
                {/* Header */}
                <DashboardHeader toggleSidebar={toggleSidebar} />

                {/* Scrollable Content Container */}
                <main className="flex-1 overflow-hidden bg-gray-100 py-3">
                    <div className="max-w-3xl mx-auto h-full">
                        {children || <Outlet />}
                    </div>
                </main>
            </div>
        </div>
    );
};

DashboardLayout.propTypes = {
    children: PropTypes.node,
};

export default DashboardLayout;