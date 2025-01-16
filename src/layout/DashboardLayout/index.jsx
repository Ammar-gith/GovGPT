import PropTypes from "prop-types";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const DashboardLayout = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    // Toggle the sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex h-screen overflow-hidden relative">
            {/* Sidebar */}
            <div className={`transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                {isSidebarVisible && <Sidebar />}
            </div>

            {/* Main Dashboard Content */}
            <div id="dashboard-main" className="flex flex-col flex-grow overflow-y-auto relative">
                {/* Header */}
                <DashboardHeader toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                <main className="flex-grow bg-gray-100">
                    <div className="max-w-3xl mx-auto">
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