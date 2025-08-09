import { FaBook, FaBalanceScale, FaGavel, FaArrowRight, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {

    const services = [
        {
            "icon": "FaBook",
            "title": "Instant Query Resolution",
            "desc": "Get quick and accurate answers to your government-related queries, making information easily accessible."
        },
        {
            "icon": "FaBalanceScale",
            "title": "Guidelines & Documents Access",
            "desc": "Browse essential guidelines and official documents to stay informed about policies and procedures."
        },
        {
            "icon": "FaGavel",
            "title": "Laws & Policy Insights",
            "desc": "Get precise and up-to-date details on government rules, regulations, and compliance requirements based on official documents."
        }
    ]

    const iconMap = {
        FaBook: <FaBook className="text-3xl text-green-900 mx-auto" />,
        FaBalanceScale: <FaBalanceScale className="text-3xl text-green-900 mx-auto" />,
        FaGavel: <FaGavel className="text-3xl text-green-900 mx-auto" />
    };

    return (
        <div className="w-full pb-4 space-y-12">
                 {/* Hero Section */}
            <section className="w-full flex items-center justify-center px-4 md:px-8 lg:px-6 pt-12">
                    <div className="relative w-full max-w-7xl rounded-xl overflow-hidden">

                        {/* Background Image with right-to-left gradient overlay */}
                        <div className="absolute inset-0">
                            <div className="w-full h-full bg-islamia-collage bg-cover bg-center">
                                {/* Gradient from right to left over image */}
                                <div className="w-full h-full bg-gradient-to-l from-white/10 to-white/80"></div>
                            </div>
                        </div>

                        {/* Text Content (on top of image and gradient) */}
                        <div className="relative w-full max-w-[767px] mr-auto text-left px-6 py-14 md:px-10 md:py-15 z-10">
                            <h2 className="text-4xl text-black md:text-5xl font-bold">
                                Your Digital Assistant for Government Policies
                            </h2>
                            <p className="text-2xl mt-4 mb-4 text-gray-700 font-medium">
                                Get instant, accurate answers to your government-related queries based on official policies and regulations.
                            </p>
                            <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-4">
                                <Link to="/dashboard">
                                    <button className="bg-green-800 flex items-center gap-2 text-white px-6 py-3 rounded-md hover:bg-green-900">
                                    <FaComment className="text-lg" />
                                    <span className="font-semibold">Start Chat</span>
                                    </button>
                                </Link>
                            </div>
                       </div>
                 </div>
            </section>

            {/* Features Section */}
            <section className="w-full">
                <div className="container m-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 sm:mx-8 md:p-6 lg:p-4">
                        {services.map((item, index) => (
                            <div key={index} className="mx-4 p-6  border border-gray-300 rounded-lg shadow-md text-center">
                                    {iconMap[item.icon]}
                                    <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                                <p className="text-lg font-normal">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            {/* <section id="faqs" className="w-full p-6">
                <div className="container m-auto">
                    <div className="text-center font-poppins font-bold text-3xl">FAQs</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-14 lg:p-28">

                    </div>
                </div>
            </section> */}

            {/* Policy Links */}
           {/* <section id="policy" className="w-full p-6">
                <div className="container m-auto bg-gray-200 rounded-lg px-6 py-28 md:px-10 md:py-20 shadow-sm bg-bab-e-khyber-gate bg-cover bg-center overflow-hidden relative">
                    {/* Overlay 
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                    <div className="relative z-10">
                        <div className="container m-auto px-6 py-28 md:px-10 md:py-20">
                            <h2 className="text-center font-poppins text-white text-3xl font-bold mb-6">
                                Policy Links
                            </h2>
                            <h3 className="text-center font-poppins text-white text-xl font-medium w-full md:max-w-[1024px] m-auto mb-6">
                                The Govt GPT application is designed to assist users by providing information and answering queries strictly based on the content of the following official documents.
                            </h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <Link
                                    to={"https://drive.google.com/file/d/1aQQkvCc-KzFFhGBzb6uhV1hOEIb-rEHN/view?usp=sharing"}
                                    target="_blank"
                                    className="group flex items-center rounded-lg text-white border border-white p-4 hover:bg-muted/50 transition-all duration-300"
                                >
                                    <FaArrowRight className=" mr-2 transition-transform duration-300 group-hover:translate-x-1" width={16} height={16} />
                                    ESTACODE 2024
                                </Link>
                                <Link
                                    to={"https://drive.google.com/file/d/1Q_WUXEqFXCH76OVt8M5wLj63qB0yq6oe/view?usp=sharing"}
                                    target="_blank"
                                    className="group flex items-center rounded-lg text-white border border-white p-4 hover:bg-muted/50 transition-all duration-300"
                                >
                                    <FaArrowRight className=" mr-2 transition-transform duration-300 group-hover:translate-x-1" width={16} height={16} />
                                    Executive Handbook 2024
                                </Link>
                                <Link
                                    to={"https://drive.google.com/file/d/1r_Dh_Fd0db4Rsk8Wo9SGn-mKi5Ouz5O_/view?usp=sharing"}
                                    target="_blank"
                                    className="group flex items-center rounded-lg text-white border border-white p-4 hover:bg-muted/50 transition-all duration-300"
                                >
                                    <FaArrowRight className=" mr-2 transition-transform duration-300 group-hover:translate-x-1" width={16} height={16} />
                                    Khyber Pakhtunkhwa Government Rules of Business, 1985
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
            {/* Policy Links */}
            <section id="policy" className="w-full p-6 bg-gray-50">
                <div className="container m-auto">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {/* Header */}
                        <div className="bg-gray-50 px-6 py-6">
                            <h2 className="text-center text-black text-3xl font-bold">
                            Policy Links
                            </h2>
                            <p className="text-center text-black text-lg mt-6 max-w-5xl mx-auto">
                            The Govt GPT application is designed to assist users by providing
                            information and answering queries strictly based on the content
                            of the following official documents.
                            </p>
                        </div>

                        {/* Links Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                            <a
                            href="https://drive.google.com/file/d/1aQQkvCc-KzFFhGBzb6uhV1hOEIb-rEHN/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gray-100 rounded-lg p-5 flex items-center gap-3 hover:bg-green-50 hover:shadow-lg transition-all duration-300 hover:underline"
                            >
                            <FaArrowRight className="text-green-700 transition-transform duration-300 group-hover:translate-x-1" />
                            <span className="text-gray-900 font-medium">
                                ESTACODE 2024
                            </span>
                            </a>

                            <a
                            href="https://drive.google.com/file/d/1r_Dh_Fd0db4Rsk8Wo9SGn-mKi5Ouz5O_/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gray-100 rounded-lg p-5 flex items-center gap-3 hover:bg-green-50 hover:shadow-lg transition-all duration-300 hover:underline"
                            >
                            <FaArrowRight className="text-green-700 transition-transform duration-300 group-hover:translate-x-1" />
                            <span className="text-gray-900 font-medium">
                                Khyber Pakhtunkhwa Government Rules of Business, 1985
                            </span>
                            </a>

                            <a
                            href="https://drive.google.com/file/d/1Q_WUXEqFXCH76OVt8M5wLj63qB0yq6oe/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gray-100 rounded-lg p-5 flex items-center gap-3 hover:bg-green-50 hover:shadow-lg transition-all duration-300 hover:underline"
                            >
                            <FaArrowRight className="text-green-700 transition-transform duration-300 group-hover:translate-x-1" />
                            <span className="text-gray-900 font-medium">
                                Executive Handbook 2024
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fake News */}
            {/* <section id="fake-news" className="w-full bg-white px-6 py-16 md:px-6 md:py-10">
                <div className="container m-auto">
                    <h2 className="text-center font-poppins text-3xl font-bold mb-6">Fake News</h2>
                    <div className="flex flex-wrap md:flex-nowrap gap-4 bg-black p-10 justify-between items-center rounded-lg">
                        <div className="w-full max-w-[767px]">
                            <p className="text-white">AI-powered Fake News Detector that analyzes and verifies news content for authenticity, helping users distinguish between real and misleading information.</p>
                        </div>
                        <div className="">
                            <Link to={"https://fake-news12.streamlit.app/"} target="_blank" className="bg-white px-4 py-2 rounded-sm">Read More</Link>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Home;


