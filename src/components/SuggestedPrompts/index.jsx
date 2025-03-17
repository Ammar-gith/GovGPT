const SuggestedPrompts = ({ onPromptClick }) => {
    const suggestedPrompts = [
        "What is the role of the Khyber Pakhtunkhwa Public Service Commission in the recruitment policy?",
        "What role does the Administrative Department play in processing deputation or inter-provincial transfer requests?",
        "What is emphasized regarding adherence to the Provincial Government's policy on deputation?",
        "Where can the audit be conducted with the Collector's permission?",
    ];
    return (
        <>
            <h1 className="text-3xl font-bold font-poppins text-center mb-4">What can I help with? </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {suggestedPrompts.map((prompt, index) => (
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
