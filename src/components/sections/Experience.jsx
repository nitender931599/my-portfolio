import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 space-y-12 pb-8">
          {experience.map((exp, index) => (
            <motion.div
               key={exp.id}
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute w-8 h-8 bg-white dark:bg-slate-800 rounded-full -left-[17px] top-0 border-4 border-primary-500 flex items-center justify-center shadow-sm z-10">
                 <FaBriefcase className="w-3 h-3 text-primary-500" />
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow relative">
                <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4 lg:absolute lg:top-8 lg:-left-44 lg:mb-0 lg:w-36 lg:text-right">
                  {exp.duration}
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">{exp.company}</p>
                
                <ul className="space-y-2 mb-6 text-slate-600 dark:text-slate-400 text-sm md:text-base">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-primary-400 dark:bg-primary-500 rounded-full flex-shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                     <span key={idx} className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700 shadow-sm">
                       {tech}
                     </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
