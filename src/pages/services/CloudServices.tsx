// import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// const CloudServices = () => {
//   const benefits = [
//     "99.9% Uptime Guarantee",
//     "Auto-Scaling Infrastructure",
//     "Advanced Security & Compliance",
//     "24/7 Monitoring & Support",
//     "Cost-Optimized Solutions",
//     "Disaster Recovery Setup",
//   ];

//   const techStack = [
//     { name: "AWS", icon: Cloud },
//     { name: "Google Cloud", icon: Server },
//     { name: "Azure", icon: Shield },
//     { name: "Docker & Kubernetes", icon: Zap },
//   ];

//   const projects = [
//     {
//       title: "E-commerce Cloud Migration",
//       description: "Migrated a high-traffic retail platform to AWS with 40% cost reduction",
//       tech: "AWS, Docker, Kubernetes",
//     },
//     {
//       title: "Healthcare SaaS Deployment",
//       description: "HIPAA-compliant cloud infrastructure for medical data management",
//       tech: "Azure, PostgreSQL, Redis",
//     },
//     {
//       title: "Fintech Auto-Scaling Solution",
//       description: "Built scalable payment processing system handling 10K+ transactions/min",
//       tech: "GCP, Cloud Functions, Pub/Sub",
//     },
//   ];

//   const phoneNumber = "919696726607";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Cloud Services & Deployment")}`;

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
//             <Cloud className="w-16 h-16 mx-auto mb-6" />
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//               Cloud Services & Deployment
//             </h1>
//             <p className="text-xl text-white/90 mb-8">
//               Scalable, secure, and cost-effective cloud infrastructure for modern applications
//             </p>
//             <div className="flex gap-4 justify-center">
//               <Button 
//                 size="lg" 
//                 className="bg-white text-primary hover:bg-white/90"
//                 onClick={() => window.open(whatsappUrl, "_blank")}
//               >
//                 Get Free Consultation
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
//               Enterprise-Grade <span className="gradient-text">Cloud Solutions</span>
//             </h2>
//             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//               Deploy, manage, and scale your applications with confidence. Our cloud services cover everything from initial architecture design to ongoing DevOps support. We specialize in AWS, Google Cloud, and Azure, ensuring your infrastructure is optimized for performance, security, and cost.
//             </p>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Whether you're migrating legacy systems or building cloud-native applications, we provide end-to-end solutions including CI/CD pipelines, containerization, serverless architecture, and multi-cloud strategies.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Key Benefits */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Why Choose Our <span className="gradient-text">Cloud Services</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
//               >
//                 <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
//                 <span className="font-medium">{benefit}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tech Stack */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Technologies We <span className="gradient-text">Master</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
//             {techStack.map((tech, index) => {
//               const Icon = tech.icon;
//               return (
//                 <Card key={index} className="text-center hover:shadow-lg transition-smooth">
//                   <CardHeader>
//                     <div className="w-16 h-16 mx-auto rounded-lg gradient-primary flex items-center justify-center mb-4">
//                       <Icon className="text-white" size={32} />
//                     </div>
//                     <CardTitle className="text-lg">{tech.name}</CardTitle>
//                   </CardHeader>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Success <span className="gradient-text">Stories</span>
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
//                   <div className="text-xs text-muted-foreground">
//                     <strong>Tech:</strong> {project.tech}
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
//               Ready to Scale Your Infrastructure?
//             </h2>
//             <p className="text-lg text-white/90 mb-8">
//               Let's discuss your cloud requirements and build a solution that grows with your business.
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
//                 Schedule a Call
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CloudServices;


import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight, Database, Lock, TrendingUp, Clock, Users, Target, Layers, GitBranch, Activity, Gauge, HardDrive, Network, Settings, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CloudServices = () => {
  const benefits = [
    "99.9% Uptime Guarantee",
    "Auto-Scaling Infrastructure",
    "Advanced Security & Compliance",
    "24/7 Monitoring & Support",
    "Cost-Optimized Solutions",
    "Disaster Recovery Setup",
    "Multi-Cloud Strategy",
    "DevOps Integration",
  ];

  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration of legacy systems to modern cloud platforms with zero downtime",
    },
    {
      icon: Server,
      title: "Infrastructure Setup",
      description: "Design and deploy scalable, secure cloud infrastructure tailored to your needs",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance for HIPAA, GDPR, SOC 2, and more",
    },
    {
      icon: Activity,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines for faster, reliable software delivery",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Managed database solutions with automatic backups and high availability",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization for peak performance and cost efficiency",
    },
  ];

  const techStack = [
    { name: "AWS", icon: Cloud, description: "EC2, S3, Lambda, RDS, CloudFront" },
    { name: "Google Cloud", icon: Server, description: "Compute Engine, Cloud Functions, BigQuery" },
    { name: "Azure", icon: Shield, description: "Virtual Machines, Azure Functions, Cosmos DB" },
    { name: "Docker & Kubernetes", icon: Zap, description: "Container orchestration & deployment" },
    { name: "Terraform", icon: Settings, description: "Infrastructure as Code (IaC)" },
    { name: "Jenkins & GitLab CI", icon: GitBranch, description: "Continuous Integration & Deployment" },
  ];

  const projects = [
    {
      title: "E-commerce Cloud Migration",
      description: "Migrated a high-traffic retail platform to AWS with 40% cost reduction",
      tech: "AWS, Docker, Kubernetes",
    },
    {
      title: "Healthcare SaaS Deployment",
      description: "HIPAA-compliant cloud infrastructure for medical data management",
      tech: "Azure, PostgreSQL, Redis",
    },
    {
      title: "Fintech Auto-Scaling Solution",
      description: "Built scalable payment processing system handling 10K+ transactions/min",
      tech: "GCP, Cloud Functions, Pub/Sub",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "99.9%", label: "Uptime SLA" },
    { icon: Clock, value: "< 2min", label: "Deployment Time" },
    { icon: Users, value: "100+", label: "Projects Deployed" },
    { icon: Target, value: "40%", label: "Avg Cost Savings" },
  ];

  const architectures = [
    {
      title: "Microservices",
      description: "Scalable, independently deployable services",
      features: ["Container-based", "API Gateway", "Service mesh"],
    },
    {
      title: "Serverless",
      description: "Event-driven, zero-server management",
      features: ["Lambda/Functions", "Auto-scaling", "Pay-per-use"],
    },
    {
      title: "Hybrid Cloud",
      description: "Best of on-premise and cloud",
      features: ["Flexibility", "Data sovereignty", "Gradual migration"],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Assessment & Planning",
      description: "Evaluate current infrastructure and design cloud strategy",
    },
    {
      step: "2",
      title: "Architecture Design",
      description: "Create scalable, secure architecture aligned with business goals",
    },
    {
      step: "3",
      title: "Migration & Deployment",
      description: "Execute migration with minimal downtime and risk",
    },
    {
      step: "4",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and 24/7 support",
    },
  ];

  const securityFeatures = [
    { icon: Lock, title: "Data Encryption", description: "End-to-end encryption at rest and in transit" },
    { icon: Shield, title: "Access Control", description: "Role-based access control (RBAC) and MFA" },
    { icon: Activity, title: "Real-time Monitoring", description: "24/7 threat detection and alerting" },
    { icon: HardDrive, title: "Backup & Recovery", description: "Automated backups with disaster recovery" },
  ];

  const industries = [
    { name: "E-commerce", use: "High-availability infrastructure for seasonal traffic spikes" },
    { name: "Healthcare", use: "HIPAA-compliant secure data storage and processing" },
    { name: "Finance", use: "PCI-DSS compliant payment processing systems" },
    { name: "SaaS", use: "Multi-tenant architectures with auto-scaling" },
    { name: "Media", use: "CDN and streaming infrastructure for content delivery" },
    { name: "Education", use: "Scalable platforms for online learning and collaboration" },
  ];

  const phoneNumber = "919335059380";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Cloud Services & Deployment")}`;

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-28 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Cloud className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Cloud Services & Deployment
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Scalable, secure, and cost-effective cloud infrastructure for modern applications
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white bg-blue text-white hover:bg-white/10"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
              Enterprise-Grade <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cloud Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Deploy, manage, and scale your applications with confidence. Our cloud services cover everything from initial architecture design to ongoing DevOps support. We specialize in AWS, Google Cloud, and Azure, ensuring your infrastructure is optimized for performance, security, and cost.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're migrating legacy systems or building cloud-native applications, we provide end-to-end solutions including CI/CD pipelines, containerization, serverless architecture, and multi-cloud strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <Icon className="w-10 h-10 mx-auto mb-3 opacity-90" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4" />
                  Modern Cloud Infrastructure
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Build on <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reliable Infrastructure</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our cloud solutions are built on industry-leading platforms with enterprise-grade reliability, security, and performance. Scale seamlessly from startup to enterprise.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Global data centers with low-latency delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Auto-scaling to handle traffic spikes effortlessly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cost optimization with intelligent resource management</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" 
                  alt="Cloud Infrastructure Network" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cloud Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* DevOps Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop" 
                  alt="DevOps CI/CD Pipeline" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <GitBranch className="w-4 h-4" />
                  DevOps Excellence
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Accelerate with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CI/CD Pipelines</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Implement robust DevOps practices with automated testing, continuous integration, and deployment pipelines. Ship features faster with confidence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Automated testing and quality assurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Zero-downtime deployments with rollback capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Infrastructure as Code for consistent environments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cloud Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Cloud <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Architecture Patterns</span>
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right architecture pattern for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {architectures.map((arch, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Layers className="w-10 h-10 text-blue-600 mb-3" />
                  <CardTitle className="text-xl mb-2">{arch.title}</CardTitle>
                  <CardDescription className="text-sm mb-4">
                    {arch.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {arch.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Technologies We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Master</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                      <Icon className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-lg text-center">{tech.name}</CardTitle>
                    <CardDescription className="text-sm text-center mt-2">
                      {tech.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Shield className="w-4 h-4" />
                  Enterprise Security
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Security & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Compliance First</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Protect your data and meet regulatory requirements with our comprehensive security solutions. Built-in compliance for HIPAA, GDPR, SOC 2, and more.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {securityFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Icon className="text-blue-600 w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm mb-1">{feature.title}</div>
                          <div className="text-xs text-gray-600">{feature.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop" 
                  alt="Cloud Security and Protection" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Implementation Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              A proven methodology for successful cloud deployments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-gray-600">
                    <strong>Tech:</strong> {project.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-lg text-gray-600">
              Tailored cloud solutions for diverse industry needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    {industry.name}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {industry.use}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Dashboard Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                  alt="Cloud Monitoring Dashboard" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Activity className="w-4 h-4" />
                  24/7 Monitoring
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Always-On <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Performance</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Stay ahead of issues with real-time monitoring, automated alerts, and proactive maintenance. Our team ensures your infrastructure runs smoothly 24/7.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Real-time performance metrics and dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Automated incident detection and response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Predictive analytics for capacity planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss your cloud requirements and build a solution that grows with your business.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Chat on WhatsApp
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white bg-blue hover:bg-white/40"
                onClick={() => window.location.href = "/contact"}
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;