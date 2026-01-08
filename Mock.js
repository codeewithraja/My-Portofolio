export const portfolioData = {
  personal: {
    name: "Raja",
    title: "Full Stack MERN Developer",
    tagline: "Building scalable web applications with modern technologies",
    email: "raja.dev@example.com",
    github: "https://github.com/raja",
    linkedin: "https://linkedin.com/in/raja-dev",
    location: "India"
  },

  about: {
    description: "Passionate Full Stack Developer specializing in MERN stack technologies. I transform ideas into robust, scalable web applications with clean code and intuitive user experiences. With a strong foundation in computer science and hands-on experience building real-world projects, I'm dedicated to crafting solutions that make a difference.",
    highlights: [
      "3+ years of experience in web development",
      "Built 15+ production-ready applications",
      "Strong problem-solving and analytical skills",
      "Passionate about clean code and best practices"
    ]
  },

  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Application",
      institution: "IIMT College, Saharanpur",
      year: "2020 - 2023",
      description: "Completed BCA with focus on software development, data structures, and algorithms"
    },
    {
      id: 2,
      degree: "MERN Stack Development Course",
      institution: "AccioJob",
      year: "2023",
      description: "Intensive full-stack development bootcamp covering MongoDB, Express.js, React.js, and Node.js"
    }
  ],

  skills: [
    {
      category: "Frontend",
      technologies: [
        { name: "React.js", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "JWT Authentication", level: 85 }
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git & GitHub", level: 88 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "npm/yarn", level: 85 },
        { name: "Responsive Design", level: 90 }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "CollabSpace - Real-time Collaboration Platform",
      description: "A powerful real-time collaboration platform enabling teams to work together seamlessly with live document editing, video conferencing, and instant messaging.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
      features: [
        "Real-time document collaboration",
        "Video/Audio conferencing",
        "Chat with file sharing",
        "User presence indicators"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "ShopifyPro - E-commerce Dashboard",
      description: "Comprehensive e-commerce admin dashboard with advanced analytics, inventory management, and real-time sales tracking for online businesses.",
      tech: ["React", "Express", "MongoDB", "Chart.js", "Stripe"],
      features: [
        "Real-time sales analytics",
        "Inventory management system",
        "Order tracking & fulfillment",
        "Customer insights dashboard"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "SocialHub - Social Media Application",
      description: "Feature-rich social networking platform with user authentication, posts, likes, comments, real-time notifications, and user profiles.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Cloudinary"],
      features: [
        "User authentication & profiles",
        "Post creation with media upload",
        "Like, comment, and share functionality",
        "Real-time notifications"
      ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "TaskFlow - Project Management System",
      description: "Intuitive project management tool with kanban boards, task assignments, deadline tracking, and team collaboration features.",
      tech: ["React", "Express", "MongoDB", "Redux", "DnD Kit"],
      features: [
        "Drag-and-drop kanban boards",
        "Task assignment & tracking",
        "Team collaboration tools",
        "Progress analytics"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "StreamVibe - Video Streaming Platform",
      description: "Netflix-inspired video streaming platform with user subscriptions, video upload/playback, watch history, and personalized recommendations.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "FFmpeg"],
      features: [
        "Video upload & transcoding",
        "Adaptive streaming quality",
        "User subscriptions",
        "Personalized recommendations"
      ],
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "APIGateway - Microservices Hub",
      description: "Scalable API gateway and microservices architecture with rate limiting, authentication, load balancing, and service orchestration.",
      tech: ["Node.js", "Express", "Redis", "MongoDB", "Docker"],
      features: [
        "API gateway with routing",
        "Rate limiting & throttling",
        "Service discovery",
        "Centralized authentication"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    }
  ]
};
