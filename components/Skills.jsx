'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const skillCategories = [
  {
    title: 'AI & ML',
    skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'NLP', 'RL', 'CV'],
    color: 'purple',
    gradient: 'from-purple-600 to-pink-500',
    border: 'border-purple-500/40',
    glow: 'rgba(168, 85, 247, 0.15)',
    tagBg: 'bg-purple-500/15',
    tagText: 'text-purple-300'
  },
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'],
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-500',
    border: 'border-blue-500/40',
    glow: 'rgba(59, 130, 246, 0.15)',
    tagBg: 'bg-blue-500/15',
    tagText: 'text-blue-300'
  },
  {
    title: 'Automation',
    skills: ['Selenium', 'Instagram API', 'Gmail API', 'Flask', 'FastAPI'],
    color: 'green',
    gradient: 'from-green-600 to-emerald-500',
    border: 'border-green-500/40',
    glow: 'rgba(34, 197, 94, 0.15)',
    tagBg: 'bg-green-500/15',
    tagText: 'text-green-300'
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Colab', 'Jupyter', 'VS Code'],
    color: 'orange',
    gradient: 'from-orange-600 to-amber-500',
    border: 'border-orange-500/40',
    glow: 'rgba(249, 115, 22, 0.15)',
    tagBg: 'bg-orange-500/15',
    tagText: 'text-orange-300'
  },
];

const Skills = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 4
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-indigo-500/20"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span> & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Explore my tech stack
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`relative p-4 sm:p-5 md:p-6 rounded-xl cursor-pointer transition-all duration-300 
                bg-gray-800/80 backdrop-blur-xl border-2 ${category.border}`}
              style={{ 
                boxShadow: `0 12px 30px -8px rgba(0, 0, 0, 0.5), 0 0 15px ${category.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.08)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none" />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-3 sm:mb-4 mx-auto`}
                  style={{ 
                    boxShadow: `0 6px 15px -3px ${category.glow}, inset 0 2px 0 rgba(255, 255, 255, 0.2)`,
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {category.title.charAt(0)}
                  </span>
                </motion.div>

                <h3 className="text-sm sm:text-base md:text-lg font-bold text-center mb-3 sm:mb-4 text-white">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${category.tagBg} ${category.tagText} border ${category.border}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 sm:mt-14 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-4 sm:py-5 rounded-xl bg-gray-800/80 backdrop-blur-xl border-2 border-indigo-500/40"
            style={{ boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)' }}
          >
            <span className="text-gray-300 font-semibold text-sm sm:text-base">Tech Stack:</span>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {['Python', 'AI/ML', 'Automation', 'APIs'].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-indigo-600/25 text-indigo-300 font-medium text-xs sm:text-sm border border-indigo-500/40"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
