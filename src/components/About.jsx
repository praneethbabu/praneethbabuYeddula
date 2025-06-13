import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data';
import { FileText, MapPin, Award, BookOpen, Linkedin } from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Full Stack Developer',
    description:
      'Passionate about building scalable apps using MERN stack & Spring Boot.',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Location',
    description: personalInfo.location,
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Workshop Mentor',
    description: 'Trained 200+ students in MERN Stack during real‑time workshops.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Education',
    description: 'B.Tech in CSE from GPREC, Andhra Pradesh (2021–2025)',
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);

  const nextCard = () => setCurrent((p) => (p + 1) % features.length);
  const prevCard = () => setCurrent((p) => (p - 1 + features.length) % features.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const calcPos = (relIdx) => {
    const rotateMap = [-12, -4, 4, 12];
    const offsetXMap = [-50, -20, 20, 50];
    const offsetYMap = [0, 26, 52, 78];
    return {
      rotate: rotateMap[relIdx],
      x: offsetXMap[relIdx],
      y: offsetYMap[relIdx],
      scale: 1 - relIdx * 0.06,
      zIndex: 50 - relIdx,
    };
  };

  const handleCardClick = (i) => {
    if (i !== current) {
      setCurrent(i);
    }
  };

  return (
    <section
      id="about"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-center mb-2"
        >
          About Me
        </motion.h2>
        <p className="text-xl md:text-2xl font-medium text-center mb-12">
          👋 Hi, I’m {personalInfo.name} — a developer who turns ideas into real
          web experiences.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left Text */}
          <div className="lg:col-span-3 space-y-6 leading-relaxed">
            <p>{personalInfo.bio}</p>
            <p>
              I specialise in full‑stack development — from front‑end interfaces
              to back‑end architecture. My strengths lie in writing clean code,
              building user‑focused features, and solving real‑world problems.
            </p>
            <p>
              Currently pursuing B.Tech in Computer Science, I’m seeking
              challenging roles where I can contribute, grow, and work on
              impactful software alongside experienced teams.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="/Praneeth_Babu_Resume-3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                📄 View Full Resume
              </a>
              <a
                href="https://www.linkedin.com/in/praneeth-babu-yeddula-4639b0283/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right Fan Card Deck */}
          <div
            className="lg:col-span-2 relative h-[22rem] flex items-center justify-center"
            aria-live="polite"
          >
            <AnimatePresence>
              {features.map((feature, i) => {
                const rel = (i - current + features.length) % features.length;
                if (rel > 3) return null;
                const { rotate, x, y, scale, zIndex } = calcPos(rel);
                const isActive = rel === 0;

                return (
                  <motion.div
                    key={i}
                    className="absolute w-72 h-44 flex justify-center items-center"
                    style={{ zIndex }}
                    onClick={() => handleCardClick(i)}
                  >
                    <motion.div
                      drag="x"
                      dragElastic={0.35}
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -100) nextCard();
                        if (info.offset.x > 100) prevCard();
                      }}
                      initial={{ opacity: 0, rotate, x, y, scale }}
                      animate={{ opacity: 1, rotate, x, y, scale }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                      className={`w-full h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-6 flex flex-col items-center text-center space-y-2 cursor-${
                        isActive ? 'grab active:cursor-grabbing' : 'pointer'
                      }`}
                      style={{ pointerEvents: 'auto' }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-300">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
