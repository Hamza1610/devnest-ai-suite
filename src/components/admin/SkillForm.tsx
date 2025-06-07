
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';

interface SkillFormProps {
  skill?: any;
  onClose: () => void;
  onSave: () => void;
}

const SkillForm: React.FC<SkillFormProps> = ({ skill, onClose, onSave }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    level: 50,
    category: 'Frontend'
  });

  useEffect(() => {
    if (skill) {
      setFormData({
        name: skill.name || '',
        level: skill.level || 50,
        category: skill.category || 'Frontend'
      });
    }
  }, [skill]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Skill name is required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call
    toast({
      title: skill ? "Skill Updated!" : "Skill Added!",
      description: `${formData.name} has been ${skill ? 'updated' : 'added'} successfully.`
    });

    onSave();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{skill ? 'Edit Skill' : 'Add New Skill'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Skill Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="e.g., React, JavaScript, Python"
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Programming">Programming</SelectItem>
                <SelectItem value="Database">Database</SelectItem>
                <SelectItem value="DevOps">DevOps</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Tools">Tools</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="level">Skill Level: {formData.level}%</Label>
            <Slider
              value={[formData.level]}
              onValueChange={(value) => setFormData(prev => ({ ...prev, level: value[0] }))}
              max={100}
              step={5}
              className="mt-2"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {skill ? 'Update' : 'Add'} Skill
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SkillForm;
