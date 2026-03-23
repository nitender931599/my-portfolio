import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-light-bg dark:bg-dark-bg">
      <motion.div
        className="w-16 h-16 border-4 border-primary-500 rounded-lg"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default Loader;
