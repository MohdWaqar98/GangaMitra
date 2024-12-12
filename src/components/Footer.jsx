import React from 'react';
import { Github, Twitter, Mail, Heart, Droplets } from 'lucide-react';

export const Footer = () => {
  const links = [
    { label: 'About', href: '/about' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: 'https://github.com/whokrishnansh', 
      label: 'GitHub' 
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: 'https://x.com/whokrishnansh?t=u65AagY8gNU8GqVnkgK6DQ&s=09', 
      label: 'Twitter' 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: 'contactkrishnansh@gmail.com', 
      label: 'Email' 
    }
  ];
  

  return (
    <footer className="bg-sky-50/50 dark:bg-gray-800/50 border-t border-sky-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-sky-100 dark:bg-sky-900/50 p-2 rounded-lg">
              <Droplets className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            </div>
            <span className="text-lg font-semibold text-sky-900 dark:text-sky-100">
              Ganga Mitra
            </span>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-sky-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Heart className="h-4 w-4 text-red-500" />
            <span>Made with love for a cleaner Ganges</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Ganga Mitra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};