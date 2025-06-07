
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Settings, Plus, Edit, Trash2, FileText, User, Briefcase, GraduationCap, Code, Eye } from 'lucide-react';
import SkillForm from '@/components/admin/SkillForm';
import ExperienceForm from '@/components/admin/ExperienceForm';
import EducationForm from '@/components/admin/EducationForm';
import ProjectForm from '@/components/admin/ProjectForm';

// Mock data - replace with real API calls
const mockData = {
  skills: [
    { id: 1, name: 'React', level: 90, category: 'Frontend' },
    { id: 2, name: 'TypeScript', level: 85, category: 'Programming' },
    { id: 3, name: 'Node.js', level: 80, category: 'Backend' }
  ],
  experience: [
    {
      id: 1,
      company: 'Tech Corp',
      position: 'Senior Developer',
      duration: '2022 - Present',
      description: 'Leading development of modern web applications',
      technologies: ['React', 'TypeScript', 'AWS']
    }
  ],
  education: [
    {
      id: 1,
      institution: 'University of Technology',
      degree: 'Bachelor of Computer Science',
      year: '2020',
      description: 'Specialized in software engineering and web development'
    }
  ],
  projects: [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      image: '/placeholder.svg'
    }
  ]
};

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formType, setFormType] = useState<string | null>(null);

  const handleEdit = (item: any, type: string) => {
    setEditingItem(item);
    setFormType(type);
  };

  const handleAdd = (type: string) => {
    setEditingItem(null);
    setFormType(type);
  };

  const handleDelete = (id: number, type: string) => {
    // Simulate delete - replace with actual API call
    console.log(`Deleting ${type} with id ${id}`);
  };

  const handleFormClose = () => {
    setEditingItem(null);
    setFormType(null);
  };

  const renderOverview = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Skills</CardTitle>
          <Code className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockData.skills.length}</div>
          <p className="text-xs text-muted-foreground">Technical skills</p>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Experience</CardTitle>
          <Briefcase className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockData.experience.length}</div>
          <p className="text-xs text-muted-foreground">Work experiences</p>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Education</CardTitle>
          <GraduationCap className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockData.education.length}</div>
          <p className="text-xs text-muted-foreground">Educational background</p>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Projects</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockData.projects.length}</div>
          <p className="text-xs text-muted-foreground">Portfolio projects</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderDataTable = (data: any[], type: string, columns: string[]) => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold capitalize">{type}</h3>
        <Button onClick={() => handleAdd(type)} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add {type.slice(0, -1)}
        </Button>
      </div>
      
      <div className="space-y-2">
        {data.map((item) => (
          <Card key={item.id} className="glass-effect">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  {type === 'skills' && (
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{item.category}</Badge>
                        <span className="text-sm text-muted-foreground">{item.level}%</span>
                      </div>
                    </div>
                  )}
                  
                  {type === 'experience' && (
                    <div>
                      <h4 className="font-medium">{item.position}</h4>
                      <p className="text-sm text-muted-foreground">{item.company} • {item.duration}</p>
                      <p className="text-sm mt-1">{item.description}</p>
                      <div className="flex gap-1 mt-2">
                        {item.technologies.map((tech: string) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {type === 'education' && (
                    <div>
                      <h4 className="font-medium">{item.degree}</h4>
                      <p className="text-sm text-muted-foreground">{item.institution} • {item.year}</p>
                      <p className="text-sm mt-1">{item.description}</p>
                    </div>
                  )}
                  
                  {type === 'projects' && (
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      <div className="flex gap-1 mt-2">
                        {item.technologies.map((tech: string) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-1 ml-4">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(item, type)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => handleDelete(item.id, type)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <div className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gradient">Admin Dashboard</h1>
                <p className="text-muted-foreground">Manage your portfolio content</p>
              </div>
              <Button variant="outline" onClick={() => window.open('/', '_blank')}>
                <Eye className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                {renderOverview()}
              </TabsContent>

              <TabsContent value="skills" className="mt-6">
                {renderDataTable(mockData.skills, 'skills', ['name', 'level', 'category'])}
              </TabsContent>

              <TabsContent value="experience" className="mt-6">
                {renderDataTable(mockData.experience, 'experience', ['company', 'position', 'duration'])}
              </TabsContent>

              <TabsContent value="education" className="mt-6">
                {renderDataTable(mockData.education, 'education', ['institution', 'degree', 'year'])}
              </TabsContent>

              <TabsContent value="projects" className="mt-6">
                {renderDataTable(mockData.projects, 'projects', ['title', 'description', 'technologies'])}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Forms */}
      {formType === 'skills' && (
        <SkillForm
          skill={editingItem}
          onClose={handleFormClose}
          onSave={() => {
            handleFormClose();
            // Refresh data
          }}
        />
      )}
      
      {formType === 'experience' && (
        <ExperienceForm
          experience={editingItem}
          onClose={handleFormClose}
          onSave={() => {
            handleFormClose();
            // Refresh data
          }}
        />
      )}
      
      {formType === 'education' && (
        <EducationForm
          education={editingItem}
          onClose={handleFormClose}
          onSave={() => {
            handleFormClose();
            // Refresh data
          }}
        />
      )}
      
      {formType === 'projects' && (
        <ProjectForm
          project={editingItem}
          onClose={handleFormClose}
          onSave={() => {
            handleFormClose();
            // Refresh data
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default Admin;
