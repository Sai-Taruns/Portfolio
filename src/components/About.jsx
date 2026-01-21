import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
   <div className="px-5 lg:px-28 flex flex-col lg:flex-row gap-8 lg:gap-16" id="about">

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am an AWS Certified Data Engineer with around five years of experience building scalable data platforms and AI/ML pipelines. I enjoy turning messy, high volume data into clean, reliable systems that teams can trust for real time analytics and decision making.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Recently, I have been working on data engineering and applied AI projects across consulting and financial services. That includes building streaming and batch pipelines with Spark, Kafka, and Airflow, optimizing warehouses like Redshift, Snowflake, and BigQuery, and operationalizing models with MLflow, Docker, and Kubernetes to improve accuracy, latency, and deployment speed.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          What I care about most is building systems that hold up in production: strong data quality, clear monitoring, and performance that scales. I also like working closely with stakeholders, translating business needs into dashboards in Power BI and Tableau, and shipping automation that saves time and reduces manual effort.
        </p>
      </motion.div>
    </div>
  );
}
