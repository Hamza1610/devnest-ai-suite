
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  // Function to scroll to projects section when "View My Work" is clicked
  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to download resume PDF when "Download Resume" button is clicked
  const handleDownloadResume = () => {
    // TODO: Replace with actual resume file URL
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Alex_Chen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 md:w-80 md:h-80 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-6s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Alex Chen</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 md:mb-6">
            Full Stack Developer & AI Enthusiast
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Building innovative web applications with modern technologies. 
            Specializing in React, Node.js, and AI integration to create 
            exceptional digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg animate-pulse-glow w-full sm:w-auto"
            onClick={handleViewWork}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg w-full sm:w-auto"
            onClick={handleDownloadResume}
          >
            Download Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="glass-effect p-4 md:p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">50+</h3>
            <p className="text-sm md:text-base text-muted-foreground">Projects Completed</p>
          </div>
          <div className="glass-effect p-4 md:p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">3+</h3>
            <p className="text-sm md:text-base text-muted-foreground">Years Experience</p>
          </div>
          <div className="glass-effect p-4 md:p-6 rounded-lg sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">15+</h3>
            <p className="text-sm md:text-base text-muted-foreground">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
