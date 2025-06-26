
import { Github, Linkedin, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const allBlogs = [
    // {
    //   id: 1,
    //   title: "Understanding Deep Learning Fundamentals",
    //   excerpt: "A comprehensive guide to neural networks and their applications in modern AI systems. We'll explore the mathematical foundations, different types of neural networks, and practical implementation strategies.",
    //   content: "Deep learning has revolutionized the field of artificial intelligence...",
    //   date: "December 15, 2024",
    //   readTime: "8 min read",
    //   category: "AI/ML"
    // },
  ];

  const categories = ["All", "AI/ML", "DSA", "Backend"];
  
  const filteredBlogs = selectedCategory === "All" 
    ? allBlogs 
    : allBlogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">All Blogs</h1>
          <p className="text-gray-300">Thoughts on programming, AI/ML, and technology</p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 block"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">{blog.category}</span>
                <span className="text-gray-500 text-xs">{blog.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{blog.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{blog.excerpt}</p>
              <p className="text-gray-500 text-xs">{blog.date}</p>
            </Link>
          ))}
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

export default Blogs;
