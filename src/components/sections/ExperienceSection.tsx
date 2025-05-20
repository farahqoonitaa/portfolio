import React, { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education } from '../../data';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative pl-8 ${
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  } transition-all duration-500`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400" />
                  
                  {/* Timeline line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 -translate-x-1/2 h-full" />
                  )}
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-4">
                      {exp.duration}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`relative pl-8 ${
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  } transition-all duration-500`}
                  style={{ transitionDelay: `${(index + experiences.length) * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400" />
                  
                  {/* Timeline line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 -translate-x-1/2 h-full" />
                  )}
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-4">
                      {edu.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;