import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Clinical Documentation Assistant – Self-Reflective RAG System",
    description:
      "AI-powered clinical documentation assistant with intelligent summarization, ICD-10 suggestions, and adaptive query refinement using self-reflective RAG.\nTech Stack: Python, LangChain, ChromaDB, Sentence Transformers, Streamlit, Pydantic, OpenAI API",
    image: "/assets/project1.png"

  },
  {
    id: 2,
    title: "SEC Filings Intelligence Platform – RAG for Financial Compliance",
    description:
      "Production-grade RAG system automating SEC 10-K/10-Q review to extract material changes, risk factors, and compliance insights.\nTech Stack: Python, LangChain, FAISS, OpenAI, Streamlit",
    image: "/assets/project2.png"

  },
  {
    id: 3,
    title: "Real-Time Market Risk Scoring Engine",
    description:
      "Streaming analytics platform computing real-time risk scores for high-frequency trading, inspired by institutional validation techniques.\nTech Stack: Kafka, PySpark Structured Streaming, Databricks, MLflow, PostgreSQL, Plotly Dash",
    image: "/assets/project3.png"

  },
  {
    id: 4,
    title: "Multi-Bank Fraud Detection with Automated Drift Monitoring",
    description:
      " End-to-end fraud detection system processing 10M+ daily transactions with automated retraining and cost-sensitive learning.\nTech Stack: AWS Glue, Lambda, XGBoost, PySpark, Great Expectations, SageMaker, Power BI",
    image: "/assets/project4.png"

  },
  {
    id: 5,
    title: "Real-Time ML Feature Store with Feast",
    description:
      "Overview: Production-ready feature store serving real-time features for personalization models, showcasing modern MLOps patterns.\nTech Stack: Kafka, PySpark Streaming, Feast, Redis, Databricks, MLflow, FastAPI",
    image: "/assets/project5.png"

  },
  {
    id: 6,
    title: "LLM-Powered Data Quality Assistant",
    description:
      "Intelligent assistant that auto-generates Great Expectations rules from dataset schemas using natural language.\nTech Stack: LangChain, Mistral-7B (local), Great Expectations, Slack SDK, Pandas, Streamlit",
    image: "/assets/project7.png"

  },
  {
    id: 7,
    title: "Serverless MLOps Pipeline for Demand Forecasting",
    description:
      "Fully serverless MLOps pipeline built on AWS Free Tier demonstrating production deployment without cluster management.\nTech Stack: AWS Lambda, S3, SageMaker Autopilot, API Gateway, MLflow, GitHub Actions, DynamoDB",
    image: "/assets/project8.png"

  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[380px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
             
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
