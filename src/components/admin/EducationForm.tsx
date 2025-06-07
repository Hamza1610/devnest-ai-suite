
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface EducationFormProps {
  education?: any;
  onClose: () => void;
  onSave: () => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ education, onClose, onSave }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    year: '',
    description: ''
  });

  useEffect(() => {
    if (education) {
      setFormData({
        institution: education.institution || '',
        degree: education.degree || '',
        year: education.year || '',
        description: education.description || ''
      });
    }
  }, [education]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.institution.trim() || !formData.degree.trim()) {
      toast({
        title: "Validation Error",
        description: "Institution and degree are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call
    toast({
      title: education ? "Education Updated!" : "Education Added!",
      description: `${formData.degree} from ${formData.institution} has been ${education ? 'updated' : 'added'} successfully.`
    });

    onSave();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{education ? 'Edit Education' : 'Add New Education'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="institution">Institution</Label>
            <Input
              id="institution"
              value={formData.institution}
              onChange={(e) => setFormData(prev => ({ ...prev, institution: e.target.value }))}
              placeholder="e.g., Stanford University, MIT"
            />
          </div>

          <div>
            <Label htmlFor="degree">Degree</Label>
            <Input
              id="degree"
              value={formData.degree}
              onChange={(e) => setFormData(prev => ({ ...prev, degree: e.target.value }))}
              placeholder="e.g., Bachelor of Computer Science"
            />
          </div>

          <div>
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              value={formData.year}
              onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
              placeholder="e.g., 2020, 2018-2022"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Additional details about your education..."
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {education ? 'Update' : 'Add'} Education
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EducationForm;
