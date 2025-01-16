import PropTypes from "prop-types";
import Footer from "../../components/Footer"

const PublicLayout = ({ children }) => {
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