'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/30" />
      
      <motion.div
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div className="flex-1 text-center lg:text-left order-2 lg:order-1" variants={itemVariants}>
            <motion.p 
              className="text-indigo-400 font-semibold mb-2 sm:mb-4 tracking-widest uppercase text-xs sm:text-sm"
              variants={itemVariants}
            >
              Hello, I am
            </motion.p>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
              variants={itemVariants}
            >
              <span className="text-gradient">VISHALRAJAN V</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 font-medium"
              variants={itemVariants}
            >
              AI/ML Developer & Automation Engineer
            </motion.p>
            
            <motion.p 
              className="text-gray-400 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg leading-relaxed px-2"
              variants={itemVariants}
            >
              2nd-year BE CSE (AIML) student passionate about AI Agents, Chatbots, and Automation. 
              I build intelligent systems using Python, Reinforcement Learning, and NLP.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a 
                href="#contact" 
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <FaEnvelope className="text-lg" /> Contact Me
              </motion.a>
              <motion.a 
                href="/resume/VISHALRAJAN_V_Resume.docx" 
                target="_blank"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <FaDownload className="text-lg" /> Resume
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex gap-4 sm:gap-6 mt-8 sm:mt-12 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {[
                { icon: FaGithub, href: 'https://github.com', color: 'hover:text-white' },
                { icon: FaLinkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
                { icon: FaTwitter, href: 'https://twitter.com', color: 'hover:text-sky-400' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl sm:text-3xl text-gray-400 ${item.color} glass-icon p-3 sm:p-4 rounded-xl sm:rounded-2xl`}
                >
                  <item.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-2xl sm:blur-3xl opacity-40 sm:opacity-50 scale-90 sm:scale-100" />
              <div className="absolute inset-2 sm:inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl sm:blur-2xl opacity-30 sm:opacity-40 animate-pulse" />
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-3d glow-effect"
                style={{
                  boxShadow: '0 30px 50px -15px rgba(0, 0, 0, 0.6), 0 20px 35px -20px rgba(99, 102, 241, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <img src="/images/85568e91-295a-4fd3-bed9-cc0ac3fe8108.png" alt="VISHALRAJAN V" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div 
          whileHover={{ scale: 1.2 }}
          className="w-10 h-14 sm:w-12 sm:h-16 glass-icon rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-indigo-500/40 inner-glow"
          style={{ boxShadow: '0 8px 25px -5px rgba(99, 102, 241, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.1)' }}
        >
          <motion.div
            className="w-1.5 h-2.5 sm:w-2 sm:h-3 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
