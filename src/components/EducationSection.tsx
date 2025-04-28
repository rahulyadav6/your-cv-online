
import { School } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
}

interface Certificate {
  title: string;
  issuer?: string;
  duration: string;
  skills: string[];
  link?: string;
}

interface Achievement {
  title: string;
  year: string;
  description: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      institution: 'Lovely Professional University',
      degree: 'Computer Science and Engineering',
      duration: '2022 - Present',
      location: 'Jalandhar, Punjab',
      gpa: '7.3'
    },
    {
      institution: 'Janasewa Secondary School',
      degree: '12th Technical and vocational with science',
      duration: '2019 - 2021',
      location: 'Kathmandu, Nepal',
      gpa: '8.78'
    }
  ];

  const certificates: Certificate[] = [
    {
      title: 'Cloud Computing',
      issuer: 'AWS',
      duration: 'Nov 2022 - Feb 2023',
      skills: ['AWS architecture', 'AWS Cloud', 'AWS Core Services', 'AWS Pricing', 'AWS Support'],
      link: '#'
    },
    {
      title: 'Introduction to Frontend Development',
      issuer: 'Coursera',
      duration: 'Mar 2023 - Mar 2023',
      skills: ['HTML', 'CSS', 'JS', 'React'],
      link: '#'
    }
  ];

  const achievements: Achievement[] = [
    {
      title: '100 Days of code on leetcode',
      year: '2023',
      description: 'Completed 100 days of coding on leetcode, enhancing problem-solving skills and algorithmic thinking.'
    },
    {
      title: 'Academic Excellence Award in 12th',
      year: '2021',
      description: 'Received recognition for outstanding academic performance in 12th grade with a CGPA of 8.78.'
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <School className="text-blue" size={24} />
          <h2 className="section-heading">Education & Certificates</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="font-heading text-xl mb-4 text-navy-dark dark:text-slate-lighter">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-blue">
                  <CardHeader>
                    <CardTitle className="text-navy-dark dark:text-slate-lighter">{edu.institution}</CardTitle>
                    <CardDescription>{edu.duration} | {edu.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate">{edu.degree}</p>
                    {edu.gpa && <p className="text-slate mt-2">CGPA: {edu.gpa}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h3 className="font-heading text-xl mt-10 mb-4 text-navy-dark dark:text-slate-lighter">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white dark:bg-navy-light p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-navy-dark dark:text-slate-lighter">{achievement.title}</h4>
                    <span className="text-blue text-sm font-mono">{achievement.year}</span>
                  </div>
                  <p className="text-slate text-sm mt-2">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-xl mb-4 text-navy-dark dark:text-slate-lighter">Certificates</h3>
            <div className="space-y-6">
              {certificates.map((certificate, index) => (
                <div key={index} className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-navy-dark dark:text-slate-lighter">{certificate.title}</h4>
                      {certificate.issuer && <p className="text-sm text-slate">{certificate.issuer}</p>}
                    </div>
                    <span className="text-blue text-sm font-mono">{certificate.duration}</span>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium mb-2">Skills Learned:</h5>
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.map((skill, idx) => (
                        <span key={idx} className="bg-secondary/70 px-2 py-1 rounded text-xs font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {certificate.link && (
                    <a 
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue text-sm hover:underline mt-2 inline-block"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
