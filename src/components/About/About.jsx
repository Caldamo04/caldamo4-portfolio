import React from "react";
import { motion } from "framer-motion";
import profile_me from "../../assets/profile_me.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <motion.div
      id="about"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 py-20"
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

      <section className="relative z-10 flex flex-col items-center justify-center gap-12 w-full max-w-[1200px]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 tracking-wide text-center drop-shadow-[0_0_15px_#3b82f6]"
        >
          About Me
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-[#0e0e0e]/80 border border-blue-500/20 shadow-[0_0_30px_#3b82f6]/30">
            <CardContent className="p-4 sm:p-6 flex justify-center">
              <img
                src={profile_me}
                alt="Profile"
                className="w-40 h-52 sm:w-52 sm:h-64 md:w-60 md:h-72 lg:w-72 lg:h-96 object-cover rounded-xl border-2 border-blue-400 shadow-[0_0_30px_#3b82f6]"
              />
            </CardContent>
          </Card>

          <div className="flex-1 text-left">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 text-gray-300">
              I am{" "}
              <span className="text-blue-400 font-semibold">
                Warlito Caldamo Jr.
              </span>
              , a dedicated Computer Science student at Cavite State University.
              I love exploring technology, from web development to software
              design, and aim to build tools that help people and solve real
              problems.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
              I’m passionate about learning modern technologies and improving my
              programming skills to prepare for a successful IT career.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { name: "HTML & CSS", width: "70%" },
                { name: "React JS", width: "35%" },
                { name: "JavaScript", width: "40%" },
                { name: "Python", width: "65%" },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm sm:text-base md:text-lg font-medium text-blue-400">
                      {skill.name}
                    </p>
                    <span className="text-sm text-gray-400">
                      {skill.width}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-400 h-3 rounded-full transition-all duration-500"
                      style={{ width: skill.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 mt-12 w-full max-w-[1200px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { title: "3rd Year", text: "Currently Making Programs" },
            { title: "3", text: "Projects Completed" },
            { title: "0", text: "Client" },
          ].map((achieve, index) => (
            <React.Fragment key={index}>
              <Card className="bg-[#0e0e0e]/80 border border-blue-500/20 shadow-[0_0_20px_#3b82f6]/30 text-center w-48 sm:w-56">
                <CardContent className="py-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-400 font-bold drop-shadow-[0_0_10px_#3b82f6]">
                    {achieve.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg font-medium mt-2 text-gray-300">
                    {achieve.text}
                  </p>
                </CardContent>
              </Card>

              {index < 2 && (
                <Separator
                  orientation="vertical"
                  className="hidden sm:block h-16 bg-gray-700"
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
