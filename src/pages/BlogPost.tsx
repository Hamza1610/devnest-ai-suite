
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Edit } from 'lucide-react';

// Mock blog data - replace with real API calls
const mockBlogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Explore the best practices for building scalable web applications using React and TypeScript.",
    content: `
      <h2>Introduction</h2>
      <p>React and TypeScript have become the gold standard for building modern web applications. This combination provides developers with powerful tools for creating scalable, maintainable, and type-safe applications.</p>
      
      <h2>Getting Started</h2>
      <p>When starting a new React project with TypeScript, there are several key considerations to keep in mind:</p>
      <ul>
        <li>Project structure and organization</li>
        <li>Component architecture patterns</li>
        <li>State management strategies</li>
        <li>Testing methodologies</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Here are some essential best practices for React and TypeScript development:</p>
      <ol>
        <li><strong>Type Safety:</strong> Always define proper interfaces and types</li>
        <li><strong>Component Composition:</strong> Favor composition over inheritance</li>
        <li><strong>Performance:</strong> Use React.memo and useMemo wisely</li>
        <li><strong>Testing:</strong> Write comprehensive unit and integration tests</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>React and TypeScript together provide a robust foundation for building modern web applications. By following these practices, you can create applications that are both powerful and maintainable.</p>
    `,
    author: "DevNest",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Web Development"]
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = mockBlogPosts.find(p => p.id === parseInt(id || ''));

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <article className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Button
              variant="ghost"
              onClick={() => navigate('/blog')}
              className="mb-6 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>

            {/* Post Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                {post.title}
              </h1>
              
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
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
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Admin Actions */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => navigate(`/blog/${post.id}/edit`)}
                  className="flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit Post
                </Button>
              </div>
            </header>

            {/* Post Content */}
            <div className="glass-effect p-8 rounded-lg">
              <div
                className="prose prose-lg max-w-none text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
