import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import portfolioData from '../../data/portfolio.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { social, name } = portfolioData.personal;

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tighter text-primary-600 dark:text-primary-400">
              {name.split(' ')[0]}<span className="text-slate-800 dark:text-white">.</span>
            </a>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Building dynamic and robust web experiences.
            </p>
          </div>
          
          <div className="flex space-x-5">
             {social.github && (
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
             )}
             {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
             )}
             {social.leetcode && (
                <a href={social.leetcode} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
                  <SiLeetcode className="w-5 h-5" />
                </a>
             )}
             {social.hackerrank && (
                <a href={social.hackerrank} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
                  <SiHackerrank className="w-5 h-5" />
                </a>
             )}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {currentYear} {name}. All rights reserved. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
