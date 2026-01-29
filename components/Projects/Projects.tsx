import React from "react";

export default function Projects() {
  const projectList = [
    {
      title: "Trading BackTester",
      description:
        "A tool for backtesting trading strategies with historical market data. Includes customizable parameters and performance metrics.",
      codeLink: "https://github.com/your-username/trading-backtester", // Replace with your GitHub link
      demoLink: "https://your-trading-backtester-demo.com", // Replace with your live demo link
    },
    {
      title: "Quantitative Strategies",
      description:
        "A platform for analyzing and optimizing quantitative trading strategies using statistical models and machine learning.",
      codeLink: "https://github.com/your-username/quant-strategies", // Replace with your GitHub link
      demoLink: "https://your-quant-strategies-demo.com", // Replace with your live demo link
    },
    {
      title: "Performance Visualizer",
      description:
        "An interactive dashboard for visualizing the performance of trading strategies, including risk metrics and portfolio analysis.",
      codeLink: "https://github.com/your-username/performance-visualizer", // Replace with your GitHub link
      demoLink: "https://your-performance-visualizer-demo.com", // Replace with your live demo link
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-400">
                {project.description}
              </p>
              <div className="mt-4">
                <a
                  href={project.codeLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <span className="mx-2">|</span>
                <a
                  href={project.demoLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
