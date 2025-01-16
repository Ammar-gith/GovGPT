const Home = () => {
    return (
        <div className="home container mx-auto p-4">
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-5xl border border-gray-50 p-4">
                    <h2 className="text-2xl font-bold mb-3 text-center">Disclaimer</h2>
                    <p>The Govt GPT application is designed to assist users by providing information and answering queries strictly based on the content of the following official documents:</p>
                    <ul>
                        <li>* Esta Code 2024</li>
                        <li>* KP Policy on Agriculture</li>
                        <li>* The Khyber Pakhtunkhwa Sales Tax on Services Act 2022</li>
                        <li>* The Khyber Pakhtunkhwa Police Amendment Act 2024</li>
                        <li>* Users are advised to limit their queries to the policies, business rules, and regulations contained in the above-mentioned documents.</li>
                        <li>* The information provided by the system is for reference purposes only and may not substitute official advice or consultation with the relevant departments.
                            By using this application, you acknowledge and agree that the creators of Govt GPT are not responsible for any inaccuracies, misinterpretations, or consequences resulting from reliance on the system’s responses.</li>
                    </ul>
                    <p>For further clarification or feedback, please contact the relevant department directly..</p>
                </div>
            </div>
        </div>
    );
};

export default Home;