const Features = () => {
    return (
        <>
            <div className="flex flex-col items-center bg-neutral-50 min-h-screen px-4 py-10">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl text-center">
                    <h2 className="text-2xl font-bold text-purple-700 mb-4">UK Traffic Accident Dataset</h2>
                    <p className="text-gray-600 mb-6">
                        This dataset contains official accident records maintained by the UK Traffic Police. Useful for traffic analysis, ML models, and safety studies.
                    </p>
                    <a
                        href="https://www.kaggle.com/datasets/tsiaras/uk-road-safety-accidents-and-vehicles"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-purple-600 text-white font-medium px-5 py-3 rounded-xl hover:bg-purple-700 transition"
                    >
                        Get Dataset
                    </a>
                </div>
                <div className="mt-12 max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Highlights</h3>
                    <ul className="space-y-4 text-gray-700">
                        {[
                            "Handled missing values and removed redundant or proxy features.",
                            "Performed data cleaning and feature engineering, using visualizations like box plots to detect and remove outliers.",
                            "Dropped underrepresented regions in the target class to avoid data imbalance issues.",
                            "Applied multiple ML models: Decision Tree, Gradient Boost, KNN, Logistic Regression, Random Forest, XGBoost, and Voting Classifier.",
                            "Achieved initial insights and later fine-tuned models using Randomized CV, reaching up to 87% accuracy.",
                        ].map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Features
