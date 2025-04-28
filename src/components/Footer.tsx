
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-navy-dark text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Rahul<span className="text-blue">.dev</span></h3>
            <p className="text-slate-light max-w-xs">
              Frontend developer specializing in building exceptional digital experiences with modern web technologies.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-light hover:text-blue transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#about" className="text-slate-light hover:text-blue transition-colors duration-200">About</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-light hover:text-blue transition-colors duration-200">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-light hover:text-blue transition-colors duration-200">Projects</a>
              </li>
              <li>
                <a href="#education" className="text-slate-light hover:text-blue transition-colors duration-200">Education</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-light hover:text-blue transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-blue">
                  <Mail size={16} />
                </span>
                <a href="mailto:mail" className="text-slate-light hover:text-blue transition-colors duration-200">
                  Mail
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue">
                  <Github size={16} />
                </span>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-blue transition-colors duration-200"
                >
                  Github
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue">
                  <Linkedin size={16} />
                </span>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-blue transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-light text-sm">
            © {new Date().getFullYear()} Rahul Kumar Yadav. All rights reserved.
          </p>
          <p className="text-slate-light text-sm mt-2 md:mt-0">
            Designed & Built with 💙
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
