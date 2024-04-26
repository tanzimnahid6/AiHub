const publications = [
  {
    id: 1,
    title:
      "Dominance of AI and Machine Learning Techniques in Hybrid Movie Recommendation System Applying Text-to-number Conversion and Cosine Similarity Approaches",
    citedBy: 41,
    year: 2024,
    pdfPathId: 1,
  },
  {
    id: 2,
    title:
      "Employee Performance Prediction: An Integrated Approach of Business Analytics and Machine Learning",
    citedBy: 34,
    year: 2024,
    pdfPathId: 2,
  },
  {
    id: 3,
    title:
      "Blockchain Applications in Retail Cybersecurity: Enhancing Supply Chain Integrity, Secure Transactions, and Data Protection",
    citedBy: 30,
    year: 2024,
    pdfPathId: 3,
  },
  {
    id: 4,
    title:
      "Revitalizing the Electric Grid: A Machine Learning Paradigm for Ensuring Stability in the USA",
    citedBy: 26,
    year: 2024,
    pdfPathId: 4,
  },
  {
    id: 5,
    title: "Cybercrime Techniques in Online Banking",
    citedBy: 19,
    year: 2022,
    pdfPathId: 5,
  },
  {
    id: 6,
    title: "NetSuite's Next Frontier: Leveraging AI for Business Growth",
    citedBy: 12,
    year: 2023,
    pdfPathId: 6,
  },
  {
    id: 7,
    title:
      "The Contribution of Foreign Direct Investment and Its Impact on Economic Growth and Inflation in Bangladesh",
    citedBy: 7,
    year: 2021,
    pdfPathId: 7,
  },
  {
    id: 8,
    title:
      "AI and Machine Learning for Optimal Crop Yield Optimization in the USA",
    citedBy: 0,
    year: 2024,
    pdfPathId: 8,
  },
  {
    id: 9,
    title:
      "Algorithmic Trading Strategies: Leveraging Machine Learning Models for Enhanced Performance in the US Stock Market",
    citedBy: 0,
    year: 2024,
    pdfPathId: 9,
  },
  {
    id: 10,
    title: "AI BASED ENVIRONMENT AND SOIL ANALYSING DEVICE FOR AGRICULTURE",
    citedBy: 0,
    year: 2024,
    pdfPathId: 10,
  },
  {
    id: 11,
    title:
      "Ethical Considerations in AI-driven Dynamic Pricing in the USA: Balancing Profit Maximization with Consumer Fairness and Transparency",
    citedBy: 0,
    year: 2024,
    pdfPathId: 11,
  },
  {
    id: 12,
    title:
      "Addressing Seasonality and Trend Detection in Predictive Sales Forecasting: A Machine Learning Perspective",
    citedBy: 0,
    year: 2024,
    pdfPathId: 12,
  },
  {
    id: 13,
    title:
      "AI-Based Customer Churn Prediction Model for Business Markets in the USA: Exploring the Use of AI and Machine Learning Technologies in Preventing Customer Churn",
    citedBy: 0,
    year: 2024,
    pdfPathId: 13,
  },
  {
    id: 14,
    title:
      "Explainable AI in Credit Card Fraud Detection: Interpretable Models and Transparent Decision-making for Enhanced Trust and Compliance in the USA",
    citedBy: 0,
    year: 2024,
    pdfPathId: 14,
  },
  {
    id: 15,
    title:
      "Exploring the Role of Robotic Automation in Climate Vulnerability Mitigation: Towards Sustainable Horticulture",
    citedBy: 0,
    year: 2024,
    pdfPathId: 15,
  },
];

export const getPublications = () => {
  return publications;
};

export const getSinglePublication = (id) => {
  return publications.find((p) => p.id == id);
};
