

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ExternalLink, Code2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioFitness from "@/assets/portfolio-fitness.jpg";
import portfolioRealestate from "@/assets/portfolio-realestate.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioEducation from "@/assets/portfolio-education.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Project {
  title: string;
  category: string;
  description: string;
  details: string;
  technologies: string[];
  client: string;
  image: string;
}

const AnimatedNumber = ({ value, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const increment = end / (duration / 16.67); // ~60fps
    let frame;

    const update = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(update);
      } else {
        setCount(end);
        cancelAnimationFrame(frame);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern online store with advanced filtering and cart management",
      details: "Built a full-featured e-commerce platform with React, Node.js, and MongoDB. Includes user authentication, product management, payment integration with Stripe, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      client: "Fashion Retail Brand",
      image: portfolioEcommerce
    },
    {
      title: "Fitness Mobile App",
      category: "App Development",
      description: "Cross-platform fitness tracking app with workout plans",
      details: "Developed a comprehensive fitness app using React Native with features like workout tracking, meal planning, progress charts, and social sharing capabilities.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      client: "Health & Wellness Startup",
      image: portfolioFitness
    },
    {
      title: "Real Estate Portal",
      category: "Web Development",
      description: "Property listing platform with advanced search",
      details: "Created a real estate portal with map integration, advanced filters, virtual tours, and CRM for agents. Includes lead management and analytics dashboard.",
      technologies: ["Next.js", "PostgreSQL", "Google Maps API", "AWS"],
      client: "Real Estate Agency",
      image: portfolioRealestate
    },
    {
      title: "Restaurant Management System",
      category: "Software Development",
      description: "Complete POS and inventory management solution",
      details: "Built a custom restaurant management system with POS, inventory tracking, staff management, table reservations, and detailed analytics reports.",
      technologies: ["React", "Express.js", "MySQL", "Socket.io"],
      client: "Restaurant Chain",
      image: portfolioRestaurant
    },
    {
      title: "Educational Platform",
      category: "Web & App Development",
      description: "Learning management system with video courses",
      details: "Developed a comprehensive LMS with video streaming, quizzes, certificates, progress tracking, and discussion forums. Available on web and mobile.",
      technologies: ["React", "React Native", "Django", "PostgreSQL", "AWS S3"],
      client: "Online Education Provider",
      image: portfolioEducation
    },
    {
      title: "Corporate Website",
      category: "UI/UX & Web",
      description: "Premium corporate website with animations",
      details: "Designed and developed a stunning corporate website with smooth animations, 3D elements, case studies section, and integrated blog.",
      technologies: ["React", "Three.js", "GSAP", "Contentful CMS"],
      client: "Tech Consulting Firm",
      image: portfolioCorporate
    }
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-24 pb-10">
        {/* Enhanced Hero Section */}
        <section className="relative container mx-auto px-4 lg:px-8 py-20 overflow-hidden">
          {/* Background Elements */}
         

          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            {/* Badge */}
             <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full text-primary text-sm font-bold mb-12 border-2 border-primary/40 shadow-2xl backdrop-blur-xl hover:scale-105 transition-all duration-300 ">
              <Sparkles size={20}  style={{ animationDuration: '3s' }} />
              <span className="tracking-widest">OUR SUCCESS STORIES</span>
              <Sparkles size={20}  style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our <span className="gradient-text-primary">Work</span> Speaks for Itself
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-8">
              Explore our portfolio of successful projects across web, mobile, and software development
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text-primary mb-1">
                 <AnimatedNumber value={projects.length} suffix="" />

                </div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                
                <div className="text-4xl font-bold gradient-text-secondary mb-1">
                                   <AnimatedNumber value={100} suffix="%" />

                </div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text-primary mb-1">
                                   <AnimatedNumber value={5} suffix="+" />

                </div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                    : "bg-card/60 backdrop-blur-sm border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Enhanced Projects Grid */}
        <section className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-border  transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-card/60 backdrop-blur-sm"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
              
                </div>

                {/* Card Content */}
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text-primary transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Client Badge */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={14} />
                    <span className="truncate">{project.client}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/30 shadow-2xl">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-violet rounded-full blur-3xl" />
              </div>

              <CardContent className="p-12 text-center relative z-10">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-6">
                  <Code2 size={14} className="text-primary" />
                  <span className="text-sm text-primary font-medium">Let's Build Together</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ready to Start <span className="gradient-text-primary">Your Project?</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help bring your vision to life with our expertise and experience
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      className="gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 font-semibold px-10 py-6 shadow-xl group"
                    >
                      Start Your Project
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 px-10 py-6"
                    >
                      View Services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Enhanced Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="space-y-4">
              <DialogTitle className="text-3xl gradient-text-primary">
                {selectedProject?.title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-primary/10 text-primary">
                  {selectedProject?.category}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={14} />
                  <span>{selectedProject?.client}</span>
                </div>
              </div>
            </div>
          </DialogHeader>
          
          <DialogDescription className="text-base pt-6 space-y-6">
            {/* Project Overview */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2 text-lg">
                <div className="w-1 h-6 bg-primary rounded-full" />
                Project Overview
              </h4>
              <p className="text-muted-foreground leading-relaxed">{selectedProject?.details}</p>
            </div>
            
            {/* Technologies Used */}
            <div>
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2 text-lg">
                <div className="w-1 h-6 bg-primary rounded-full" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.technologies.map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="border-primary/50 bg-primary/5 hover:bg-primary/10 transition-colors px-4 py-2 text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-xl p-6 border border-primary/20">
              <h4 className="font-bold text-foreground mb-2">Interested in a similar project?</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Let's discuss how we can create something amazing for you too.
              </p>
              <Link to="/contact">
                <Button 
                  className="gradient-primary hover:opacity-90 transition-opacity group"
                >
                  Get in Touch
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;