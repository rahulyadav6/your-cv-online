
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
    
    const position = window.scrollY + 100;
    
    for (const sectionId of sections.reverse()) {
      const section = document.getElementById(sectionId);
      if (section && section.offsetTop <= position) {
        setActiveSection(sectionId);
        break;
      }
    }

    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Education', section: 'education' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md dark:bg-navy-dark/90' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-blue font-bold text-xl md:text-2xl font-heading"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Rahul<span className="text-navy-dark dark:text-white">.dev</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              className={`nav-link ${activeSection === link.section ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.section);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-navy-dark shadow-lg">
          <nav className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.section}
                href={`#${link.section}`}
                className={`py-3 border-b border-border ${
                  activeSection === link.section ? 'text-blue' : 'text-navy-dark dark:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.section);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
