import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description: "Smart task management app with AI-driven priority suggestions and automated scheduling. Built with Next.js and OpenAI API.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Social Media Analytics",
      description: "Dashboard for analyzing social media performance across multiple platforms with automated reporting.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Python", "FastAPI", "Redis", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Beautiful weather app with 7-day forecasts, interactive maps, and location-based recommendations.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Expo", "Weather API", "Maps SDK"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Code Snippet Manager",
      description: "Organize and share code snippets with syntax highlighting, tagging, and collaborative features.",
      image: "/placeholder.svg",
      technologies: ["Svelte", "Supabase", "Prism.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Fitness Tracker API",
      description: "RESTful API for fitness tracking with user authentication, workout logging, and progress analytics.",
      image: "/placeholder.svg",
      technologies: ["Express.js", "JWT", "MySQL", "Docker", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A selection of projects that showcase my skills in full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="glass-effect border-primary/20 group hover:glow-effect transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-t-lg flex items-center justify-center">
                <div className="text-4xl md:text-6xl opacity-50">🚀</div>
              </div>
              <CardHeader className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-lg md:text-xl text-primary">{project.title}</CardTitle>
                  <Badge variant="secondary" className="bg-primary/20 text-primary self-start sm:self-center">Featured</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30 text-primary text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-sm">
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-sm">
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">
            Other <span className="text-gradient">Projects</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="glass-effect border-primary/20 group hover:scale-105 transition-all duration-300">
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-base md:text-lg text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs border-primary text-primary hover:bg-primary hover:text-white flex-1">
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs border-primary text-primary hover:bg-primary hover:text-white flex-1">
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
