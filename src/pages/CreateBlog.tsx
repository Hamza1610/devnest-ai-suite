
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save, Wand2, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreateBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    tags: '',
    topic: '',
    tone: 'professional',
    length: '1000'
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [isRefining, setIsRefining] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateBlogContent = async () => {
    if (!formData.topic) {
      toast({
        title: "Topic Required",
        description: "Please enter a blog topic before generating content.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation - replace with actual Gemini API call
    setTimeout(() => {
      const generatedContent = `
        <h2>Introduction</h2>
        <p>This is AI-generated content about ${formData.topic}. The tone is ${formData.tone} and the target length is ${formData.length} words.</p>
        
        <h2>Main Content</h2>
        <p>Here's where the detailed content about ${formData.topic} would be generated based on your specifications.</p>
        
        <h2>Key Points</h2>
        <ul>
          <li>Important point about ${formData.topic}</li>
          <li>Another relevant insight</li>
          <li>Practical application or example</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>To summarize, ${formData.topic} is an important topic that deserves attention. This ${formData.tone} overview provides valuable insights.</p>
      `;

      setFormData(prev => ({
        ...prev,
        title: `A ${formData.tone} Guide to ${formData.topic}`,
        excerpt: `Explore ${formData.topic} in this comprehensive ${formData.tone} guide.`,
        content: generatedContent
      }));

      setIsGenerating(false);
      toast({
        title: "Content Generated!",
        description: "AI has generated your blog content. You can now edit and refine it."
      });
    }, 2000);
  };

  const refineBlogContent = async () => {
    if (!formData.content) {
      toast({
        title: "No Content to Refine",
        description: "Please generate or add content first.",
        variant: "destructive"
      });
      return;
    }

    setIsRefining(true);
    
    // Simulate AI refinement - replace with actual Gemini API call
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        content: prev.content + '\n\n<p><em>Content has been refined by AI for better clarity and flow.</em></p>'
      }));

      setIsRefining(false);
      toast({
        title: "Content Refined!",
        description: "AI has enhanced your blog content."
      });
    }, 1500);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.content) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in title and content before saving.",
        variant: "destructive"
      });
      return;
    }

    // Simulate saving - replace with actual API call
    toast({
      title: isEditing ? "Post Updated!" : "Post Created!",
      description: `Your blog post has been ${isEditing ? 'updated' : 'created'} successfully.`
    });

    navigate('/blog');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <div className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate('/blog')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
              <h1 className="text-3xl font-bold text-gradient">
                {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* AI Generation Panel */}
              <div className="glass-effect p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-primary" />
                  AI Content Generator
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="topic">Blog Topic</Label>
                    <Input
                      id="topic"
                      placeholder="e.g., React Best Practices"
                      value={formData.topic}
                      onChange={(e) => handleInputChange('topic', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="tone">Tone</Label>
                    <Select value={formData.tone} onValueChange={(value) => handleInputChange('tone', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="length">Target Length</Label>
                    <Select value={formData.length} onValueChange={(value) => handleInputChange('length', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500">500 words</SelectItem>
                        <SelectItem value="1000">1000 words</SelectItem>
                        <SelectItem value="1500">1500 words</SelectItem>
                        <SelectItem value="2000">2000 words</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={generateBlogContent}
                      disabled={isGenerating}
                      className="flex-1"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-4 h-4 mr-2" />
                          Generate Content
                        </>
                      )}
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={refineBlogContent}
                      disabled={isRefining || !formData.content}
                    >
                      {isRefining ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        'Refine'
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Blog Form */}
              <div className="glass-effect p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Blog Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter blog title..."
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      placeholder="Brief description of the blog post..."
                      rows={3}
                      value={formData.excerpt}
                      onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      placeholder="React, TypeScript, Web Development"
                      value={formData.tags}
                      onChange={(e) => handleInputChange('tags', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Blog content (supports HTML)..."
                      rows={12}
                      value={formData.content}
                      onChange={(e) => handleInputChange('content', e.target.value)}
                    />
                  </div>

                  <Button onClick={handleSave} className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    {isEditing ? 'Update Post' : 'Create Post'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
