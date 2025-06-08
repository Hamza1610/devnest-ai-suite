import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Download, RefreshCw, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CoverLetterBuilder = () => {
  const [formData, setFormData] = useState({
    roleTitle: '',
    targetCompany: '',
    hiringManager: '',
    jobDescription: '',
    personalMotivation: ''
  });
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  // Function to generate personalized cover letter when generate button is clicked
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
    
    // TODO: Integrate with Gemini AI API to generate compelling, personalized cover letter
    // The API should analyze job requirements and create tailored content that highlights relevant experience
    setTimeout(() => {
      const sampleCoverLetter = `[Your Name]
[Your Address]
[City, State, ZIP Code]
[Your Email]
[Your Phone Number]

[Date]

${formData.hiringManager || '[Hiring Manager Name]'}
${formData.targetCompany}
[Company Address]

Dear ${formData.hiringManager || 'Hiring Manager'},

I am writing to express my strong interest in the ${formData.roleTitle} position at ${formData.targetCompany}. With my extensive background in software development and proven track record of delivering high-quality solutions, I am confident that I would be a valuable addition to your team.

${formData.personalMotivation || 'What particularly excites me about this opportunity is the chance to work with cutting-edge technologies and contribute to innovative projects that make a real impact. Your company\'s commitment to excellence and innovation aligns perfectly with my professional values and career aspirations.'}

In my previous roles, I have:
• Led cross-functional teams to deliver complex software projects on time and within budget
• Developed scalable applications that improved user experience and business efficiency
• Mentored junior developers and fostered a collaborative team environment
• Implemented best practices for code quality, testing, and deployment

${formData.jobDescription ? 'Based on the job description, I understand you are looking for someone who can contribute to your development team immediately. My experience with modern web technologies and agile methodologies makes me well-suited for this role.' : ''}

I am excited about the opportunity to bring my passion for technology and problem-solving to ${formData.targetCompany}. I would welcome the chance to discuss how my skills and experience can contribute to your team's continued success.

Thank you for considering my application. I look forward to hearing from you soon.

Sincerely,
[Your Name]

---
This cover letter is personalized for the ${formData.roleTitle} position at ${formData.targetCompany} and emphasizes relevant qualifications and enthusiasm for the role.`;

      setGeneratedCoverLetter(sampleCoverLetter);
      setIsGenerating(false);
      
      toast({
        title: "Cover Letter Generated",
        description: "Your personalized cover letter has been successfully generated!",
      });
    }, 3000);
  };

  // Function to copy generated cover letter to clipboard when copy button is clicked
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCoverLetter);
    toast({
      title: "Copied to Clipboard",
      description: "Cover letter content has been copied to your clipboard.",
    });
  };

  // Function to download cover letter as text file when download button is clicked
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedCoverLetter], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `cover_letter_${formData.roleTitle.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Cover Letter Downloaded",
      description: "Your cover letter has been downloaded successfully.",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-gradient">Cover Letter Builder</CardTitle>
          <CardDescription>
            Create compelling, personalized cover letters
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
            <Label htmlFor="manager">Hiring Manager (Optional)</Label>
            <Input
              id="manager"
              placeholder="e.g., John Smith"
              value={formData.hiringManager}
              onChange={(e) => setFormData(prev => ({ ...prev, hiringManager: e.target.value }))}
            />
          </div>

          <div>
            <Label htmlFor="job-desc">Job Description (Optional)</Label>
            <Textarea
              id="job-desc"
              placeholder="Paste the job description here for better personalization..."
              value={formData.jobDescription}
              onChange={(e) => setFormData(prev => ({ ...prev, jobDescription: e.target.value }))}
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="motivation">Personal Motivation</Label>
            <Textarea
              id="motivation"
              placeholder="Why are you interested in this role and company? What excites you about this opportunity?"
              value={formData.personalMotivation}
              onChange={(e) => setFormData(prev => ({ ...prev, personalMotivation: e.target.value }))}
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
                Generating Cover Letter...
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 mr-2" />
                Generate Cover Letter
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Generated Cover Letter</CardTitle>
          <CardDescription>
            Your AI-crafted cover letter will appear here
          </CardDescription>
        </CardHeader>
        <CardContent>
          {generatedCoverLetter ? (
            <div className="space-y-4">
              <Textarea
                value={generatedCoverLetter}
                onChange={(e) => setGeneratedCoverLetter(e.target.value)}
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
              <p>Generate a cover letter to see it here</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CoverLetterBuilder;
