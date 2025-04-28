
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/RahulKumarYadav_CV.pdf'; // Make sure to add your CV to the public folder
    link.download = 'RahulKumarYadav_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-blue mb-2 font-mono">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy-dark dark:text-slate-lighter">
            Rahul Kumar Yadav
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-slate dark:text-slate-light">
            Frontend Developer & UI Engineer
          </h2>
          <p className="text-slate max-w-xl mb-8 text-lg">
            I specialize in building exceptional digital experiences with modern web technologies. 
            Currently focused on creating accessible, responsive web applications with React and TailwindCSS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToProjects}
              className="bg-blue hover:bg-blue-dark text-white px-6 py-4 h-auto"
            >
              View My Projects
            </Button>
            <Button 
              onClick={handleDownloadCV} 
              variant="outline" 
              className="border-blue text-blue hover:text-blue-dark px-6 py-4 h-auto"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
            <Button 
              onClick={scrollToContact} 
              variant="outline" 
              className="border-blue text-blue hover:text-blue-dark px-6 py-4 h-auto"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate hover:text-blue transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm font-mono mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
