import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Senior Full Stack Developer",
      duration: "2023 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of AI-powered analytics platform serving 10K+ users",
        "Implemented microservices architecture reducing API response time by 40%",
        "Mentored junior developers and established code review best practices",
        "Collaborated with product team to deliver features ahead of schedule"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "OpenAI API"],
      type: "Full-time"
    },
    {
      company: "StartupXYZ",
      role: "Frontend Developer",
      duration: "2022 - 2023",
      location: "Remote",
      description: [
        "Built responsive web applications using React and TypeScript",
        "Optimized application performance resulting in 60% faster load times",
        "Integrated third-party APIs and implemented real-time features",
        "Worked closely with design team to create pixel-perfect UIs"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Socket.io"],
      type: "Full-time"
    },
    {
      company: "Digital Agency Pro",
      role: "Web Developer Intern",
      duration: "2021 - 2022",
      location: "New York, NY",
      description: [
        "Developed custom WordPress themes for client websites",
        "Assisted in migrating legacy applications to modern frameworks",
        "Participated in client meetings and project planning sessions",
        "Gained experience in project management and client communication"
      ],
      technologies: ["WordPress", "JavaScript", "PHP", "MySQL", "HTML/CSS"],
      type: "Internship"
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      duration: "2020 - Present",
      location: "Remote",
      description: [
        "Delivered 20+ custom web applications for various clients",
        "Specialized in e-commerce platforms and business automation tools",
        "Maintained long-term client relationships with 95% satisfaction rate",
        "Managed projects from conception to deployment and maintenance"
      ],
      technologies: ["React", "Next.js", "Node.js", "Stripe", "Prisma", "Vercel"],
      type: "Freelance"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-green-500/20 text-green-400";
      case "Internship": return "bg-blue-500/20 text-blue-400";
      case "Freelance": return "bg-purple-500/20 text-purple-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section id="experience" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            My professional journey through various roles and projects, 
            building expertise in full-stack development and team collaboration.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-effect border-primary/20 group hover:glow-effect transition-all duration-300">
              <CardHeader className="p-4 md:p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-xl text-primary mb-2">{exp.role}</CardTitle>
                      <div className="flex flex-col gap-1 text-sm md:text-base text-muted-foreground">
                        <span className="font-semibold">{exp.company}</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 sm:text-right">
                      <Badge className={`${getTypeColor(exp.type)} border-none text-xs md:text-sm self-start sm:self-end`}>
                        {exp.type}
                      </Badge>
                      <span className="text-xs md:text-sm text-muted-foreground">{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 p-4 md:p-6 pt-0">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div>
                  <h4 className="text-xs md:text-sm font-semibold text-primary mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="glass-effect p-6 md:p-8 rounded-lg inline-block max-w-md mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Want to know more?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6">Download my full resume for detailed information about my experience and projects.</p>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base">
              Download Resume (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
