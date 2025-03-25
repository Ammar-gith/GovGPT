import { FaBook, FaBalanceScale, FaGavel, FaArrowRight } from "react-icons/fa";
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
        FaBook: <FaBook className="text-3xl mx-auto text-black" />,
        FaBalanceScale: <FaBalanceScale className="text-3xl mx-auto text-black" />,
        FaGavel: <FaGavel className="text-3xl mx-auto text-black" />
    };

    return (
        <div className="w-full pb-4">
            {/* Hero Section */}
            <section className="w-full relative bg-islamia-collage bg-cover bg-center">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <section className="relative w-full max-w-[767px] m-auto text-center px-6 py-28 md:px-10 md:py-60">
                    <h2 className="text-4xl text-white md:text-5xl font-bold"> Your Digital Assistant for Government Policies </h2>
                    <p className="text-2xl mt-2 text-white"> Get instant, accurate answers to your government-related queries based on official policies and regulations. </p>
                    <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <button className="bg-white text-black px-10 py-3 rounded">
                            <Link to={"/dashboard"} className="font-semibold">Start Chat</Link>
                        </button>
                    </div>
                </section>
            </section>


            {/* Features Section */}
            <section className="w-full">
                <div className="container m-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 md:p-14 lg:p-28">
                        {services.map((item, index) => (
                            <div key={index} className="p-10 md:20 border border-green-950 rounded-lg shadow-md text-center">
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
            <section id="policy" className="w-full p-6">
                <div className="container m-auto bg-gray-200 rounded-lg px-6 py-28 md:px-10 md:py-20 shadow-sm bg-bab-e-khyber-gate bg-cover bg-center overflow-hidden relative">
                    {/* Overlay */}
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


