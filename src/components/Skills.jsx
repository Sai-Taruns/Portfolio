import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Python", icon: <FaPython size={50} /> },
    { id: 2, name: "SQL", icon: <FaDatabase size={50} /> },
    { id: 3, name: "PySpark", icon: <img src="/assets/PySpark-logo-1.jpeg" alt="R" width="50" height="50" /> },
    { id: 4, name: "R", icon:  <img src="/assets/r.png" alt="R" width="50" height="50" /> },
    { id: 5, name: "Java", icon: <FaJava size={50} /> },

    { id: 6, name: "AWS", icon:  <img src="/assets/AWS.png" alt="AWS" width="50" height="50" /> },
    { id: 7, name: "Azure ML", icon: <img src="/assets/azure.png" alt="Azure" width="50" height="50" />},
    { id: 8, name: "GCP", icon: <img src="/assets/googlecloud.png" alt="GCP" width="50" height="50" />},

    { id: 9, name: "Databricks", icon: <img src="/assets/databricks.svg" alt="Databricks" width="50" height="50" />},
    { id: 10, name: "Kafka", icon: <img src="/assets/kafka-logo.png" alt="kafka" width="50" height="50" />},
    { id: 11, name: "Airflow", icon: <img src="/assets/airflow.png" alt="Airflow" width="50" height="50" />},
    { id: 12, name: "Snowflake", icon: <img src="/assets/Snowflake.png" alt="R" width="50" height="50" />},
    { id: 13, name: "Redshift", icon: <img src="/assets/redshift.png" alt="Redshift" width="50" height="50" />},
    { id: 14, name: "BigQuery", icon: <img src="/assets/bigquery.svg" alt="Bigquery" width="50" height="50" />},
    { id: 15, name: "PostgreSQL", icon: <BiLogoPostgresql size={50} /> },

    { id: 16, name: "MLflow (MLOps)", icon: <img src="/assets/mlflow.png" alt="ML Flow" width="50" height="50" />},
    { id: 17, name: "Docker", icon: <img src="/assets/docker.png" alt="Docker" width="50" height="50" />},
    { id: 18, name: "Kubernetes", icon: <img src="/assets/kubernetes.png" alt="Kubernetes" width="50" height="50" />},

    { id: 19, name: "NLP & Generative AI (RAG)", icon: <img src="/assets/NLP.jpg" alt="NLP" width="50" height="50" />},
    { id: 20, name: "TensorFlow", icon: <img src="/assets/Tensorflow-Logo--Streamline-Ultimate.png" alt="TensorFlow" width="50" height="50" />},
    { id: 21, name: "PyTorch", icon: <img src="/assets/pytorch_logo_icon_144957.png" alt="Pytorch" width="50" height="50" />},
    { id: 22, name: "Scikit-learn", icon: <img src="/assets/scikit.jpg" alt="Scikit-Learnn" width="50" height="50" />},

    { id: 23,name: "Power BI", icon: <img src="/assets/market-demand.png" alt="Power BI" width="50" height="50" />},
    { id: 24, name: "Tableau", icon:  <img src="/assets/market-demand.png" alt="Tableau" width="50" height="50" /> },
    { id: 25, name: "A/B Testing", icon: <img src="/assets/ab.jpg" alt="A/B" width="50" height="50" />},
    { id: 26, name: "Linux", icon: <img src="/assets/linux.png" alt="Linux" width="50" height="50" />},
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "McKinsey & Company, Dallas, TX",
      role: "Data Engineer (AI/ML)",
      period: "Feb 2024 – Present",
      description:
        "Implemented Retrieval-Augmented Generation (RAG) models with probabilistic/statistical validation, reducing false positives in safety alerts by 35%. Built cloud spend & utilization analytics pipelines processing telemetry and billing datasets for cost attribution and capacity planning. Orchestrated end-to-end pipelines in Apache Airflow (DAG scheduling, retries, SLA monitoring). Designed scalable ingestion using Azure Data Factory + Synapse into ADLS Gen2, and automated ETL workflows in AWS Glue; used Boto3 with S3/Lambda to automate cloud resource management. Productionized ML models using TensorFlow, PyTorch, Scikit-learn, and XGBoost; delivered automation with NLP + Generative AI for summarization and synthetic data generation.",
      logo: "/assets/MCk.jpg",
    },
    {
      id: 2,
      company: "Morgan Stanley, Chicago, IL",
      role: "Data Engineer",
      period: "Jan 2023 - Feb 2024",
      description:
        "Analyzed large-scale infrastructure and data-processing workloads, reducing compute and query execution costs by 30%. Built SQL/Python pipelines to monitor utilization trends, detect anomalies, and improve allocation; performed root-cause analysis on abnormal trading behaviors, improving risk-scoring accuracy by 22%. Engineered Spark/Databricks transformation workflows for multi-billion-row datasets and implemented dbt-style modular SQL transformation layers. Delivered BI layers (Redshift + S3) and dashboards in Tableau/Power BI; optimized SQL, Spark configs, and clusters for higher throughput and lower cost. Built end-to-end MLOps pipelines with MLflow for tracking, versioning, and automated deployments; contributed to GCP workflows (BigQuery, Cloud Functions) and Looker dashboards.",
      logo: "/assets/morgan-stanley.jpg",
    },
    {
      id: 3,
      company: "Mphasis, India",
      role: "Data Analyst",
      period: "Aug 2020 - Aug 2022",
      description:
        "Designed and optimized ETL pipelines using AWS Glue and Lambda to process 10M+ financial transactions daily with high reliability. Built anomaly detection models and statistical validation workflows, improving fraud detection accuracy by 18%. Partnered with data science teams to automate model deployment, monitoring, and data validation for risk and compliance analytics. Created automated dashboards in Power BI and Tableau for KPIs and data quality trends; conducted A/B testing on digital engagement strategies using 50,000+ user interactions.",
      logo: "/assets/MPHASIS.webp",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
