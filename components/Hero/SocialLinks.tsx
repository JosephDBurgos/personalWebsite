import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-6 flex gap-4"
    >
      {/* //{" "}
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        // <FaGithub className="text-2xl text-gray-700 hover:text-blue-500" />
        //{" "}
      </a>
      //{" "}
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        // <FaLinkedin className="text-2xl text-gray-700 hover:text-blue-500" />
        //{" "}
      </a>
      //{" "}
      <a href="mailto:example@example.com">
        // <FaEnvelope className="text-2xl text-gray-700 hover:text-blue-500" />
        //{" "}
      </a> */}
    </motion.div>
  );
}
