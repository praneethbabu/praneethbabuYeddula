import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  // ⬇️ Track whether typing has finished
  const [showCursor, setShowCursor] = useState(true);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 z-0" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="text-primary-600 dark:text-primary-400">Hello, I'm</span><br />
                <span className="text-gray-900 dark:text-white">
                  <Typewriter
                    words={[personalInfo.name]}
                   //              // ▶ plays once
                    cursor={showCursor}
                    cursorStyle=""
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={() => setShowCursor(false)} // ▶ hide cursor after done
                  />
                </span>
              </h1>

              <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
                {personalInfo.title}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                {personalInfo.bio}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="/Praneeth_Babu_Resume-3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center"
                >
                  <Download size={16} className="mr-2" />
                  Download Resume
                </a>

                <Link
                  to="contact"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  className="btn btn-secondary flex items-center cursor-pointer"
                >
                  <Mail size={16} className="mr-2" />
                  Contact Me
                </Link>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.slice(0, 2).map((link) => {
                  const Icon =
                    link.icon === 'Linkedin' ? Linkedin :
                    link.icon === 'Github'   ? Github   : Mail;

                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      aria-label={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-primary-100 dark:bg-primary-900/30 overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
               <img
  src="/praneethbabu.png"   {/* ← no “public/” */}
  alt="Praneeth Babu Yeddula"
  className="w-full h-full object-cover"
/>

              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link
            to="about"
            spy
            smooth
            offset={-70}
            duration={500}
            className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md cursor-pointer"
          >
            <ArrowDown size={18} className="text-primary-600 dark:text-primary-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
