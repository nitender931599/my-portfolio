import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Timeline from './components/sections/Timeline'
import Certifications from './components/sections/Certifications'
import Achievements from './components/sections/Achievements'
import GithubStats from './components/sections/GithubStats'
import Contact from './components/sections/Contact'
import Loader from './components/layout/Loader'
import BackToTop from './components/layout/BackToTop'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for splash screen effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-500 selection:text-white relative overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Dynamic Background Blurs */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-500/20 dark:bg-primary-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-500/20 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-sky-500/20 dark:bg-sky-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      <main className="flex-grow z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Achievements />
        <GithubStats />
        <Contact />
      </main>
      <Footer className="z-10 relative" />
      <BackToTop />
    </div>
  )
}

export default App
