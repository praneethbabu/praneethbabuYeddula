import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education & Certifications</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-primary-600 dark:text-primary-400" />
                Academic Background
              </h3>
              
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-primary-200 dark:before:bg-primary-800"
                >
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 border-2 border-primary-500 dark:border-primary-400 z-10"></div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.degree}
                    </h4>
                    <h5 className="text-primary-600 dark:text-primary-400 font-medium">
                      {item.institution}
                    </h5>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {item.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      GPA: {item.gpa}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                <Award className="w-6 h-6 mr-2 text-primary-600 dark:text-primary-400" />
                Certifications & Achievements
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {cert.date}
                    </p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                      >
                        View Certificate →
                      </a>
                    )}
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

export default Education;