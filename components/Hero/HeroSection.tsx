import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center bg-transparent text-white px-6 pt-20">
      <div className="flex-1 text-left flex flex-col items-start justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold leading-tight"
        >
          Hey,{" "}
          <span className="relative text-gray-400 font-bold ml-2 pr-2">
            I'm Joseph
            {/* Animated Semicolon */}
            <motion.span
              className="absolute -right-3 top-1/4 transform -translate-y-1/2 block text-2xl text-white"
              animate={{
                x: [-5, 5, -5], // Moves left and right
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              ;
            </motion.span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-base md:text-lg"
        >
          I'm a systems-minded software engineer with a focus on backend
          infrastructure.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-2 text-base md:text-lg"
        >
          My background is in telecom infrastructure, and my current interests
          are in financial and quantitative systems.
        </motion.p>
        <div className="mt-6 w-full">{/* Removed PrimaryCTA component */}</div>
        <div className="mt-4">{/* Removed SocialLinks component */}</div>
      </div>

      {/* Right Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="flex-1 flex justify-center items-center mt-6 md:mt-0"
      >
        <img
          src="/HeadShot.jpg"
          alt="Joseph's headshot with gradient background"
          className="w-48 h-64 md:w-80 md:h-96 lg:w-[24rem] lg:h-[30rem] object-cover rounded-lg shadow-lg border-4 border-gray-700"
        />
      </motion.div>
    </section>
  );
}
