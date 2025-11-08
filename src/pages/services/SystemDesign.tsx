// import { Network, Database, Layers, Shield, CheckCircle, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// const SystemDesign = () => {
//   const benefits = [
//     "Scalable Architecture Design",
//     "High-Performance Systems",
//     "Microservices Architecture",
//     "Database Schema Design",
//     "API Design & Integration",
//     "Load Balancing & Caching",
//     "Security & Compliance",
//     "Disaster Recovery Planning",
//   ];

//   const expertise = [
//     {
//       icon: Network,
//       title: "Distributed Systems",
//       description: "Design resilient systems that scale horizontally across multiple servers",
//     },
//     {
//       icon: Database,
//       title: "Database Architecture",
//       description: "Optimize data storage with SQL, NoSQL, and hybrid solutions",
//     },
//     {
//       icon: Layers,
//       title: "Microservices",
//       description: "Break down monoliths into maintainable, independent services",
//     },
//     {
//       icon: Shield,
//       title: "Security Design",
//       description: "Build secure systems with encryption, authentication, and compliance",
//     },
//   ];

//   const projects = [
//     {
//       title: "E-commerce Platform Architecture",
//       description: "Designed scalable system handling 100K+ concurrent users with 99.99% uptime",
//       scale: "100K Users",
//     },
//     {
//       title: "Real-Time Analytics System",
//       description: "Built data pipeline processing 1M+ events per second for fintech startup",
//       scale: "1M Events/sec",
//     },
//     {
//       title: "Microservices Migration",
//       description: "Transformed legacy monolith into 20+ microservices reducing downtime by 90%",
//       scale: "90% Less Downtime",
//     },
//   ];

//   const phoneNumber = "919696726607";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in System Design & Architecture")}`;

//   return (
//     <div className="min-h-screen">
//       {/* Hero Banner */}
//       <section className="relative py-20 bg-gradient-primary overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//         </div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl mx-auto text-center text-white">
//             <Network className="w-16 h-16 mx-auto mb-6" />
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//               System Design & Architecture
//             </h1>
//             <p className="text-xl text-white/90 mb-8">
//               Build scalable, high-performance systems designed to grow with your business
//             </p>
//             <div className="flex gap-4 justify-center">
//               <Button 
//                 size="lg" 
//                 className="bg-white text-primary hover:bg-white/90"
//                 onClick={() => window.open(whatsappUrl, "_blank")}
//               >
//                 Get Architecture Review
//               </Button>
//               <Button 
//                 size="lg" 
//                 variant="outline" 
//                 className="border-white text-white hover:bg-white/10"
//                 onClick={() => window.location.href = "/contact"}
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
//               Architecture for <span className="gradient-text">Scale</span>
//             </h2>
//             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//               Great software starts with great architecture. We design systems that handle millions of users, process massive data volumes, and remain resilient under any load. Whether you're building a new product or scaling an existing one, our system design expertise ensures your platform is built on a solid foundation.
//             </p>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               From distributed systems and microservices to database optimization and API design—we cover every aspect of modern software architecture. Our designs prioritize scalability, performance, security, and maintainability from day one.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Expertise Grid */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Our <span className="gradient-text">Expertise</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {expertise.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <Card key={index} className="hover:shadow-lg transition-smooth">
//                   <CardHeader>
//                     <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
//                       <Icon className="text-white" size={28} />
//                     </div>
//                     <CardTitle className="text-lg">{item.title}</CardTitle>
//                     <CardDescription className="text-sm mt-2">
//                       {item.description}
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Key Benefits */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             What You <span className="gradient-text">Get</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
//               >
//                 <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
//                 <span className="font-medium text-sm">{benefit}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Architecture <span className="gradient-text">Success Stories</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {projects.map((project, index) => (
//               <Card key={index} className="hover:shadow-lg transition-smooth">
//                 <CardHeader>
//                   <CardTitle>{project.title}</CardTitle>
//                   <CardDescription className="text-sm mt-2">
//                     {project.description}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="inline-block px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-semibold">
//                     {project.scale}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center bg-gradient-primary rounded-2xl p-12 text-white">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Need Expert Architecture Guidance?
//             </h2>
//             <p className="text-lg text-white/90 mb-8">
//               Let's design a system that scales from MVP to millions of users seamlessly.
//             </p>
//             <div className="flex gap-4 justify-center">
//               <Button 
//                 size="lg" 
//                 className="bg-white text-primary hover:bg-white/90"
//                 onClick={() => window.open(whatsappUrl, "_blank")}
//               >
//                 Chat on WhatsApp
//                 <ArrowRight className="ml-2" />
//               </Button>
//               <Button 
//                 size="lg" 
//                 variant="outline" 
//                 className="border-white text-white hover:bg-white/10"
//                 onClick={() => window.location.href = "/contact"}
//               >
//                 Book Consultation
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SystemDesign;


import { Network, Database, Layers, Shield, CheckCircle, ArrowRight, Server, Cloud, Zap, Lock, TrendingUp, Users, BarChart, Code, GitBranch, Box, Globe, Cpu, HardDrive, Activity, Timer, Target, Workflow, MessageCircle, Award, Rocket, Settings, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SystemDesign = () => {
  const benefits = [
    "Scalable Architecture Design",
    "High-Performance Systems",
    "Microservices Architecture",
    "Database Schema Design",
    "API Design & Integration",
    "Load Balancing & Caching",
    "Security & Compliance",
    "Disaster Recovery Planning",
    "Cloud Infrastructure Setup",
    "Performance Optimization",
    "System Monitoring & Observability",
    "Cost Optimization Strategies",
  ];

  const services = [
    {
      icon: Network,
      title: "Distributed Systems Architecture",
      description: "Design resilient, fault-tolerant systems that scale horizontally across multiple servers and data centers",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description: "Strategic database architecture with SQL, NoSQL, and hybrid solutions optimized for your workload",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop",
    },
    {
      icon: Layers,
      title: "Microservices Architecture",
      description: "Transform monolithic applications into independently deployable, scalable microservices",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture (AWS/Azure/GCP)",
      description: "Design and implement cloud-native solutions leveraging best-in-class cloud services",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop",
    },
    {
      icon: Shield,
      title: "Security Architecture",
      description: "Build secure systems with encryption, authentication, authorization, and compliance",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    },
    {
      icon: Activity,
      title: "Real-Time & Event-Driven Systems",
      description: "Design event-driven architectures for real-time data processing and streaming",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
  ];

  const expertise = [
    {
      icon: Network,
      title: "Distributed Systems",
      description: "CAP theorem, consensus algorithms, distributed transactions",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Sharding, replication, indexing, query optimization",
    },
    {
      icon: Layers,
      title: "Microservices",
      description: "Service mesh, API gateway, inter-service communication",
    },
    {
      icon: Shield,
      title: "Security Design",
      description: "OAuth, JWT, encryption, DDoS protection, WAF",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Caching strategies, CDN, load balancing, auto-scaling",
    },
    {
      icon: Server,
      title: "Infrastructure",
      description: "Kubernetes, Docker, CI/CD, infrastructure as code",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform Architecture",
      description: "Designed scalable system handling 100K+ concurrent users with 99.99% uptime during peak sales",
      scale: "100K Concurrent Users",
      tech: "Kubernetes, Redis, PostgreSQL, Kafka",
      metrics: ["99.99% uptime", "3s avg response time", "10M daily requests"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    },
    {
      title: "Real-Time Analytics System",
      description: "Built data pipeline processing 1M+ events per second with sub-second latency for fintech startup",
      scale: "1M Events/sec",
      tech: "Apache Kafka, Spark, ClickHouse, Redis",
      metrics: ["<500ms latency", "1M events/sec", "Petabyte scale"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Microservices Migration",
      description: "Transformed legacy monolith into 20+ microservices reducing downtime by 90% and deployment time by 80%",
      scale: "90% Less Downtime",
      tech: "Docker, Kubernetes, gRPC, Istio",
      metrics: ["90% less downtime", "80% faster deploys", "20+ services"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
    {
      title: "Global CDN & Edge Computing",
      description: "Designed multi-region architecture serving 50M+ users worldwide with sub-100ms latency",
      scale: "50M Global Users",
      tech: "CloudFlare, AWS CloudFront, Edge Workers",
      metrics: ["<100ms latency", "50M users", "99.999% availability"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop",
    },
    {
      title: "Banking System Security Architecture",
      description: "Implemented PCI DSS compliant architecture with multi-layer security and zero-trust model",
      scale: "Bank-Level Security",
      tech: "OAuth2, Vault, AWS KMS, WAF",
      metrics: ["PCI DSS compliant", "Zero breaches", "Multi-factor auth"],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
    },
    {
      title: "Healthcare Data Platform",
      description: "HIPAA-compliant data architecture processing 100TB+ medical records with end-to-end encryption",
      scale: "100TB+ Data",
      tech: "MongoDB, S3, AWS HealthLake, Encryption",
      metrics: ["HIPAA compliant", "100TB+ processed", "AES-256 encryption"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Deep dive into business goals, technical constraints, scale requirements, and performance targets",
    },
    {
      step: "02",
      title: "Capacity Planning",
      description: "Calculate resource requirements, estimate costs, and plan for growth at various scale points",
    },
    {
      step: "03",
      title: "Architecture Design",
      description: "Create high-level and detailed architecture diagrams with technology stack recommendations",
    },
    {
      step: "04",
      title: "Database Schema Design",
      description: "Design optimal data models, indexing strategies, and data partitioning approaches",
    },
    {
      step: "05",
      title: "API & Interface Design",
      description: "Define RESTful/GraphQL APIs, message queues, and inter-service communication protocols",
    },
    {
      step: "06",
      title: "Implementation Roadmap",
      description: "Create phased implementation plan with milestones, testing strategy, and risk mitigation",
    },
  ];

  const technologies = {
    databases: ["PostgreSQL", "MongoDB", "Redis", "Cassandra", "MySQL", "DynamoDB", "ClickHouse", "Elasticsearch"],
    cloud: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Cloudflare", "Vercel", "Heroku"],
    orchestration: ["Kubernetes", "Docker", "Docker Swarm", "Nomad", "ECS", "Cloud Run"],
    messaging: ["Apache Kafka", "RabbitMQ", "Redis Pub/Sub", "AWS SQS", "Google Pub/Sub", "NATS"],
  };

  const stats = [
    { number: "300+", label: "Systems Architected" },
    { number: "99.99%", label: "Average Uptime" },
    { number: "10B+", label: "Requests Handled Daily" },
    { number: "100+", label: "Enterprise Clients" },
  ];

  const testimonials = [
    {
      name: "James Wilson",
      role: "CTO, ScaleUp Tech",
      content: "Their architecture expertise saved us millions. The system they designed handles 10x our initial traffic projections without breaking a sweat.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "VP Engineering, DataFlow Inc.",
      content: "The microservices migration was flawless. We went from monthly releases to daily deployments with zero downtime.",
      rating: 5,
    },
    {
      name: "Robert Chen",
      role: "Founder, FinTech Solutions",
      content: "Bank-grade security architecture that actually works. Passed all compliance audits on first try. Highly recommended!",
      rating: 5,
    },
  ];

  const designPatterns = [
    { name: "CQRS", description: "Command Query Responsibility Segregation" },
    { name: "Event Sourcing", description: "Event-based state management" },
    { name: "Circuit Breaker", description: "Fault tolerance pattern" },
    { name: "API Gateway", description: "Centralized API management" },
    { name: "Service Mesh", description: "Inter-service communication" },
    { name: "Saga Pattern", description: "Distributed transactions" },
    { name: "Strangler Fig", description: "Legacy system migration" },
    { name: "BFF Pattern", description: "Backend for Frontend" },
  ];

  const industries = [
    { name: "FinTech", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop" },
    { name: "E-Commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
    { name: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
    { name: "SaaS", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
    { name: "Media & Streaming", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop" },
    { name: "IoT & Edge", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in System Design & Architecture")}`;

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-28 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              🏗️ Enterprise-Grade System Architecture
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              System Design & Architecture Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Build scalable, resilient systems that handle millions of users and billions of requests with 99.99% uptime
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-2xl"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get Architecture Review
              </Button>
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-6 shadow-2xl"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-1">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Architecture That <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Scales</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Great software starts with great architecture. Whether you're building from scratch or scaling an existing system, proper architecture is the difference between success and failure at scale.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We design systems that handle millions of users, process massive data volumes, and remain resilient under any load. Our architectures prioritize scalability, performance, security, and cost-efficiency from day one.
              </p>
              <div className="space-y-3">
                {[
                  "Handle 10,000x traffic spikes without downtime",
                  "Sub-second response times at any scale",
                  "99.99% uptime SLA guaranteed",
                  "50-70% cost reduction through optimization",
                  "Security-first design with compliance built-in",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
                alt="System architecture diagram"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Network className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold">Enterprise Grade</div>
                    <div className="text-sm text-gray-600">Battle-Tested</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Architecture <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive system design solutions for modern applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Core <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            What You <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Get</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Architecture <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systems we've designed that power businesses at scale
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.scale}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-600">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    <strong>Stack:</strong> {project.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Our Architecture <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systematic approach to designing robust, scalable systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Technology <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-lg text-gray-300">
              Battle-tested technologies for building scalable systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-blue-400" />
                Databases
              </h3>
              <div className="space-y-2">
                {technologies.databases.map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-700 hover:border-blue-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Cloud className="w-6 h-6 text-cyan-400" />
                Cloud
              </h3>
              <div className="space-y-2">
                {technologies.cloud.map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-700 hover:border-cyan-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Box className="w-6 h-6 text-teal-400" />
                Orchestration
              </h3>
              <div className="space-y-2">
                {technologies.orchestration.map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-700 hover:border-teal-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Workflow className="w-6 h-6 text-green-400" />
                Messaging
              </h3>
              <div className="space-y-2">
                {technologies.messaging.map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-700 hover:border-green-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Patterns */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Design <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Patterns</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-proven patterns for building reliable systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {designPatterns.map((pattern, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold mb-2">{pattern.name}</h3>
                <p className="text-gray-600 text-sm">{pattern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Industries <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">We Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized architecture solutions across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={industry.image} alt={industry.name} className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <span className="text-white font-bold text-sm">{industry.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Client <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-600">
              Hear from CTOs and engineering leaders we've helped
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic text-sm">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="Architecture planning"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Why Invest in <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Great Architecture?</span>
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, title: "Scale Efficiently", desc: "Handle 100x growth without complete rewrites" },
                    { icon: Timer, title: "Faster Time to Market", desc: "Well-planned architecture accelerates development" },
                    { icon: Target, title: "Reduce Costs", desc: "Optimized infrastructure saves 50-70% on cloud bills" },
                    { icon: Shield, title: "Security & Compliance", desc: "Built-in security prevents costly breaches" },
                    { icon: Rocket, title: "Better Performance", desc: "Sub-second response times even under load" },
                    { icon: Users, title: "Team Productivity", desc: "Clear architecture helps developers move faster" },
                  ].map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                          <p className="text-gray-600 text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 text-white">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  Featured Architecture
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Scaling E-Commerce to Black Friday Traffic
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Redesigned architecture for major retailer to handle Black Friday traffic. Implemented auto-scaling, CDN optimization, database sharding, and caching strategies that resulted in zero downtime during their highest traffic day ever.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>100K+ concurrent users handled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Zero downtime during peak traffic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>3-second average page load time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>65% reduction in infrastructure costs</span>
                  </div>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  Read Full Case Study
                </Button>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Architecture dashboard"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Deliverables */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              What You <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Receive</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive documentation and diagrams for your development team
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: FileText, title: "Architecture Document", desc: "Detailed system design with rationale for decisions" },
              { icon: Network, title: "System Diagrams", desc: "High-level and detailed architecture diagrams" },
              { icon: Database, title: "Database Schema", desc: "Complete ERD with indexing strategies" },
              { icon: Code, title: "API Specifications", desc: "REST/GraphQL API contracts and documentation" },
              { icon: Cloud, title: "Infrastructure Setup", desc: "Cloud resource configuration and IaC scripts" },
              { icon: Settings, title: "Deployment Guide", desc: "Step-by-step deployment and rollback procedures" },
              { icon: Shield, title: "Security Plan", desc: "Security architecture and compliance checklist" },
              { icon: BarChart, title: "Monitoring Setup", desc: "Observability dashboards and alert configurations" },
              { icon: Workflow, title: "Implementation Roadmap", desc: "Phased rollout plan with milestones" },
            ].map((deliverable, index) => {
              const Icon = deliverable.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{deliverable.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{deliverable.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When You Need Architecture */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-3">
                When Do You Need <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">System Design?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Building a New Product",
                  description: "Starting from scratch? Get the architecture right from day one to avoid costly rewrites later.",
                  icon: Rocket,
                },
                {
                  title: "Scaling Existing System",
                  description: "Hitting performance limits? We'll redesign your architecture to handle 100x growth.",
                  icon: TrendingUp,
                },
                {
                  title: "Modernizing Legacy Apps",
                  description: "Stuck with a monolith? Migrate to microservices without disrupting your business.",
                  icon: Settings,
                },
                {
                  title: "Performance Problems",
                  description: "Slow response times? We'll optimize your architecture for sub-second performance.",
                  icon: Zap,
                },
                {
                  title: "Security & Compliance",
                  description: "Need to meet compliance standards? We design secure, compliant architectures.",
                  icon: Shield,
                },
                {
                  title: "Cost Optimization",
                  description: "Cloud bills too high? Optimize your infrastructure to save 50-70% on costs.",
                  icon: Target,
                },
              ].map((scenario, index) => {
                const Icon = scenario.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{scenario.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Ready to Build Something <span className="text-yellow-300">Scalable?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Let's architect a system that scales from MVP to millions of users without breaking a sweat
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6 shadow-2xl"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Get Free Architecture Review
            </Button>
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-10 py-6 shadow-2xl"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
          <div className="mt-10 text-white/80">
            <p className="text-sm">✓ Free architecture assessment • ✓ Scalability review • ✓ Cost analysis • ✓ No obligation</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemDesign;