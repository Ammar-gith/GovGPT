import PropTypes from "prop-types";

import { useState } from "react";

import Footer from "../../components/Footer"

const PublicLayout = ({ children }) => {
    // Load dark mode state from local storage
    // const [darkMode, setDarkMode] = useState(
    //     localStorage.getItem("darkMode") === "true"
    // );

    // Save preference and update body class
    // useEffect(() => {
    //     localStorage.setItem("darkMode", darkMode);
    //     if (darkMode) {
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         document.documentElement.classList.remove("dark");
    //     }
    // }, [darkMode]);

    return (
        <div className="layout">
            <main className="content">{children}</main>
            <Footer />
        </div>
    )
}

PublicLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default PublicLayout;