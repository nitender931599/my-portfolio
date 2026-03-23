import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [previewUrl, setPreviewUrl] = useState(null);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openPreview = (url, e) => {
    if (url.includes('streamlit.app')) {
      e.preventDefault();
      setPreviewUrl(url);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-10 shadow-lg shadow-primary-500/30"></div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105' 
                  : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400 hover:-translate-y-1 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, type: 'spring' }}
                className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/20 transition-all border border-slate-200/50 dark:border-slate-700/50 flex flex-col group/card"
              >
                <div className="h-56 overflow-hidden relative group border-b border-slate-100 dark:border-slate-800">
                  <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-sm">
                    {project.live && (
                       <a 
                         href={project.live} 
                         onClick={(e) => openPreview(project.live, e)} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-white font-medium px-6 py-3 rounded-xl border-2 border-white/50 bg-white/10 hover:bg-white/20 transition-all transform opacity-0 group-hover/card:opacity-100 translate-y-4 group-hover/card:translate-y-0 duration-500 delay-100 flex items-center gap-2"
                       >
                         <FaExternalLinkAlt /> View Demo
                       </a>
                    )}
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-primary-600 dark:text-primary-400 text-xs font-bold rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col relative bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-3 group-hover/card:text-primary-600 dark:group-hover/card:text-primary-400 transition-colors">{project.title}</h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.stack.map((tech, idx) => (
                      <span key={idx} className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-200/60 dark:border-slate-700/60 mt-auto">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{project.duration}</span>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-all" aria-label="GitHub Repository">
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} onClick={(e) => openPreview(project.live, e)} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-all" aria-label="Live Demo">
                          <FaExternalLinkAlt className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Streamlit Custom Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 lg:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full h-[85vh] md:h-full max-w-6xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                  Live Preview
                </h3>
                <div className="flex items-center gap-4">
                  <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center gap-1">
                    Open in new tab <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                  <button onClick={() => setPreviewUrl(null)} className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors">
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-slate-100 dark:bg-slate-950 relative">
                 <div className="absolute inset-0 flex items-center justify-center">
                    {/* Fallback spinner underneath iframe */}
                    <div className="w-10 h-10 border-4 border-slate-200 dark:border-slate-700 border-t-primary-500 rounded-full animate-spin"></div>
                 </div>
                <iframe 
                  src={previewUrl} 
                  title="Live Preview" 
                  className="w-full h-full border-0 relative z-10 bg-white dark:bg-slate-900"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
