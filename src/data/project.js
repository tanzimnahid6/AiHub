const projects = [
  {
    id: 1,
    title: "Churn-Prediction-And-Prevention",
    description:
      "This repository contains Python code for predictive churn analysis in a telecom industry setting. The purpose of this project is to develop a predictive model to identify potential churn customers and analyze factors contributing to customer attrition. The analysis includes exploratory data visualization, statistical summaries, and the implementation of a machine learning model using the RandomForestClassifier.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Churn-Prediction-And-Prevention/blob/main/Model/model.ipynb",
    outputUrl:
      "https://github.com/proAIrokibul/Churn-Prediction-And-Prevention/tree/main/Output",
  },
  {
    id: 2,
    title: "Movie Recommendation",
    description:
      "Build a predictive model using AI algorithms to forecast sales trends accurately, helping businesses optimize inventory management and resource allocation.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Movie-recommendation/blob/main/notebook86c26b4f17.ipynb",
  },
  {
    id: 3,
    title: "Healthcare-Predictive-Modeling",
    description:
      "Create an AI system to predict customer churn by analyzing historical data and identifying factors leading to customer attrition. Implement proactive measures to prevent churn.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Healthcare-Predictive-Modeling/blob/main/main.ipynb",
  },
  {
    id: 4,
    title: "Electrical-grid-stability",
    description:
      "Utilize natural language processing (NLP) techniques to analyze customer feedback from various sources (social media, reviews, etc.) and provide insights into brand perception and sentiment.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Electrical-grid-stability/blob/main/main.ipynb",
  },
  {
    id: 5,
    title: "Costumer-Segmentation-using-ML",
    description:
      "Develop an AI-driven pricing optimization system that adjusts prices in real-time based on factors such as demand, competitor pricing, and customer behavior to maximize revenue and profit.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Costomer-Segmentation-using-ML/blob/main/customer-segmentation.ipynb",
  },
  {
    id: 6,
    title: "Financial Security Enhancement through Credit Card Fraud Detection",
    description:
      "Credit Card Fraud Detection is a critical application of machine learning in the realm of financial security. This project aims to leverage AI and ML techniques to detect fraudulent transactions, ensuring the safety of credit card users and mitigating financial losses for both individuals and financial institutions.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Fraud-Detection-And-Prevention/blob/main/Model/Fraud%20Detection.ipynb",
    outputUrl:
      "https://github.com/proAIrokibul/Fraud-Detection-And-Prevention/tree/main/Output",
  },
];

export const getProjects = () => {
  return projects;
};

export const getSingleProject = (id) => {
  const model = projects.find((p) => p.id == id);
  if (model) return model;
  return "No project found";
};
