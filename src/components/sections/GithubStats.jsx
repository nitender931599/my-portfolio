import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import portfolioData from '../../data/portfolio.json';

const GithubStats = () => {
  const { isDark } = useTheme();
  const { personal } = portfolioData;
  const username = personal.social.github.split('/').pop() || 'alexcarter'; // Default fallback

  const themeParam = isDark ? '&theme=radical' : '&theme=default';

  return (
    <section id="github" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">GitHub Activity</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-8 items-center">
          {/* GitHub Stats Card */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="w-full max-w-4xl"
          >
             <img 
               src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=${isDark ? '1e293b' : 'ffffff'}&title_color=${isDark ? '38bdf8' : '0ea5e9'}&text_color=${isDark ? '94a3b8' : '64748b'}&icon_color=${isDark ? '38bdf8' : '0ea5e9'}`}
               alt="GitHub Stats" 
               className="w-full rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
             />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
             {/* Top Languages */}
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.3 }}
             >
               <img 
                 src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=${isDark ? '1e293b' : 'ffffff'}&title_color=${isDark ? '38bdf8' : '0ea5e9'}&text_color=${isDark ? '94a3b8' : '64748b'}`}
                 alt="Top Languages" 
                 className="w-full rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
               />
             </motion.div>

             {/* Streak Stats */}
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.4 }}
             >
                <img 
                 src={`https://streak-stats.demolab.com?user=${username}&hide_border=true&background=${isDark ? '1e293b' : 'ffffff'}&ring=0ea5e9&fire=0ea5e9&currStreakLabel=${isDark ? '38bdf8' : '0ea5e9'}&sideNums=${isDark ? '94a3b8' : '64748b'}&currStreakNum=${isDark ? 'f8fafc' : '0f172a'}&sideLabels=${isDark ? '94a3b8' : '64748b'}&dates=${isDark ? '94a3b8' : '64748b'}`}
                 alt="GitHub Streak" 
                 className="w-full rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
               />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
