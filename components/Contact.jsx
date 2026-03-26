'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gray-900 relative overflow-hidden">
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
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Interested in AI/ML collaborations? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-4 sm:space-y-5"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>

            <motion.div
              whileHover={{ x: 8 }}
              className="glass-card p-4 sm:p-5 flex items-center gap-4"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                className="glass-icon p-3 sm:p-4 flex-shrink-0"
              >
                <FaEnvelope className="text-indigo-400 text-lg sm:text-xl" />
              </motion.div>
              <div className="min-w-0">
                <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                <p className="font-semibold text-sm sm:text-base md:text-lg text-white truncate">vishalrajan275@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="glass-card p-4 sm:p-5 flex items-center gap-4"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                className="glass-icon p-3 sm:p-4 flex-shrink-0"
              >
                <FaMapMarkerAlt className="text-purple-400 text-lg sm:text-xl" />
              </motion.div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                <p className="font-semibold text-sm sm:text-base md:text-lg text-white">Tamil Nadu, India</p>
              </div>
            </motion.div>

            <div className="mt-6 sm:mt-8">
              <p className="text-gray-400 mb-4 text-sm sm:text-base font-medium">Connect with me</p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {[
                  { icon: FaGithub, href: 'https://github.com/VISHALRAJAN-GIT', color: 'hover:text-white', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vishalrajan-v-7b6895337?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: 'hover:text-blue-400', label: 'LinkedIn' },
                  { icon: FaTwitter, href: 'https://x.com/VishalrajanV', color: 'hover:text-sky-400', label: 'Twitter' },
                  { icon: FaInstagram, href: 'https://www.instagram.com/ernesh.propria?igsh=eGp5djl3NDZxNWh4', color: 'hover:text-pink-400', label: 'Instagram' },
                  { icon: FaWhatsapp, href: 'https://wa.me/917305619548', color: 'hover:text-green-400', label: 'WhatsApp' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={item.label}
                    className={`w-12 h-12 sm:w-14 sm:h-14 glass-icon flex items-center justify-center rounded-xl sm:rounded-2xl text-xl sm:text-2xl text-gray-400 ${item.color}`}
                    style={{ boxShadow: '0 8px 20px -5px rgba(0, 0, 0, 0.4)' }}
                  >
                    <item.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card p-5 sm:p-6 md:p-8 lg:w-1/2"
          >
            <div className="mb-4 sm:mb-5">
              <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 glass-input text-white rounded-xl focus:outline-none transition-all duration-300 text-base"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-4 sm:mb-5">
              <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 glass-input text-white rounded-xl focus:outline-none transition-all duration-300 text-base"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="mb-4 sm:mb-5">
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 glass-input text-white rounded-xl focus:outline-none transition-all duration-300 resize-none text-base"
                placeholder="Tell me about your AI/ML project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary text-base sm:text-lg py-3 sm:py-4"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
