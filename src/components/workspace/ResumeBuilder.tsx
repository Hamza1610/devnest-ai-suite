import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Download, RefreshCw, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    roleTitle: '',
    targetCompany: '',
    jobDescription: '',
    personalHighlights: ''
  });
  const [generatedResume, setGeneratedResume] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  // Function to generate ATS-optimized resume tailored to specific role when generate button is clicked
  const handleGenerate = async () => {
    if (!formData.roleTitle || !formData.targetCompany) {
      toast({
        title: "Missing Information",
        description: "Please fill in the role title and target company fields.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // TODO: Integrate with Gemini AI API to generate tailored resume content
    // The API should analyze job description and create ATS-friendly resume format
    setTimeout(() => {
      const sampleResume = `[Your Name]
[Your Email] | [Your Phone] | [Your Location]
[LinkedIn Profile] | [Portfolio Website]

PROFESSIONAL SUMMARY
${formData.personalHighlights || 'Experienced professional with a strong background in technology and innovation. Proven track record of delivering high-quality solutions and driving business growth.'}

TARGET ROLE: ${formData.roleTitle} at ${formData.targetCompany}

EXPERIENCE
Senior Software Developer | Previous Company | 2020 - Present
• Led development of scalable web applications using React and Node.js
• Collaborated with cross-functional teams to deliver projects on time
• Mentored junior developers and improved team productivity by 30%

Software Developer | Another Company | 2018 - 2020
• Developed and maintained web applications using modern frameworks
• Implemented best practices for code quality and testing
• Participated in agile development processes

SKILLS
• Programming Languages: JavaScript, TypeScript, Python, Java
• Frontend: React, Vue.js, HTML5, CSS3, Tailwind CSS
• Backend: Node.js, Express, Django, Spring Boot
• Databases: PostgreSQL, MongoDB, Redis
• Tools: Git, Docker, AWS, CI/CD

EDUCATION
Bachelor of Science in Computer Science
University Name | Graduation Year

This resume is tailored for the ${formData.roleTitle} position and optimized for ATS systems.`;

      setGeneratedResume(sampleResume);
      setIsGenerating(false);
      
      toast({
        title: "Resume Generated",
        description: "Your tailored resume has been successfully generated!",
      });
    }, 3000);
  };

  // Function to copy generated resume content to clipboard when copy button is clicked
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedResume);
    toast({
      title: "Copied to Clipboard",
      description: "Resume content has been copied to your clipboard.",
    });
  };

  // Function to download resume as text file when download button is clicked
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedResume], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `resume_${formData.roleTitle.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded successfully.",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-gradient">Resume Builder</CardTitle>
          <CardDescription>
            Create ATS-friendly resumes tailored to specific roles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="role">Role Title</Label>
            <Input
              id="role"
              placeholder="e.g., Senior Software Engineer"
              value={formData.roleTitle}
              onChange={(e) => setFormData(prev => ({ ...prev, roleTitle: e.target.value }))}
            />
          </div>

          <div>
            <Label htmlFor="company">Target Company</Label>
            <Input
              id="company"
              placeholder="e.g., Google, Microsoft, Startup Inc."
              value={formData.targetCompany}
              onChange={(e) => setFormData(prev => ({ ...prev, targetCompany: e.target.value }))}
            />
          </div>

          <div>
            <Label htmlFor="job-desc">Job Description (Optional)</Label>
            <Textarea
              id="job-desc"
              placeholder="Paste the job description here to tailor your resume..."
              value={formData.jobDescription}
              onChange={(e) => setFormData(prev => ({ ...prev, jobDescription: e.target.value }))}
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="highlights">Personal Highlights</Label>
            <Textarea
              id="highlights"
              placeholder="Your key achievements, skills, and experiences..."
              value={formData.personalHighlights}
              onChange={(e) => setFormData(prev => ({ ...prev, personalHighlights: e.target.value }))}
              rows={3}
            />
          </div>

          <Button 
            onClick={handleGenerate} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Generating Resume...
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 mr-2" />
                Generate Resume
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Generated Resume</CardTitle>
          <CardDescription>
            Your AI-tailored resume will appear here
          </CardDescription>
        </CardHeader>
        <CardContent>
          {generatedResume ? (
            <div className="space-y-4">
              <Textarea
                value={generatedResume}
                onChange={(e) => setGeneratedResume(e.target.value)}
                rows={20}
                className="font-mono text-sm"
              />
              <div className="flex gap-2">
                <Button onClick={handleCopy} variant="outline" className="flex-1">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                <Button onClick={handleDownload} variant="outline" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button onClick={handleGenerate} variant="outline" className="flex-1">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refine
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Generate a resume to see it here</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeBuilder;
