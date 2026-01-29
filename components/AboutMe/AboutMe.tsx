import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        {/* Photo */}
        <div className="relative flex flex-col items-center mb-8">
          <img
            src="/joeylogo.png"
            alt="Logo"
            className="w-36 h-36 rounded-full shadow-md"
          />
        </div>

        {/* Combined Animated Text */}
        <motion.p
          className="text-lg text-gray-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          I was born and raised in Ramona, California, where I graduated from
          Ramona High School. My passion for technology began with building
          computers 🖥️ and understanding their internal components. This
          curiosity led me to pursue a degree in Mathematics and Computer
          Science at the University of California - San Diego. During my time at
          UCSD, I focused on the intersection of mathematics and software
          engineering, enjoying the deep technical analysis, research, and
          development that required a strong understanding of both fields.
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-gray-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          During my junior year of undergraduate study, I became a founding
          software engineer on a new 5G network repeater project aimed at
          transitioning the company from a hardware-focused antenna manufacturer
          into a full systems provider. I began working at the embedded systems
          level, developing and integrating software directly on network
          repeaters, and gradually expanded my role to include remote device
          management, data analytics pipelines, and the early foundations of
          cloud-based infrastructure. Alongside product development, I
          contributed to patent research that bridged RF engineering and AI,
          collaborating closely with cross-disciplinary teams. The role pushed
          me to take ownership across the entire stack, from low-level embedded
          development to scalable backend systems.
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-gray-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Today, I’m focused on building scalable backend systems and
          customer-facing products that ship quickly and reliably. I enjoy
          owning systems end to end—from design and implementation to deployment
          and iteration—which allows me to move fast, avoid handoff friction,
          and deliver real value without unnecessary overhead. Whether working
          deep in backend infrastructure or shipping full-stack features, I’m
          most energized by building products that scale and get used.
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-gray-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          From a young age, I was captivated by technology and problem-solving,
          which led me to pursue a degree in engineering. My academic journey
          provided me with a strong technical foundation, while my early
          curiosity and hands-on projects fueled my passion for innovation and
          interdisciplinary collaboration.
        </motion.p>

        {/* Technical Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Flip Card Component */}
            {[
              {
                title: "Programming Languages",
                icon: "💻",
                skills: [
                  "Python",
                  "TypeScript/JavaScript",
                  "C++",
                  "Bash/Shell",
                  "HTML/CSS",
                ],
              },
              {
                title: "Frontend Frameworks",
                icon: "🌐",
                skills: ["React", "Next.js", "Svelte", "SwiftUI"],
              },
              {
                title: "Backend Frameworks",
                icon: "🔧",
                skills: ["Node.js", "Express.js", "Flask", "FastAPI"],
              },
              {
                title: "Data Science & ML",
                icon: "📊",
                skills: ["Pandas", "NumPy", "Chart.js"],
              },
              {
                title: "Tools & Platforms",
                icon: "⚙️",
                skills: ["Git & GitHub", "AWS", "Docker", "PostgreSQL"],
              },
              {
                title: "Databases & DB Languages",
                icon: "🗄️",
                skills: [
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "SQLite",
                  "Redis",
                  "GraphQL",
                ],
              },
            ].map((category, index) => (
              <div key={index} className="group perspective w-full h-48">
                <div className="relative w-full h-full transition-transform duration-500 transform group-hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center flip-card-front">
                    <span className="text-4xl">{category.icon}</span>
                    <h4 className="text-xl font-bold text-blue-400 mt-4">
                      {category.title}
                    </h4>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 bg-black rounded-lg shadow-lg flex flex-col items-center justify-center rotate-y-180 flip-card-back">
                    <ul className="text-gray-400 text-center space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
