import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center h-[calc(100vh-125px)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="relative bg-white shadow-2xl rounded-3xl flex">
                    {/* Left Side - Sign In Form */}
                    <div className="w-1/2 p-12">
                        <div className="max-w-sm mx-auto space-y-8">
                            <h2 className="text-3xl font-bold text-center">Sign in</h2>

                            {/* Social Login Buttons */}
                            <div className="flex justify-center space-x-4">
                                <button size="icon" className="flex justify-center items-center rounded-full border w-12 h-12">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M22.675 0h-21.35c-.73 0-1.325.596-1.325 1.326v21.348c0 .73.596 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.917c-1.505 0-1.796.715-1.796 1.762v2.315h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.326-.596 1.326-1.326v-21.348c0-.73-.596-1.326-1.326-1.326z"
                                        />
                                    </svg>

                                    <span className="sr-only">Facebook</span>
                                </button>
                                <button size="icon" className="flex justify-center items-center border rounded-full w-12 h-12">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                    <span className="sr-only">Google</span>
                                </button>
                                <button size="icon" className="flex justify-center items-center border rounded-full w-12 h-12">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.4 19h-2.6v-8h2.6v8zm-1.3-9.2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11.7 9.2h-2.6v-3.6c0-.96-.04-2.2-1.35-2.2-1.35 0-1.55 1.05-1.55 2.14v3.66h-2.6v-8h2.5v1.1h.03c.35-.65 1.2-1.35 2.47-1.35 2.64 0 3.13 1.73 3.13 3.97v4.28z"
                                        />
                                    </svg>

                                    <span className="sr-only">LinkedIn</span>
                                </button>
                            </div>

                            <div className="text-center text-sm text-gray-500">
                                or use your account
                            </div>

                            {/* Login Form */}
                            <form className="space-y-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-12 bg-gray-100 border-none p-3"
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full h-12 bg-gray-100 border-none p-3"
                                    required
                                />
                                <div className="text-center">
                                    <Link href="#" className="text-sm text-gray-600 hover:underline" > Forgot your password? </Link>
                                </div>
                                <Link to="/dashboard" className="flex items-center justify-center w-full h-12 bg-brightgreen hover:bg-darkgreen text-white rounded-full"> SIGN IN </Link>
                            </form>
                        </div>
                    </div>

                    {/* Right Side - Welcome Message */}
                    <div className="w-1/2 bg-gradient-to-r from-brightgreen to-darkgreen rounded-r-3xl text-white p-12 flex flex-col items-center justify-center text-center">
                        <h2 className="text-4xl font-bold mb-6">Hello, Friend!</h2>
                        <p className="mb-8 text-lg">Enter your personal details and start journey with us</p>
                        <Link to="/signup" className="border-2 border-white text-white hover:bg-white hover:text-brightgreen rounded-full px-8 h-12 flex items-center justify-center">SIGN UP</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;