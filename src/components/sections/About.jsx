import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import { FaGraduationCap, FaBullseye, FaLightbulb, FaHeart } from 'react-icons/fa';

const About = () => {
  const { education, about } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' } }
  };

  const CardHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-xl shadow-inner group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
  );

  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 mb-4 tracking-tight">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-primary-500/30"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left Column: Objective & Education */}
          <div className="space-y-8 flex flex-col">
            
            <motion.div variants={cardVariants} className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/10 border border-white/50 dark:border-slate-700/50 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader icon={FaBullseye} title="Who am I?" />
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg relative z-10">
                {about.careerObjective}
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/10 border border-white/50 dark:border-slate-700/50 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader icon={FaGraduationCap} title="Education" />
              <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-700 space-y-8 mt-4">
                {education.map((edu, index) => (
                  <div key={index} className="relative group/edu">
                    <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[35px] sm:-left-[43px] top-1.5 border-4 border-white dark:border-slate-900 group-hover/edu:scale-125 group-hover/edu:bg-purple-500 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover/edu:text-primary-500 dark:group-hover/edu:text-primary-400 transition-colors">{edu.degree}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">{edu.institution}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:justify-between text-sm text-slate-500 dark:text-slate-400 mb-3 bg-slate-50 dark:bg-slate-800/50 p-2 sm:px-3 rounded-lg border border-slate-100 dark:border-slate-700 w-fit sm:w-full">
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> {edu.duration}</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-xs">{edu.grade}</span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interests & Strengths */}
          <div className="space-y-8 flex flex-col">
            
            <motion.div variants={cardVariants} className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/10 border border-white/50 dark:border-slate-700/50 transition-all duration-500 group hover:-translate-y-2 flex-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader icon={FaHeart} title="Areas of Interest" />
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 relative z-10">
                {about.interests.map((interest, idx) => (
                  <span key={idx} className="px-5 py-2.5 bg-slate-50/80 hover:bg-primary-50 dark:bg-slate-800/80 hover:dark:bg-primary-900/40 text-slate-700 dark:text-slate-200 rounded-xl text-sm sm:text-base font-medium border border-slate-200/50 dark:border-slate-600/50 hover:border-primary-500/50 dark:hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 shadow-sm hover:shadow-md cursor-default hover:-translate-y-1">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/10 border border-white/50 dark:border-slate-700/50 transition-all duration-500 group hover:-translate-y-2 flex-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader icon={FaLightbulb} title="Core Strengths" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-2 relative z-10">
                {about.strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/40 border border-slate-100/50 dark:border-slate-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 group/skill hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow">
                    <div className="w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] group-hover/skill:scale-150 transition-transform duration-300"></div>
                    <span className="text-slate-700 dark:text-slate-200 font-medium text-lg">{strength}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
