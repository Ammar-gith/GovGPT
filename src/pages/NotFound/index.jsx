import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-darkgreen">404</h1>
                <h2 className="text-3xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
                <p className="text-gray-500 mt-3 mb-5">
                    Oops! The page you’re looking for doesn’t exist.
                </p>
                <Link to="/" className="mt-6 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
