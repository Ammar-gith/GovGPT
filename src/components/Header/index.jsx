import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white px-4 py-5">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">
                    <Link to="/">GovGPT</Link>
                </h1>
                <div className="links">
                    <Link to="/login" className="mr-4">Login</Link>
                    <Link to="/signup" className="font-poppins mr-4 px-7 py-3 bg-brightgreen hover:bg-darkgreen rounded-full">Signup</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;