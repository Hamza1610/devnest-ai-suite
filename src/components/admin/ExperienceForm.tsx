
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ExperienceFormProps {
  experience?: any;
  onClose: () => void;
  onSave: () => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ experience, onClose, onSave }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    duration: '',
    description: '',
    technologies: ''
  });

  useEffect(() => {
    if (experience) {
      setFormData({
        company: experience.company || '',
        position: experience.position || '',
        duration: experience.duration || '',
        description: experience.description || '',
        technologies: Array.isArray(experience.technologies) ? experience.technologies.join(', ') : ''
      });
    }
  }, [experience]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.company.trim() || !formData.position.trim()) {
      toast({
        title: "Validation Error",
        description: "Company and position are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call
    toast({
      title: experience ? "Experience Updated!" : "Experience Added!",
      description: `${formData.position} at ${formData.company} has been ${experience ? 'updated' : 'added'} successfully.`
    });

    onSave();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{experience ? 'Edit Experience' : 'Add New Experience'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              placeholder="e.g., Google, Microsoft, Startup Inc."
            />
          </div>

          <div>
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              value={formData.position}
              onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
              placeholder="e.g., Senior Frontend Developer"
            />
          </div>

          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
              placeholder="e.g., Jan 2022 - Present"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe your role, responsibilities, and achievements..."
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="technologies">Technologies (comma-separated)</Label>
            <Input
              id="technologies"
              value={formData.technologies}
              onChange={(e) => setFormData(prev => ({ ...prev, technologies: e.target.value }))}
              placeholder="e.g., React, TypeScript, Node.js, AWS"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {experience ? 'Update' : 'Add'} Experience
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceForm;
