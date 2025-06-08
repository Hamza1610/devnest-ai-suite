import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "HTML/CSS", level: 98 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Express.js", level: 90 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "OpenAI API", level: 88 },
        { name: "LangChain", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Python ML", level: 82 },
        { name: "NLP", level: 78 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Vercel", level: 92 },
        { name: "CI/CD", level: 78 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Figma", "Postman", "Notion", "Slack", "Linear", 
    "Supabase", "Prisma", "Stripe", "Firebase", "Cloudinary", "Sanity"
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A comprehensive overview of my technical skills and the tools I use 
            to bring ideas to life.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="glass-effect border-primary/20 group hover:glow-effect transition-all duration-300">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center gap-3 text-primary text-lg md:text-xl">
                  <span className="text-xl md:text-2xl">{category.icon}</span>
                  <span className="text-sm sm:text-base md:text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-primary">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tools.map((tool) => (
              <span 
                key={tool} 
                className="px-3 md:px-4 py-1 md:py-2 glass-effect rounded-full text-xs md:text-sm font-medium text-foreground hover:text-primary hover:glow-effect transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center glass-effect p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center glass-effect p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center glass-effect p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center glass-effect p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-xs md:text-sm text-muted-foreground">Learning Mode</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
