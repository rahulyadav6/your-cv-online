
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-navy-light/10">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <User className="text-blue" size={24} />
          <h2 className="section-heading">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-slate mb-4">
              I'm a passionate frontend developer from Siraha, Sagarmatha, Nepal, currently focused on building accessible, 
              responsive, and performant web applications using modern technologies.
            </p>
            
            <p className="text-slate mb-4">
              With a background in Computer Science and Engineering, I combine technical knowledge with creative 
              problem-solving to develop elegant solutions. I love working with React, TailwindCSS, and other modern 
              tools to create exceptional user experiences.
            </p>
            
            <p className="text-slate mb-4">
              When I'm not coding, I enjoy solving algorithmic problems on LeetCode and staying up-to-date with the 
              latest trends in web development. I'm constantly learning and improving my skills to deliver high-quality work.
            </p>
            
            <div className="mt-8">
              <h3 className="font-heading font-medium text-lg mb-3">Contact Information:</h3>
              <ul className="space-y-2 text-slate">
                <li className="flex items-center gap-2">
                  <span className="font-medium">Location:</span> Siraha, Sagarmatha, Nepal
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Phone:</span> +91-9693520671
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Email:</span> 
                  <a href="mailto:mail" className="text-blue hover:underline">Mail</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-navy-light rounded-lg p-6 shadow-lg border border-border">
              <div className="w-full aspect-square bg-slate-100 dark:bg-navy rounded-md mb-4 overflow-hidden">
                <img 
                  src="public/lovable-uploads/bbdeb044-32c6-42f2-aef3-a86bb1d24418.png" 
                  alt="Rahul Kumar Yadav" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-2 text-center">
                <h3 className="font-heading font-medium">Rahul Kumar Yadav</h3>
                <p className="text-sm text-slate">Frontend Developer</p>
              </div>
              
              <div className="mt-4 flex justify-center space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-blue hover:text-white rounded-full p-2 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-blue hover:text-white rounded-full p-2 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="mailto:mail" 
                  className="bg-secondary hover:bg-blue hover:text-white rounded-full p-2 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
