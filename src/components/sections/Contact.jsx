import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const { personal } = portfolioData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real scenario, this would post to an endpoint or use mailto
    window.location.href = `mailto:${personal.email}?subject=Contact Request from Portfolio&body=Hi Nitender,`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 mb-4 tracking-tight">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-primary-500/30 mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Im currently looking for new opportunities. Whether you have a question or just want to say hi, Ill try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-[2rem] shadow-lg border border-slate-100/50 dark:border-slate-800 flex items-center gap-6 group hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                <a href={`mailto:${personal.email}`} className="text-lg font-semibold text-slate-800 dark:text-white hover:text-primary-500 transition-colors">
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-[2rem] shadow-lg border border-slate-100/50 dark:border-slate-800 flex items-center gap-6 group hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                <p className="text-lg font-semibold text-slate-800 dark:text-white">
                  {personal.location}
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-slate-100/50 dark:border-slate-800 flex flex-col items-center justify-center gap-3 group hover:-translate-y-1 hover:border-primary-500/50 transition-all">
                <FaGithub className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-primary-500 transition-colors" />
                <span className="font-semibold text-slate-600 dark:text-slate-400">GitHub</span>
              </a>
              <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-slate-100/50 dark:border-slate-800 flex flex-col items-center justify-center gap-3 group hover:-translate-y-1 hover:border-primary-500/50 transition-all">
                <FaLinkedin className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-primary-500 transition-colors" />
                <span className="font-semibold text-slate-600 dark:text-slate-400">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl border border-slate-200/50 dark:border-slate-700/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-[40px] -mr-10 -mt-10"></div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 relative z-10">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 group">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 block group-focus-within:text-primary-500 transition-colors">Your Name</label>
                  <input type="text" id="name" required className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-slate-800 dark:text-white" placeholder="John Doe" />
                </div>
                <div className="flex-1 group">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 block group-focus-within:text-primary-500 transition-colors">Your Email</label>
                  <input type="email" id="email" required className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-slate-800 dark:text-white" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="message" className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 block group-focus-within:text-primary-500 transition-colors">Message</label>
                <textarea id="message" required rows="5" className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-slate-800 dark:text-white resize-none" placeholder="Hello, I'd like to talk about..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:-translate-y-1 flex justify-center items-center gap-2 mt-2">
                Send Message <FaEnvelope />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
