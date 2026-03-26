'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot } from 'react-icons/fa';

const projects = [
  {
    title: 'Personal AI Chatbot',
    description: 'Built an intelligent chatbot using NLP and machine learning that can understand context and assist with daily tasks.',
    tags: ['Python', 'NLP', 'TensorFlow', 'Flask'],
    github: 'https://github.com',
  },
  {
    title: 'Multi-Platform Automation Agent',
    description: 'AI agent that automates tasks across Instagram, Gmail, and other platforms including auto-replies.',
    tags: ['Python', 'Selenium', 'API Integration'],
    github: 'https://github.com',
  },
  {
    title: 'Smart Calendar Assistant',
    description: 'AI-powered calendar that automatically schedules meetings and optimizes your daily routine.',
    tags: ['Python', 'Google Calendar API', 'ML'],
    github: 'https://github.com',
  },
  {
    title: 'General Purpose AI Agent',
    description: 'AI agent capable of performing basic computer tasks autonomously like browsing and typing.',
    tags: ['Python', 'RL', 'Computer Vision'],
    github: 'https://github.com',
  },
  {
    title: 'AI Pathfinding & Navigation',
    description: 'Pathfinding algorithms (A*, RL-based) for autonomous navigation in complex environments.',
    tags: ['Python', 'Reinforcement Learning'],
    github: 'https://github.com',
  },
  {
    title: 'Email & Social Automation',
    description: 'Automated email responses using GPT models and Instagram bot for auto-engagement.',
    tags: ['Python', 'OpenAI API', 'Gmail API'],
    github: 'https://github.com',
  },
];

const Projects = () => {
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
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-pink-500/20"
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            AI/ML projects - Chatbots, Automation Agents, and Intelligent Systems
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card overflow-hidden group"
              style={{ boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)' }}
            >
              <div className="relative h-32 sm:h-36 md:h-40 bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-pink-600/40 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="glass-icon p-4 sm:p-5"
                >
                  <FaRobot className="text-3xl sm:text-4xl text-indigo-400" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-white/10 border border-white/15 text-gray-300 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 sm:gap-4 pt-3 border-t border-white/10">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="btn-glass flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm py-2 px-3 sm:py-2.5 sm:px-4"
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="btn-glass flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm py-2 px-3 sm:py-2.5 sm:px-4"
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
