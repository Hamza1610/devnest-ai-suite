
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions 
            and exploring the latest in web technologies and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started my coding journey 3 years ago with a simple "Hello World" 
                and haven't looked back since. What began as curiosity has evolved 
                into a passion for creating digital experiences that matter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in full-stack development with a particular interest 
                in modern JavaScript frameworks, cloud technologies, and AI integration. 
                Always eager to learn and take on new challenges.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">What I Do</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Frontend Development (React, Next.js, TypeScript)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Backend Development (Node.js, Python, PostgreSQL)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  AI Integration & Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Cloud Deployment & DevOps
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary">Education</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Computer Science, BS</h5>
                    <p className="text-sm text-muted-foreground">Stanford University • 2020-2024</p>
                  </div>
                  <div>
                    <h5 className="font-medium">Full Stack Web Development</h5>
                    <p className="text-sm text-muted-foreground">freeCodeCamp • 2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {['AI & ML', 'Open Source', 'Photography', 'Gaming', 'Music Production', 'Tech Blogging'].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary">Fun Facts</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
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
