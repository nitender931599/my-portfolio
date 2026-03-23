import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import { FaTrophy, FaStar } from 'react-icons/fa';

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Achievements & Profiles</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achieve, index) => (
             <motion.a
                href={achieve.link !== '#' ? achieve.link : undefined}
                target={achieve.link !== '#' ? "_blank" : undefined}
                rel="noopener noreferrer"
                key={achieve.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`block bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 transition-all ${
                  achieve.link !== '#' ? 'hover:shadow-lg hover:border-primary-100 dark:hover:border-primary-900/50 hover:-translate-y-1' : ''
                }`}
             >
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-4 bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-500 rounded-full">
                      <FaTrophy className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{achieve.platform}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">{achieve.title}</p>
                   </div>
                </div>

                <div className="space-y-3">
                   <div className="flex items-center justify-between text-sm bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                      <span className="text-slate-500 dark:text-slate-400">Rating/Rank</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                         <FaStar className="w-3 h-3 text-yellow-500" />
                         {achieve.rating}
                      </span>
                   </div>
                   {achieve.problems_solved !== "N/A" && (
                     <div className="flex items-center justify-between text-sm bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                        <span className="text-slate-500 dark:text-slate-400">Problems Solved</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{achieve.problems_solved}</span>
                     </div>
                   )}
                </div>
             </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
