import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Work Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-12"
                >
                  <div className="flex flex-col sm:flex-row items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 border-4 border-white dark:border-gray-800 flex items-center justify-center z-10">
                      <Briefcase size={16} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    
                    {/* Content */}
                    <div className="sm:w-1/2 sm:pr-8 sm:text-right pl-16 sm:pl-0 mb-6 sm:mb-0">
                      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {experience.role}
                        </h3>
                        <h4 className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {experience.company}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          {experience.period}
                        </p>
                      </div>
                    </div>
                    
                    <div className="sm:w-1/2 sm:pl-8 pl-16 sm:mt-0">
                      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <ul className="space-y-2">
                          {experience.description.map((item, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 mt-2 mr-2"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;