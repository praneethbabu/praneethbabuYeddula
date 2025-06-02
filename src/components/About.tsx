import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { FileText, MapPin, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Full Stack Developer",
      description: "Passionate about creating end-to-end solutions with MERN stack and Java Spring Boot."
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Location",
      description: personalInfo.location
    },
    {
      icon: <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Workshop Leader",
      description: "Led MERN Stack workshops for 200+ students, sharing knowledge and best practices."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Education",
      description: "B.Tech in CSE from G. Pulla Reddy Engineering College (2021-2025)"
    }
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in building robust, scalable applications using modern web technologies. 
                My expertise spans both frontend and backend development, with a focus on creating 
                intuitive user experiences backed by solid architecture.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently pursuing my B.Tech in Computer Science and Engineering, I'm actively seeking 
                opportunities to apply my skills in challenging real-world projects. I'm particularly 
                interested in roles that allow me to grow as a developer while contributing to meaningful products.
              </p>
              
              <div className="pt-4">
                <a 
                  href="/resume.pdf" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Resume
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;