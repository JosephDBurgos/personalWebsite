import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {[
            {
              title: "Systems Software Engineer - Product Development",
              company: "Airgain Inc, San Diego, CA, USA",
              duration: "January 2025 - Present",
              details: [
                "Designed and scaled cloud-backed backend services using Python and Node.js, supporting provisioning, testing, and lifecycle management for thousands of deployed devices.",
                "Built and maintained REST APIs (FastAPI / Express-style) enabling secure device onboarding, configuration, and monitoring workflows.",
                "Architected AWS-based infrastructure for production deployments, leveraging managed services for compute, storage, and messaging to support global scale.",
                "Implemented data persistence layers using SQL and NoSQL databases to store device state, telemetry, and operational metadata.",
                "Developed internal TypeScript-based tooling and dashboards to streamline manufacturing, testing, and operational workflows.",
              ],
            },
            {
              title: "Systems Software Engineer - Advanced R&D",
              company: "Airgain Inc, San Diego, CA, USA",
              duration: "June 2024 - December 2024",
              details: [
                "Built and scaled backend services in Python and Node.js to support secure remote device management and fleet-wide operations.",
                "Designed and implemented authentication and credential management services using secure APIs and encrypted communication, supporting distributed systems.",
                "Authored a scalable data ingestion pipeline on AWS to collect, process, and aggregate telemetry from thousands of deployed devices.",
                "Developed internal APIs and service interfaces to support monitoring, diagnostics, and proactive issue detection.",
                "Led early-stage architecture and technical validation for new product initiatives, contributing backend system designs to multiple provisional patent filings.",
              ],
            },
            {
              title: "Embedded Systems Software Engineer - Advanced R&D",
              company: "Airgain Inc, San Diego, CA, USA",
              duration: "January 2023 - June 2024",
              details: [
                "Built full-stack web applications (TypeScript, modern JS frameworks) to configure, control, and monitor connected devices.",
                "Implemented backend APIs and service layers (Python / Node.js) exposing device capabilities to web-based user interfaces.",
                "Designed relational data models and database-backed services (Postgres / MySQL) to persist device configuration, status, and operational data.",
                "Developed secure remote management and firmware update workflows (FOTA) integrated with backend services.",
                "Owned system design across frontend, backend, and embedded firmware, enabling the platform to scale from prototypes to pre-pilot deployments.",
              ],
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h4 className="text-xl font-semibold">{job.title}</h4>
              <p className="text-gray-400">
                {job.company} | {job.duration}
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-400 space-y-2">
                {job.details.map((detail, detailIndex) => (
                  <motion.li
                    key={detailIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
