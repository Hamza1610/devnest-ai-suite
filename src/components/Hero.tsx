
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-6s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Alex Chen</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Full Stack Developer & AI Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building innovative web applications with modern technologies. 
            Specializing in React, Node.js, and AI integration to create 
            exceptional digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg animate-pulse-glow"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
          >
            Download Resume
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-2">3+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
            <p className="text-muted-foreground">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
