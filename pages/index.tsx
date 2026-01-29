import Hero from "../components/Hero/Hero";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import React from "react";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="text-gray-900">
        {/* Hero Section with Parallax */}
        <Parallax speed={-10}>
          <section className="min-h-screen bg-transparent">
            <Hero />
          </section>
        </Parallax>

        {/* About Me Section */}
        <Parallax speed={5}>
          <motion.section
            className="min-h-screen py-20 bg-transparent text-white layered-section glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AboutMe />
          </motion.section>
        </Parallax>

        {/* Experience Section */}
        <Parallax speed={5}>
          <motion.section
            className="min-h-screen py-20 bg-transparent text-white layered-section glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Experience />
          </motion.section>
        </Parallax>

        {/* Projects Section */}
        {/* <Parallax speed={10}>
          <motion.section
            className="min-h-screen py-20 bg-transparent text-white layered-section glass relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.section>
        </Parallax> */}

        {/* Contact Section */}
        <Parallax speed={5}>
          <motion.section
            id="contact"
            className="min-h-[50vh] py-10 bg-transparent text-white layered-section glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.section>
        </Parallax>

        {/* Dynamic Gradient Background */}
        <motion.div
          className="bg-transparent flex items-center justify-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </ParallaxProvider>
  );
}
