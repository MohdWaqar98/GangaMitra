import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Users, LineChart, Shield, Globe, Heart } from 'lucide-react';

export const About = () => {
  const [expanded, setExpanded] = useState(null);

  const features = [
    {
      icon: <Droplets className="h-6 w-6 text-sky-500" />,
      title: 'pH',
      description: 'The pH of water measures how acidic or alkaline the water is. A pH of 7 is considered neutral, while values below 7 are acidic and above 7 are alkaline. The pH of the Ganga River is important as it affects aquatic life. A balanced pH ensures that fish and other organisms can thrive. If the water becomes too acidic or too alkaline, it harms these organisms and disrupts the natural ecosystem.'
    },
    {
      icon: <LineChart className="h-6 w-6 text-sky-500" />,
      title: 'D.O.',
      description: 'Dissolved Oxygen (DO) refers to the amount of oxygen present in the water. Oxygen is essential for the survival of aquatic creatures like fish and plants. High DO levels indicate good water quality, supporting a healthy ecosystem. Low DO levels, often caused by pollution, can lead to the death of aquatic life. Therefore, monitoring DO levels is crucial to understanding the health of the river.'
    },
    {
      icon: <Shield className="h-6 w-6 text-sky-500" />,
      title: 'B.O.D.',
      description: 'BOD is a measure of the amount of oxygen required by microorganisms to break down organic material in water. Higher BOD levels mean more pollution, as it indicates that there is more organic waste (like sewage) in the water. This reduces the amount of oxygen available for fish and other aquatic life. A low BOD indicates cleaner water with less pollution.'
    },
    {
      icon: <Globe className="h-6 w-6 text-sky-500" />,
      title: 'Total Coliform',
      description: 'Total Coliform refers to a group of bacteria commonly found in the intestines of warm-blooded animals, including humans. These bacteria themselves are not harmful, but their presence in water suggests that harmful pathogens may also be present. High levels of total coliform in the Ganga indicate contamination, usually due to human or animal waste, which can lead to waterborne diseases.'
    },
    {
      icon: <Globe className="h-6 w-6 text-sky-500" />,
      title: 'Fecal Coliform',
      description: 'Fecal Coliform is a subset of total coliform bacteria, specifically associated with the feces of warm-blooded animals. Its presence in water is a strong indicator of recent contamination by human or animal waste. High levels of fecal coliform bacteria make the water unsafe for drinking and bathing, posing serious health risks.'
    },
    {
      icon: <Globe className="h-6 w-6 text-sky-500" />,
      title: 'Ganga Basin',
      description: 'The Ganga Basin is the vast area that drains water into the Ganga River. It covers parts of India, Nepal, China, and Bangladesh, and is home to millions of people. The basin includes various tributaries, towns, and cities, making it one of the most densely populated and industrialized regions in the world. Protecting the quality of water in the Ganga is crucial not just for the river, but also for the livelihoods of millions of people who depend on it for drinking, irrigation, and cultural purposes.'
    },
    {
      icon: <Globe className="h-6 w-6 text-sky-500" />,
      title: 'Classification of Water According to CPCB',
      description: 'The Central Pollution Control Board (CPCB) classifies water quality based on various parameters like pH, DO, BOD, and coliform levels. The classification is divided into five categories: Class I (A): Best quality (Drinking water source without treatment), Class II: Good quality (Outdoor bathing), Class III: Moderate quality (Drinking water source after treatment), Class IV: Poor quality (Fishery, industrial cooling), Class V: Very poor quality (Water unsuitable for aquatic life).'
    },
    {
      icon: <Globe className="h-6 w-6 text-sky-500" />,
      title: 'Namami Gange Project',
      description: 'The Namami Gange Project is an ambitious initiative launched by the Government of India to clean and rejuvenate the Ganga River. It aims to reduce pollution levels, improve water quality, and conserve the river\'s ecosystem. The project focuses on sewage treatment, solid waste management, and promoting sustainable practices along the river. It is a long-term effort to restore the river to its pristine state and ensure clean water for future generations.'
    } 
  ];

  const handleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const teamMembers = [
    {
      name: 'Dr. Aisha Sharma',
      role: 'Lead Scientist',
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=400&fit=crop'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Patel',
      role: 'Environmental Analyst',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-sky-900 dark:text-sky-100 sm:text-5xl md:text-6xl"
            >
              Information Chaos
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-sky-600 dark:text-sky-400"
            >
             The project aims to provide real-time monitoring of the Ganga river's cleanliness and weather forecasts for timely notifications and action.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-16 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sky-900 dark:text-sky-100">Our Mission</h2>
            <p className="mt-4 text-lg text-sky-600 dark:text-sky-400">
            "Our mission is to keep the Ganga river clean and ensure the health of all."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-6 bg-sky-50 dark:bg-gray-700 rounded-xl"
              >
                <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sky-600 dark:text-sky-400">
                  {expanded === index
                    ? feature.description
                    : feature.description.substring(0, 150) + '...'}
                </p>
                <button
                  onClick={() => handleReadMore(index)}
                  className="text-sky-500 mt-2"
                >
                  {expanded === index ? 'Read Less' : 'Read More'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="py-16"
      >
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
          "Let us all come together in this service of cleaning the Ganga and make it clean."
          </p>
         
        </div>
      </motion.section>
    </div>
  );
};
