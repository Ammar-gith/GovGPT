import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const DashboardLayout = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(true); // moved from Sidebar
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth < 1024) {
                setIsSidebarVisible(false);
            } else {
                setIsSidebarVisible(true);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

    return (
        <div className="flex h-screen">
            {/* Mobile Overlay */}
            {isMobile && isSidebarVisible && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed md:relative h-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out
                ${isSidebarVisible ? (isOpen ? "w-64" : "w-20") : "w-0"}
                ${isSidebarVisible || isMobile ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0`}
            >
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {/* Main Content */}
            <div
                className={`flex flex-col transition-all duration-300 ${
                    isSidebarVisible ? (isOpen ? "md:ml-0" : "md:ml-0") : "md:ml-0"
                } flex-1`}
            >
                <DashboardHeader toggleSidebar={toggleSidebar} />
                <main className="flex-1 overflow-hidden bg-white">
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
