
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Passionate developer with a love for creating innovative solutions 
            and exploring the latest in web technologies and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <div className="glass-effect p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                Started my coding journey 3 years ago with a simple "Hello World" 
                and haven't looked back since. What began as curiosity has evolved 
                into a passion for creating digital experiences that matter.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                I specialize in full-stack development with a particular interest 
                in modern JavaScript frameworks, cloud technologies, and AI integration. 
                Always eager to learn and take on new challenges.
              </p>
            </div>

            <div className="glass-effect p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">What I Do</h3>
              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Frontend Development (React, Next.js, TypeScript)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Backend Development (Node.js, Python, PostgreSQL)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>AI Integration & Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Cloud Deployment & DevOps</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h4 className="text-base md:text-lg font-semibold mb-3 text-primary">Education</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm md:text-base font-medium">Computer Science, BS</h5>
                    <p className="text-xs md:text-sm text-muted-foreground">Stanford University • 2020-2024</p>
                  </div>
                  <div>
                    <h5 className="text-sm md:text-base font-medium">Full Stack Web Development</h5>
                    <p className="text-xs md:text-sm text-muted-foreground">freeCodeCamp • 2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h4 className="text-base md:text-lg font-semibold mb-3 text-primary">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {['AI & ML', 'Open Source', 'Photography', 'Gaming', 'Music Production', 'Tech Blogging'].map((interest) => (
                    <span key={interest} className="px-2 md:px-3 py-1 bg-primary/20 text-primary rounded-full text-xs md:text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h4 className="text-base md:text-lg font-semibold mb-3 text-primary">Fun Facts</h4>
                <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                  <li>☕ Can't code without coffee</li>
                  <li>🌙 Night owl - best coding happens after 10 PM</li>
                  <li>🎵 Listen to lo-fi while coding</li>
                  <li>🚀 Dream of contributing to space tech</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
