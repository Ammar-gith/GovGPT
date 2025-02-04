import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from '../layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import DashboardLayout from "../layout/DashboardLayout";
// import NewChat from "../pages/Dashboard/NewChat";
import History from "../pages/Dashboard/History";

import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import ChatBox from "../pages/Dashboard/ChatBox";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const AppRoutes = () => {
    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
                {/* Public Routes with Public Layout */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>

                {/* Dashboard Routes with Dashboard Layout */}
                <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>}>
                    <Route index element={<DashboardHome />} />
                    {/* <Route index element={<ChatBox />} /> */}
                    <Route path="chat" element={<ChatBox />} />
                    <Route path="history" element={<History />} />
                    <Route path="history/:id" element={<History />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                </Route>

                {/* 404 Page */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
