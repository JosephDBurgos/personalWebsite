import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaFileDownload,
  FaUser,
  FaBriefcase,
} from "react-icons/fa";

export default function PrimaryCTA() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-3 bg-yellow-500 text-white rounded-lg shadow-lg cursor-pointer"
        onClick={() => (window.location.href = "#about")}
      >
        <FaUser className="text-xl" />
        <div>
          <h3 className="text-md font-bold">About Me</h3>
          <p className="mt-1 text-xs">Discover my journey and interests.</p>
        </div>
      </motion.div>
      {/* <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-3 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer"
        onClick={() => (window.location.href = "#projects")}
      >
        <FaProjectDiagram className="text-xl" />
        <div>
          <h3 className="text-md font-bold">View Projects</h3>
          <p className="mt-1 text-xs">Check out my latest work and projects.</p>
        </div>
      </motion.div> */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-3 bg-purple-500 text-white rounded-lg shadow-lg cursor-pointer"
        onClick={() => (window.location.href = "#experience")}
      >
        <FaBriefcase className="text-xl" />
        <div>
          <h3 className="text-md font-bold">View Experience</h3>
          <p className="mt-1 text-xs">Explore my professional background.</p>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-3 bg-gray-800 text-white rounded-lg shadow-lg cursor-pointer"
        onClick={() => (window.location.href = "/resume.pdf")}
      >
        <FaFileDownload className="text-xl" />
        <div>
          <h3 className="text-md font-bold">Resume</h3>
          <p className="mt-1 text-xs">Get a copy of my resume.</p>
        </div>
      </motion.div>
    </div>
  );
}
