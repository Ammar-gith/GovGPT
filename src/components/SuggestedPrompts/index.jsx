const SuggestedPrompts = ({ onPromptClick }) => {
    const allSuggestedPrompts = [
        "What is the main difference between ad-hoc and contract hiring in KP government jobs?",
        "What are the eligibility requirements for someone applying for a government job in KP?",
        "List three factors that could disqualify a candidate from being appointed to a government job.",
        "How is the zonal allocation system used in recruitment?",
    ];
    return (
        <>
            <h1 className="text-3xl font-bold font-poppins text-center mb-4">What can I help with? </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {allSuggestedPrompts.map((prompt, index) => (
                    <button
                        key={index}
                        className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300 text-left"
                        onClick={() => onPromptClick(prompt)}
                    >
                        {prompt}
                    </button>
                ))}
            </div>
        </>
    );
};

export default SuggestedPrompts;
