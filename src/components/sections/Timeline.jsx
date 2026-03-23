import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Timeline = () => {
  const { education, experience } = portfolioData;

  // Combine and sort (if needed, here we just append education after experience)
  const timelineItems = [
    ...(experience || []).map(exp => ({ 
      id: `exp-${exp.id}`,
      type: 'experience', 
      icon: FaBriefcase, 
      title: exp.role, 
      subtitle: exp.company, 
      duration: exp.duration,
      desc: exp.responsibilities,
      tech: exp.technologies
    })),
    ...(education || []).map((edu, idx) => ({ 
      id: `edu-${idx}`,
      type: 'education', 
      icon: FaGraduationCap, 
      title: edu.degree, 
      subtitle: edu.institution, 
      duration: edu.duration,
      desc: [edu.description],
      tech: [edu.grade]
    }))
  ];

  if (timelineItems.length === 0) return null;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/40 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 mb-4 tracking-tight">My Journey</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-primary-500/30"></div>
        </motion.div>

        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-transparent -translate-x-1/2 rounded-full hidden md:block opacity-30"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start justify-between w-full group ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot md+ */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.4)] items-center justify-center z-10 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-[45%] bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden group-hover:-translate-y-2 duration-300">
                    {/* Mobile icon */}
                    <div className="md:hidden w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center mb-6 shadow-sm border border-primary-100 dark:border-primary-800">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="flex flex-col gap-2 mb-4">
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-lg w-fit">
                        {item.duration}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mt-2">{item.title}</h3>
                      <h4 className="text-lg font-medium text-slate-600 dark:text-slate-300">{item.subtitle}</h4>
                    </div>

                    <ul className="space-y-3 mt-4">
                      {item.desc.map((line, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm flex gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0"></span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>

                    {item.tech && item.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                        {item.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
