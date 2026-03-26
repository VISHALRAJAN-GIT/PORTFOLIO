'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

const experiences = [
  {
    title: 'AI/ML Developer',
    company: 'Self-Learning & Projects',
    period: '2026 - Present',
    description: 'Building AI projects using Python, TensorFlow, PyTorch, and OpenCV.',
    icon: FaBriefcase,
    color: 'indigo'
  },
  {
    title: 'National Hackathon Winner - 1st Place',
    company: 'AI/ML National Hackathon',
    period: '2026',
    description: 'Secured 1st place in National-level AI/ML hackathon.',
    icon: FaGraduationCap,
    color: 'yellow'
  },
  {
    title: 'AI & ML Courses Certified',
    company: 'Simplilearn',
    period: '2026',
    description: 'Completed multiple AI and ML courses including Deep Learning, NLP.',
    icon: MdSchool,
    color: 'blue'
  },
  {
    title: 'BE Computer Science (AIML)',
    company: 'Jaya Engineering College',
    period: '2024 - 2028',
    description: 'Currently pursuing degree specializing in AI & Machine Learning.',
    icon: FaGraduationCap,
    color: 'green'
  },
];

const Timeline = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
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
    <section id="timeline" className="py-16 sm:py-20 md:py-24 bg-gray-900 relative overflow-hidden">
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
            <span className="text-gradient">Experience</span> & Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            My journey in AI/ML development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="glass-card p-4 sm:p-5 md:p-6"
              style={{ 
                boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                border: `2px ${
                  exp.color === 'yellow' ? 'rgba(234, 179, 8, 0.4)' : 
                  exp.color === 'green' ? 'rgba(34, 197, 94, 0.4)' : 
                  exp.color === 'blue' ? 'rgba(59, 130, 246, 0.4)' : 
                  'rgba(99, 102, 241, 0.4)'
                }`
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  className={`glass-icon p-2.5 sm:p-3 flex-shrink-0 ${
                    exp.color === 'yellow' ? 'bg-yellow-500/20 border-yellow-500/40' : 
                    exp.color === 'green' ? 'bg-green-500/20 border-green-500/40' : 
                    exp.color === 'blue' ? 'bg-blue-500/20 border-blue-500/40' : 
                    'bg-indigo-500/20 border-indigo-500/40'
                  }`}
                >
                  <exp.icon className={`text-lg sm:text-xl ${
                    exp.color === 'yellow' ? 'text-yellow-400' : 
                    exp.color === 'green' ? 'text-green-400' : 
                    exp.color === 'blue' ? 'text-blue-400' : 
                    'text-indigo-400'
                  }`} />
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 mb-1 sm:mb-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-xs sm:text-sm font-medium px-3 py-1 glass-icon rounded-full bg-indigo-500/20 border-indigo-500/40 text-indigo-300 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${
                    exp.color === 'yellow' ? 'text-yellow-400' : 
                    exp.color === 'green' ? 'text-green-400' : 
                    exp.color === 'blue' ? 'text-blue-400' : 
                    'text-indigo-400'
                  }`}>
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
