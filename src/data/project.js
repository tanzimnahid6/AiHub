const projects = [
  {
    id: 1,
    title: "Churn-Prediction-And-Prevention",
    description:
      "This repository contains Python code for predictive churn analysis in a telecom industry setting. The purpose of this project is to develop a predictive model to identify potential churn customers and analyze factors contributing to customer attrition. The analysis includes exploratory data visualization, statistical summaries, and the implementation of a machine learning model using the RandomForestClassifier.",
      gitHubUrl:'https://github.com/proAIrokibul/Churn-Prediction-And-Prevention/blob/main/Model/model.ipynb',
    imgUrl: "https://placekitten.com/200/300", // Example dummy image URL
  },
  {
    id: 2,
    title: "Movie Recommendation",
    description:
      "Build a predictive model using AI algorithms to forecast sales trends accurately, helping businesses optimize inventory management and resource allocation.",
      gitHubUrl:'https://github.com/proAIrokibul/Movie-recommendation/blob/main/notebook86c26b4f17.ipynb',
    imgUrl: "https://placekitten.com/201/301", // Example dummy image URL
  },
  {
    id: 3,
    title:"Healthcare-Predictive-Modeling",
    description:
      "Create an AI system to predict customer churn by analyzing historical data and identifying factors leading to customer attrition. Implement proactive measures to prevent churn.",
      gitHubUrl:"https://github.com/proAIrokibul/Healthcare-Predictive-Modeling/blob/main/main.ipynb",
    imgUrl: "https://placekitten.com/202/302", // Example dummy image URL
  },
  {
    id: 4,
    title: "Electrical-grid-stability",
    description:
      "Utilize natural language processing (NLP) techniques to analyze customer feedback from various sources (social media, reviews, etc.) and provide insights into brand perception and sentiment.",
      gitHubUrl:'https://github.com/proAIrokibul/Electrical-grid-stability/blob/main/main.ipynb',
    imgUrl: "https://placekitten.com/203/303", // Example dummy image URL
  },
  {
    id: 5,
    title: "Costumer-Segmentation-using-ML",
    description:
      "Develop an AI-driven pricing optimization system that adjusts prices in real-time based on factors such as demand, competitor pricing, and customer behavior to maximize revenue and profit.",
      gitHubUrl:'https://github.com/proAIrokibul/Costomer-Segmentation-using-ML/blob/main/customer-segmentation.ipynb',
    imgUrl: "https://placekitten.com/204/304", // Example dummy image URL
  },
  {
    id: 6,
    title: "Supply Chain Optimization",
    description:
      "Implement AI algorithms to optimize supply chain operations by predicting demand, identifying bottlenecks, and streamlining logistics for cost reduction and improved efficiency.",
    imgUrl: "https://placekitten.com/205/305", // Example dummy image URL
  },
  {
    id: 7,
    title: "Fraud Detection and Prevention",
    description:
      "Utilize machine learning algorithms to detect anomalies and patterns indicative of fraudulent activities in financial transactions, thereby enhancing security and minimizing losses.",
    imgUrl: "https://placekitten.com/206/306", // Example dummy image URL
  },
  {
    id: 8,
    title: "Personalized Product Recommendations",
    description:
      "Create a recommendation engine powered by AI to deliver personalized product recommendations to customers based on their past purchases, browsing history, and preferences.",
    imgUrl: "https://placekitten.com/207/307", // Example dummy image URL
  },
  {
    id: 9,
    title: "Predictive Maintenance",
    description:
      "Implement AI-based predictive maintenance systems for equipment and machinery by analyzing sensor data to anticipate maintenance needs, minimize downtime, and reduce operational costs.",
    imgUrl: "https://placekitten.com/208/308", // Example dummy image URL
  },
  {
    id: 10,
    title: "Stock Market Price Prediction",
    description:
      "Implement AI algorithms to predict stock market prices based on historical data, market trends, and relevant indicators for informed investment decisions.",
    imgUrl: "https://placekitten.com/209/309", // Example dummy image URL
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
