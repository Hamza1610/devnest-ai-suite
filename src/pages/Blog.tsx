
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, Clock, User, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock blog data - replace with real API calls
const mockBlogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Explore the best practices for building scalable web applications using React and TypeScript. Learn about component architecture, state management, and testing strategies.",
    content: "Full blog content here...",
    author: "DevNest",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Web Development"]
  },
  {
    id: 2,
    title: "The Future of AI in Software Development",
    excerpt: "Discover how artificial intelligence is transforming the software development landscape and what it means for developers.",
    content: "Full blog content here...",
    author: "DevNest",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    tags: ["AI", "Machine Learning", "Software Development"]
  },
  {
    id: 3,
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A comprehensive guide to modern CSS layout techniques. Learn when to use Grid vs Flexbox and how to create responsive designs.",
    content: "Full blog content here...",
    author: "DevNest",
    publishedAt: "2024-01-05",
    readTime: "15 min read",
    tags: ["CSS", "Web Design", "Frontend"]
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredPosts = mockBlogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCreatePost = () => {
    navigate('/blog/create');
  };

  const handlePostClick = (id: number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Header */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              DevNest Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tutorials, and thoughts on modern web development
            </p>
            
            {/* Search and Create */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button onClick={handleCreatePost} className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Create Post
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="glass-effect p-6 rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-300"
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
