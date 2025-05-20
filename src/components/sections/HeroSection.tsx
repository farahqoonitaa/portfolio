import React, { useRef } from 'react';
import { ArrowDown, FileDown } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(heroRef, { threshold: 0.1 });

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 ${
              isInView ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-primary-600 dark:text-primary-400">Hi, I'm</span> Farah Qoonita
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Product Manager | Strategy & Operations | B2B/B2C Expert
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
              Growth & Strategy Leader specializing in B2B, B2C, and B2B2C expansion, revenue optimization, and market entry success.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                Download CV
                <FileDown className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div
            className={`md:w-1/2 mt-10 md:mt-0 ${
              isInView ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Farah Qoonita"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;