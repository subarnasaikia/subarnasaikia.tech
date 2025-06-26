
import { Github, Linkedin, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog data - in a real app, this would come from an API
  const blogs = {
    
  };

  const blog = blogs[id as keyof typeof blogs];

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 font-mono flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <Link to="/blogs" className="text-green-400 hover:text-green-300">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/blogs" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blogs
          </Link>
          
          <div className="mb-6">
            <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">{blog.category}</span>
            <span className="text-gray-500 text-sm ml-4">{blog.readTime}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
          <p className="text-gray-400">{blog.date}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {blog.content}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-12 mt-12 border-t border-gray-800">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://linkedin.com/in/subarna-saikia" 
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/subarna_saikia" 
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/subarnasaikia" 
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
          </div>
          <p>Built with love ❤️ | <a 
              href="https://github.com/subarnasaikia" 
              target="_blank"
              rel="noopener noreferrer">Subarna Saikia</a></p>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;
