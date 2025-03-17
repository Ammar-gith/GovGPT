import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const DashboardLayout = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Mobile detection

    // Update sidebar state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth < 1024) {
                setIsSidebarVisible(false); // Auto-hide on mobile
            } else {
                setIsSidebarVisible(true); // Show on desktop
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set initial state

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Mobile Overlay */}
            {isMobile && isSidebarVisible && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed md:relative h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out
                ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0 md:w-64`}
            >
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                {/* Header */}
                <DashboardHeader toggleSidebar={toggleSidebar} />

                {/* Scrollable Content */}
                <main className="flex-1 overflow-auto bg-gray-100 p-3">
                    <div className="max-w-3xl mx-auto">{children || <Outlet />}</div>
                </main>
            </div>
        </div>
    );
};

DashboardLayout.propTypes = {
    children: PropTypes.node,
};

export default DashboardLayout;