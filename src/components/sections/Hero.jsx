import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import portfolioData from '../../data/portfolio.json';

const Hero = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium text-sm mb-6 mx-auto lg:mx-0 border border-primary-100 dark:border-primary-800/50 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              Available for New Opportunities
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">{personal.name.split(' ')[0]}</span>
            </motion.h1>
            
            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6 h-10 flex items-center justify-center lg:justify-start"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Machine Learning Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500"
              />
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              {personal.summary}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                className="px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 flex items-center gap-2"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-3.5 glass text-slate-900 dark:text-white rounded-xl font-medium transition-all flex items-center gap-2 hover:-translate-y-1 hover:bg-white/90 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-700"
              >
                <FaDownload /> Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              {personal.social.github && (
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:-translate-y-1" aria-label="GitHub">
                  <FaGithub className="w-6 h-6" />
                </a>
              )}
              {personal.social.linkedin && (
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:-translate-y-1" aria-label="LinkedIn">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              )}
              {personal.social.leetcode && (
                <a href={personal.social.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:-translate-y-1" aria-label="LeetCode">
                  <SiLeetcode className="w-6 h-6" />
                </a>
              )}
              {personal.social.hackerrank && (
                <a href={personal.social.hackerrank} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:-translate-y-1" aria-label="HackerRank">
                  <SiHackerrank className="w-6 h-6" />
                </a>
              )}
              <a href={`mailto:${personal.email}`} className="p-3 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:-translate-y-1" aria-label="Email">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              {/* Animated glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-blob"></div>
              
              {/* Profile Image Container */}
              <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] border-2 border-white/40 dark:border-slate-700/50 shadow-2xl overflow-hidden glass rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 pointer-events-none"></div>
                <motion.img
                  src="/profile.jpeg"
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
