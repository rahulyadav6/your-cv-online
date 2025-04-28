
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  duration: string;
  technologies: string[];
  features: string[];
  codeLink?: string;
  liveLink?: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: 'Modern Landing Page',
      description: 'Designed a Modern Landing Page using React and Vite, showcasing proficiency in building responsive and dynamic user interfaces.',
      duration: 'Mar 2025 - Mar 2025',
      technologies: ['React.js', 'TailwindCSS'],
      features: [
        'Multi-Section UI: Cleanly organized sections for Home, About, Skills, Projects, and Contact.',
        'Dynamic Animations: Smooth scroll transitions and interactive hover effects for enhanced UX.',
        'Responsive Design: Mobile-first layout with CSS Flexbox/Grid and media queries.'
      ],
      codeLink: '#',
      liveLink: '#'
    },
    {
      title: 'Full Stack Todo Web App',
      description: 'Developed a Full-Stack To-Do List Application utilizing the MERN stack, showcasing comprehensive skills in both front-end and back-end development.',
      duration: 'Feb 2025 - Feb 2025',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TailwindCSS'],
      features: [
        'User authentication with secure login and registration',
        'Task management with CRUD operations',
        'Real-time updates for a seamless user experience',
        'Responsive design for mobile and desktop'
      ],
      codeLink: '#',
      liveLink: '#'
    },
    {
      title: 'Admin Panel',
      description: 'Developed a Full-Stack Admin Panel using the MERN stack, demonstrating expertise in building comprehensive administrative interfaces.',
      duration: 'Mar 2025 - Mar 2025',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TailwindCSS'],
      features: [
        'Integrated both light and dark modes for enhanced user experience',
        'Fully responsive design for seamless accessibility across various devices',
        'Advanced data visualization and management tools',
        'User role-based access control system'
      ],
      codeLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-slate-50/50 dark:bg-navy-light/10">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="text-blue" size={24} />
          <h2 className="section-heading">Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <CardHeader>
                <CardTitle className="text-navy-dark dark:text-slate-lighter">{project.title}</CardTitle>
                <CardDescription>{project.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-secondary/70 px-2 py-1 rounded text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="list-disc pl-4 text-sm text-slate space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.codeLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                )}
                {project.liveLink && (
                  <Button size="sm" className="bg-blue hover:bg-blue-dark" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
