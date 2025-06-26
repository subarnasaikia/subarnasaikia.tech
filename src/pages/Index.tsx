
import { Github, Linkedin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "NoteX",
      category: "Backend",
      tech: "Next.js, TypeScript, Express.js, Node.js, LangChain, OpenAI",
      description: "AI-powered web-based note taking app with revision and quiz features.",
      features: ["Flash card facility for revision", "Markdown and LaTeX support"],
      github: "https://github.com/subarnasaikia/NoteX",
      live: "https://notex-demo.vercel.app"
    },
    {
      title: "Solar Plant Efficiency Predictions",
      category: "AI/ML",
      tech: "Python, Jupyter Notebook",
      description: "Predict solar plant efficiency for Zelestra × AWS hackathon.",
      features: ["Achieved score of 89.90431 with 0.100321 RMSE", "Rank 25 among 1500+ teams"],
      github: "#",
      live: null
    },
    
  ];

  const blogs = [
    // {
    //   id: 1,
    //   title: "Understanding Deep Learning Fundamentals",
    //   description: "A comprehensive guide to neural networks and their applications in modern AI systems. We explore mathematical foundations, different types of neural networks, and practical implementation strategies.",
    //   date: "December 15, 2024",
    //   readTime: "8 min read",
    //   category: "AI/ML"
    // },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "AI/ML", "Backend"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsRef.current) {
      const scrollAmount = 320;
      projectsRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono relative">
      {/* Sticky Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 py-4' 
          : 'bg-transparent py-0'
      }`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}>
            <h1 className="text-2xl font-bold font-edu-qld" style={{color: 'rgb(189, 235, 249)'}}>
              Subarna Saikia
            </h1>
            <nav className="flex space-x-6 text-sm">
              <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
              <a href="#achievements" className="text-gray-300 hover:text-green-400 transition-colors">Achievements</a>
              <a href="#experience" className="text-gray-300 hover:text-green-400 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-300 hover:text-green-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">Projects</a>
              {/* <a href="#blogs" className="text-gray-300 hover:text-green-400 transition-colors">Blogs</a> */}
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-edu-qld" style={{color: 'rgb(189, 235, 249)'}}>
            Subarna Saikia
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Developer
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://linkedin.com/in/subarna-saikia" 
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="https://github.com/subarnasaikia" 
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://x.com/subarna_saikia" 
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          <div className="flex justify-center">
            <a 
              href="https://drive.google.com/file/d/1V1YEQmWJO_n87ROBv05F2Xg1UkY7BZxJ/view?usp=sharing" 
              className="text-white px-6 py-2 rounded-md transition-colors duration-300 inline-flex items-center"
              style={{backgroundColor: 'rgb(67, 122, 68)'}}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-caveat" style={{color: 'rgb(144, 148, 101)'}}>About me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
          I am a final-year B.Tech student exploring backend development and AI/ML while actively participating in competitive programming contests and Kaggle competitions. I enjoy delving into the mathematics behind ML/DL algorithms and occasionally try to read books (though I still haven't finished The Alchemist since January 2025 🙂).
          </p>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-caveat" style={{color: 'rgb(144, 148, 101)'}}>Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 hover:bg-gray-750 transition-all duration-300">
              <span className="text-white font-semibold block mb-2">Specialist at Codeforces</span>
              <a href="https://codeforces.com/profile/Subarna1" className="text-blue-400 hover:text-blue-300 inline-flex items-center mb-2">
                (profile) <ExternalLink size={14} className="ml-1" />
              </a>
              <p className="text-gray-400">Max rating 1408</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 hover:bg-gray-750 transition-all duration-300">
              <span className="text-white font-semibold block mb-2">3 Star at Codechef</span>
              <a href="https://www.codechef.com/users/subarna1" className="text-blue-400 hover:text-blue-300 inline-flex items-center mb-2">
                (profile) <ExternalLink size={14} className="ml-1" />
              </a>
              <p className="text-gray-400">Max rating 1655</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 hover:bg-gray-750 transition-all duration-300">
              <span className="text-white font-semibold block mb-2">Notebooks Expert at Kaggle</span>
              <a href="https://www.kaggle.com/subarnasaikia" className="text-blue-400 hover:text-blue-300 inline-flex items-center mb-2">
                (profile) <ExternalLink size={14} className="ml-1" />
              </a>
              <p className="text-gray-400">Best global rank 2690</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 hover:bg-gray-750 transition-all duration-300">
              <span className="text-white font-semibold block mb-2">Zelestra X AWS ML Ascend Challenge - 2nd Edition ( phase 1 )</span>
              <p className="text-gray-400">National rank 25 out of 1500+ teams</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-caveat" style={{color: 'rgb(144, 148, 101)'}}>Experience</h2>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>
            
            <div className="space-y-8">
              <div className="relative pl-16 hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                <h3 className="text-xl font-semibold text-white">ADP</h3>
                <p className="text-blue-400 mb-2">July 2025 - Present</p>
                <p className="text-gray-300">Global Product and Technology (GPT) Intern</p>
                <ul className="text-gray-400 space-y-1">
                  <li>• Will update...</li>
                </ul>
              </div>
              
              <div className="relative pl-16 hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                <h3 className="text-xl font-semibold text-white">LNMIIT</h3>
                <p className="text-blue-400 mb-2">June 2025 - July 2025</p>
                <p className="text-gray-300 mb-2">Research Intern</p>
                <ul className="text-gray-400 space-y-1">
                  <li>• Worked in secondary protein structure detections using AI</li>
                  <li>• Worked on Downlink Non-Orthogonal Multiple Access (NOMA) with Reinforcement Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-caveat" style={{color: 'rgb(144, 148, 101)'}}>Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["C++", "C", "Python", "Java", "TypeScript", "SQL", "MongoDB", "Django", "TensorFlow", "Express.js"].map((skill) => (
              <span key={skill} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md text-sm border border-gray-700 hover:bg-gray-700 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-caveat" style={{color: 'rgb(144, 148, 101)'}}>Projects</h2>
          
          {/* Category Filter */}
          <div className="flex gap-4 mb-6 overflow-x-auto">
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

          {/* Projects Carousel */}
          <div className="relative">
            <button 
              onClick={() => scrollProjects('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scrollProjects('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            
            <div 
              ref={projectsRef}
              className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredProjects.map((project) => (
                <div key={project.title} className="flex-none w-72 bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-400 hover:bg-gray-750 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">{project.category}</span>
                  </div>
                  <p className="text-blue-400 mb-2 text-sm">{project.tech}</p>
                  <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                  <ul className="text-gray-400 space-y-1 text-xs mb-4">
                    {project.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs transition-colors inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={12} className="mr-1" /> Code
                    </a>
                    {project.live && (
                      <a 
                        href={project.live}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs transition-colors inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={12} className="mr-1" /> Live
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs Section
        <section id="blogs" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-caveat" style={{color: 'rgb(144, 148, 101)'}}>Recent Blogs</h2>
          <div className="space-y-6">
            {blogs.slice(0, 4).map((blog) => (
              <Link 
                key={blog.id} 
                to={`/blog/${blog.id}`}
                className="block hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white hover:text-green-400 transition-colors">{blog.title}</h3>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded">{blog.category}</span>
                    <span className="text-gray-500">{blog.readTime}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-2 leading-relaxed">{blog.description}</p>
                <p className="text-gray-500 text-sm">{blog.date}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link 
              to="/blogs"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-300 inline-block"
            >
              View All Blogs
            </Link>
          </div>
        </section> */}

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
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
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Index;
