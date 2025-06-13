import React from 'react';
import { Link } from 'react-scroll';
import { socialLinks, personalInfo } from '../data';
import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react'; // 👈 Add Instagram icon

const Footer = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-8 border-b border-gray-200 dark:border-gray-800">
          {/* Branding + Social */}
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
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full Stack Developer (MERN + Spring Boot) passionate about building modern, scalable web apps.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.slice(0, 4).map((link, index) => {
                const Icon =
                  link.icon === 'Linkedin' ? Linkedin :
                  link.icon === 'Github' ? Github :
                  link.icon === 'Instagram' ? Instagram :
                  Mail;

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

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600 dark:text-gray-400">{personalInfo.location}</li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary-600 text-gray-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-primary-600 text-gray-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Praneeth Babu Yeddula. Made with
            <Heart size={14} className="text-red-500 dark:text-red-400" fill="currentColor" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
