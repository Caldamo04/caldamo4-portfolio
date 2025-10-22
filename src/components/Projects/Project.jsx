import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import img_project from "../../assets/first.project.PNG";
import img_projects from "../../assets/second.project.PNG";
import img_projectss from "../../assets/third.project.PNG";

export default function Project() {
  const projects = [
    {
      title: "JUMBOTRON",
      img: img_project,
      link: "https://caldamo04.github.io/Images-jumbotron-/",
    },
    {
      title: "AVERAGE CONVERTER",
      img: img_projects,
      link: "https://caldamo04.github.io/JavaScript-Operators-Operands-Order-Precedence/",
    },
    {
      title: "RESPONSIVE TABLES",
      img: img_projectss,
      link: "https://caldamo04.github.io/Responsive-Menu-Tables/",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 sm:px-10 md:px-16 lg:px-24 py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-black opacity-30 animate-gradient-slow"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping top-10 left-1/4"></div>
        <div className="absolute w-3 h-3 bg-pink-500 rounded-full animate-pulse bottom-20 right-1/3"></div>
        <div className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping top-1/3 right-10"></div>
        <div className="absolute w-2 h-2 bg-teal-400 rounded-full animate-pulse bottom-10 left-1/5"></div>
      </div>

      <motion.h1
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-16 text-center drop-shadow-[0_0_15px_#3b82f6]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Latest Projects
      </motion.h1>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="flex flex-col items-center text-center bg-gray-900/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-500/30 hover:border-blue-400 backdrop-blur-[2px]">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4 drop-shadow-[0_0_10px_#3b82f6]">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-56 sm:h-60 md:h-64 object-cover rounded-lg border-2 border-blue-400 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
                  />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
