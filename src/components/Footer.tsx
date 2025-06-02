import React from 'react';
import { Link } from 'react-scroll';
import { socialLinks, personalInfo } from '../data';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' }
  ];
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-200 dark:border-gray-800">
          {/* Logo and bio */}
          <div className="space-y-4">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-bold text-xl cursor-pointer text-primary-600 dark:text-primary-400"
            >
              Praneeth Babu
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer with expertise in MERN stack and Java Spring Boot.
              Building innovative web solutions with a focus on user experience.
            </p>
            
            <div className="flex space-x-4 pt-2">
              {socialLinks.slice(0, 3).map((link, index) => {
                const Icon = link.icon === 'Linkedin' ? Linkedin : 
                           link.icon === 'Github' ? Github : Mail;
                
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                {personalInfo.location}
              </li>
              <li>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p className="flex items-center justify-center">
            © {currentYear} Praneeth Babu Yeddula. Made with 
            <Heart size={14} className="mx-1 text-error-500" fill="currentColor" /> 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;