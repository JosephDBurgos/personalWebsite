import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 rounded-lg shadow-lg w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6 max-w-md">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-base text-center">
          I’d love to connect with you! Feel free to reach out via LinkedIn or
          email.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/joseph-burgos-224222167/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-blue-600 py-3 px-6 text-base font-medium rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="mailto:josephDburgos@outlook.com"
            className="flex items-center bg-white text-gray-800 py-3 px-6 text-base font-medium rounded-full shadow-md hover:bg-gray-800 hover:text-white transition duration-300"
          >
            <FaEnvelope className="mr-2" /> Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-green-600 py-3 px-6 text-base font-medium rounded-full shadow-md hover:bg-green-600 hover:text-white transition duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
