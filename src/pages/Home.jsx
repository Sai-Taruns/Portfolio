import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const socials = [
    { Icon: BiLogoGmail, href: "mailto:saitarun.s42@gmail.com", label: "Email" },
    { Icon: IoLogoLinkedin, href: "#", label: "LinkedIn" }, // add your LinkedIn URL
    { Icon: IoLogoTwitter, href: "#", label: "Twitter/X" }, // optional
    { Icon: BsGithub, href: "#", label: "GitHub" }, // add your GitHub URL
  ];

  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              Hello,{" "}
              <TypeAnimation
                sequence={[
                  "I am Venkata Sai S",
                  1200,
                  "AWS Certified Data Engineer",
                  1200,
                  "AI/ML Data Engineer",
                  1200,
                ]}
                speed={20}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="font-extrabold">Data</span>{" "}
              <span className="text-white font-extrabold" style={{ WebkitTextStroke: "1px black" }}>
                Engineer
              </span>
            </motion.h2>


          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            AWS Certified Data Engineer with ~5 years of experience delivering scalable AI/ML data
            architectures, high-performance ETL/ELT pipelines, and production-grade ML workflows.
            I build cloud-native data platforms (AWS/Azure/GCP) using Spark/Databricks, Kafka, and
            Airflow, and operationalize models with MLOps (MLflow, Docker, Kubernetes) to improve
            reliability, reduce latency, and optimize cloud costs.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socials.map(({ Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
