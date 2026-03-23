import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                  <FaCertificate className="w-8 h-8" />
                </div>
                {cert.link && cert.link !== '#' && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors p-2 rounded-full">
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{cert.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-6">{cert.platform}</p>

              <div className="mt-auto">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">Skills Acquired</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded text-xs font-medium border border-slate-100 dark:border-slate-600">
                      {skill}
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

export default Certifications;
