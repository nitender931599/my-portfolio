import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import { FaCode, FaLaptopCode, FaDatabase, FaTools } from 'react-icons/fa';

const iconMap = {
  "Programming Languages": <FaCode className="w-6 h-6" />,
  "Web Technologies": <FaLaptopCode className="w-6 h-6" />,
  "Databases": <FaDatabase className="w-6 h-6" />,
  "Tools & Platforms": <FaTools className="w-6 h-6" />
};

const Skills = () => {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: 'spring' } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 mb-4 tracking-tight">Technical Arsenal</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-primary-500/30"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-white/50 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500 shadow-inner">
                  {iconMap[skillGroup.category] || <FaCode className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-col gap-3 mt-auto">
                {skillGroup.items.map((item, idx) => (
                  <div key={idx} className="group/item relative">
                    <div className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/20 rounded-xl scale-x-0 group-hover/item:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
                    <div className="px-4 py-3 bg-slate-50/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold border border-slate-100/50 dark:border-slate-700/50 shadow-sm relative z-10 flex justify-between items-center group-hover/item:text-primary-700 dark:group-hover/item:text-primary-300 transition-colors">
                      {item}
                      <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/item:bg-primary-500 transition-colors duration-300 shadow-[0_0_8px_rgba(59,130,246,0)] group-hover/item:shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
