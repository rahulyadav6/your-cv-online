
import { Code } from 'lucide-react';

const SkillsSection = () => {
  const languages = ['C++', 'JavaScript', 'Python'];
  const technologies = [
    'MongoDB', 'Express', 'ReactJS', 'Node.js', 
    'TailwindCSS', 'Framer Motion', 'Bootstrap', 
    'Docker', 'Git', 'GitHub'
  ];
  
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Code className="text-blue" size={24} />
          <h2 className="section-heading">Technical Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-heading text-xl mb-4 text-navy-dark dark:text-slate-lighter">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((language) => (
                <span key={language} className="skill-tag">
                  {language}
                </span>
              ))}
            </div>
            
            <h3 className="font-heading text-xl mt-8 mb-4 text-navy-dark dark:text-slate-lighter">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 dark:from-navy-light dark:to-navy p-6 rounded-lg shadow-inner h-full flex items-center justify-center">
              <div className="max-w-md space-y-6">
                <h3 className="font-heading text-xl mb-2 text-navy-dark dark:text-slate-lighter">My Development Approach</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-navy-dark dark:text-slate-lighter mb-1">
                      <span className="text-blue mr-2">01.</span>
                      Responsive Design
                    </h4>
                    <p className="pl-7 text-sm text-slate">Creating mobile-first layouts with CSS Flexbox/Grid and media queries</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-navy-dark dark:text-slate-lighter mb-1">
                      <span className="text-blue mr-2">02.</span>
                      Performance Optimization
                    </h4>
                    <p className="pl-7 text-sm text-slate">Focusing on load times, code splitting, and efficient state management</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-navy-dark dark:text-slate-lighter mb-1">
                      <span className="text-blue mr-2">03.</span>
                      Clean Code Practices
                    </h4>
                    <p className="pl-7 text-sm text-slate">Writing maintainable, reusable components with proper documentation</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-navy-dark dark:text-slate-lighter mb-1">
                      <span className="text-blue mr-2">04.</span>
                      Enhanced User Experience
                    </h4>
                    <p className="pl-7 text-sm text-slate">Implementing smooth animations and interactive elements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
