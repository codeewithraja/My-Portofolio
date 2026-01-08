import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Database, Server, ExternalLink, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { personal, about, education, skills, projects } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {personal.name}
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <Code2 className="w-20 h-20 mx-auto text-cyan-400 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            {personal.name}
          </h1>
          <p className="text-3xl md:text-4xl font-light text-gray-300 mb-4">
            {personal.title}
          </p>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {personal.tagline}
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button onClick={() => scrollToSection('projects')} className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-lg">
              View Projects
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg">
              Get In Touch
            </Button>
          </div>
          <div className="flex gap-6 justify-center">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-7 h-7" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href={`mailto:${personal.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
        <button onClick={() => scrollToSection('about')} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {about.description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Highlights</h3>
              <ul className="space-y-4">
                {about.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-800 hover:border-cyan-400/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-cyan-400 text-2xl">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{tech.name}</span>
                        <span className="text-cyan-400">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in full-stack development
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-[#1a1a1a] border-gray-800 hover:border-cyan-400/50 transition-all group overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-100">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <Badge key={index} variant="outline" className="border-cyan-400/50 text-cyan-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-gray-400">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-black flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="text-cyan-400">Education</span>
          </h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <Card key={edu.id} className="bg-[#1a1a1a] border-gray-800 hover:border-cyan-400/50 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-gray-100">{edu.degree}</CardTitle>
                      <CardDescription className="text-cyan-400 text-lg mt-2">{edu.institution}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">{edu.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 hover:border-cyan-400/50 px-6 py-4 rounded-lg transition-all">
              <Mail className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300">{personal.email}</span>
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 hover:border-cyan-400/50 px-6 py-4 rounded-lg transition-all">
              <Github className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300">GitHub Profile</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 hover:border-cyan-400/50 px-6 py-4 rounded-lg transition-all">
              <Linkedin className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 {personal.name}. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
