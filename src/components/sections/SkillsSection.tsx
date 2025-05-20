import React, { useRef } from 'react';
import { skills } from '../../data';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Backend',
    design: 'Design',
    other: 'Other',
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These are the technologies and tools I work with on a regular basis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <div
              key={category}
              className={`${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } transition-all duration-500`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, skillIndex) => (
                  <span
                    key={skill.id}
                    className={`px-4 py-2 bg-white dark:bg-gray-800 shadow-sm rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:shadow-md hover:scale-105 ${
                      isInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 150 + skillIndex * 50}ms` }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;