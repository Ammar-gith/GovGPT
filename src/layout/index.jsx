// import PropTypes from "prop-types";
// import { useLocation, Outlet } from "react-router-dom";
// import PublicLayout from "./PublicLayout";
// import Header from "../components/Header";
// import DashboardLayout from "./DashboardLayout";
// // import DashboardHeader from "../components/DashboardHeader";

// const Layout = () => {
//     const location = useLocation();
//     const isDashboard = location.pathname.startsWith('/dashboard');

//     // Debugging
//     console.log("Current Path:", location.pathname);
//     console.log("Is Dashboard Route:", isDashboard);

//     return (
//         <>
//             {isDashboard ? "" : <Header />}
//             {isDashboard ? (
//                 <DashboardLayout>
//                     <Outlet />
//                 </DashboardLayout>
//             ) : (
//                 <PublicLayout>
//                     <Outlet />
//                 </PublicLayout>
//             )}
//         </>
//     );
// };

// Layout.propTypes = {
//     children: PropTypes.node,
// };

// export default Layout;

import PropTypes from "prop-types";
import { useLocation, Outlet } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import Header from "../components/Header";
import DashboardLayout from "./DashboardLayout";
//import DashboardHeader from "../components/DashboardHeader"; // Uncomment if needed

const Layout = () => {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith('/chat');

    return (
        <>
            {/* Use DashboardHeader if on Dashboard, otherwise use the normal Header */}
            {!isDashboard && <Header />}
            {isDashboard ? (
                <DashboardLayout>
                    <Outlet />
                </DashboardLayout>
            ) : (
                <PublicLayout>
                    <Outlet />
                </PublicLayout>
            )}
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
