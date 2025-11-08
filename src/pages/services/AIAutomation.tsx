// import { Cpu, Bot, Workflow, Zap, CheckCircle, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// const AIAutomation = () => {
//   const benefits = [
//     "Custom AI Chatbots & Virtual Assistants",
//     "Process Automation & RPA",
//     "CRM & ERP Integration",
//     "Workflow Optimization",
//     "Data Processing Automation",
//     "AI-Powered Analytics",
//     "Email & Marketing Automation",
//     "Document Processing (OCR/NLP)",
//   ];

//   const solutions = [
//     {
//       icon: Bot,
//       title: "AI Chatbots",
//       description: "Intelligent conversational AI for customer support and engagement",
//     },
//     {
//       icon: Workflow,
//       title: "Business Automation",
//       description: "Streamline operations with custom CRM/ERP and workflow tools",
//     },
//     {
//       icon: Cpu,
//       title: "Machine Learning",
//       description: "Predictive analytics and intelligent decision-making systems",
//     },
//     {
//       icon: Zap,
//       title: "Integration Solutions",
//       description: "Connect and automate your entire software ecosystem",
//     },
//   ];

//   const projects = [
//     {
//       title: "AI Customer Support Bot",
//       description: "Reduced support tickets by 60% for SaaS company with 24/7 AI assistant",
//       tech: "GPT-4, Python, FastAPI",
//     },
//     {
//       title: "CRM Automation System",
//       description: "Built custom CRM automating sales pipeline and reducing manual work by 75%",
//       tech: "Node.js, PostgreSQL, React",
//     },
//     {
//       title: "Document Processing AI",
//       description: "Automated invoice processing saving 40 hours/week for accounting firm",
//       tech: "OCR, NLP, Azure AI",
//     },
//   ];

//   const phoneNumber = "919335059380";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in AI Automation & Agents")}`;

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
//             <Cpu className="w-16 h-16 mx-auto mb-6" />
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//               AI Automation & Agents
//             </h1>
//             <p className="text-xl text-white/90 mb-8">
//               Transform your business with intelligent automation and AI-powered solutions
//             </p>
//             <div className="flex gap-4 justify-center">
//               <Button 
//                 size="lg" 
//                 className="bg-white text-primary hover:bg-white/90"
//                 onClick={() => window.open(whatsappUrl, "_blank")}
//               >
//                 Get Free Demo
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
//               Automate Everything with <span className="gradient-text">AI</span>
//             </h2>
//             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//               Unlock the power of artificial intelligence and automation to streamline your business operations. From intelligent chatbots that handle customer queries 24/7 to custom CRM/ERP systems that eliminate manual tasks—we build AI solutions that save time, reduce costs, and drive growth.
//             </p>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Our expertise spans natural language processing, machine learning, robotic process automation (RPA), and custom AI agents. We help businesses automate repetitive tasks, gain insights from data, and deliver exceptional customer experiences.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Solutions Grid */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Our AI <span className="gradient-text">Solutions</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {solutions.map((solution, index) => {
//               const Icon = solution.icon;
//               return (
//                 <Card key={index} className="hover:shadow-lg transition-smooth">
//                   <CardHeader>
//                     <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
//                       <Icon className="text-white" size={28} />
//                     </div>
//                     <CardTitle className="text-lg">{solution.title}</CardTitle>
//                     <CardDescription className="text-sm mt-2">
//                       {solution.description}
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
//             What We <span className="gradient-text">Deliver</span>
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
//             Automation <span className="gradient-text">Success Stories</span>
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
//               Ready to Automate Your Business?
//             </h2>
//             <p className="text-lg text-white/90 mb-8">
//               Let's discuss how AI and automation can transform your operations and boost productivity.
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
//                 Schedule Demo
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AIAutomation;

import { Cpu, Bot, Workflow, Zap, CheckCircle, ArrowRight, Brain, TrendingUp, Shield, Clock, Users, BarChart3, MessageSquare, FileText, Database, GitBranch, Sparkles, Target, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AIAutomation = () => {
  const benefits = [
    "Custom AI Chatbots & Virtual Assistants",
    "Process Automation & RPA",
    "CRM & ERP Integration",
    "Workflow Optimization",
    "Data Processing Automation",
    "AI-Powered Analytics",
    "Email & Marketing Automation",
    "Document Processing (OCR/NLP)",
  ];

  const solutions = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational AI for customer support and engagement",
    },
    {
      icon: Workflow,
      title: "Business Automation",
      description: "Streamline operations with custom CRM/ERP and workflow tools",
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Predictive analytics and intelligent decision-making systems",
    },
    {
      icon: Zap,
      title: "Integration Solutions",
      description: "Connect and automate your entire software ecosystem",
    },
  ];

  const projects = [
    {
      title: "AI Customer Support Bot",
      description: "Reduced support tickets by 60% for SaaS company with 24/7 AI assistant",
      tech: "GPT-4, Python, FastAPI",
    },
    {
      title: "CRM Automation System",
      description: "Built custom CRM automating sales pipeline and reducing manual work by 75%",
      tech: "Node.js, PostgreSQL, React",
    },
    {
      title: "Document Processing AI",
      description: "Automated invoice processing saving 40 hours/week for accounting firm",
      tech: "OCR, NLP, Azure AI",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "85%", label: "Average Cost Reduction" },
    { icon: Clock, value: "40hrs", label: "Saved Per Week" },
    { icon: Users, value: "500+", label: "Automation Tasks" },
    { icon: Target, value: "99.8%", label: "Accuracy Rate" },
  ];

  const industries = [
    { name: "E-commerce", description: "Inventory management, customer service automation" },
    { name: "Healthcare", description: "Patient scheduling, medical data processing" },
    { name: "Finance", description: "Fraud detection, automated reporting" },
    { name: "Real Estate", description: "Lead qualification, property management" },
    { name: "Manufacturing", description: "Quality control, supply chain optimization" },
    { name: "Education", description: "Student support, content generation" },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your workflows to identify automation opportunities",
    },
    {
      step: "2",
      title: "Strategy & Design",
      description: "Custom AI solution architecture tailored to your needs",
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Build and rigorously test your AI automation system",
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Seamless integration with ongoing optimization",
    },
  ];

  const technologies = [
    { name: "OpenAI GPT-4", category: "Language Models" },
    { name: "Claude AI", category: "Language Models" },
    { name: "TensorFlow", category: "Machine Learning" },
    { name: "PyTorch", category: "Deep Learning" },
    { name: "LangChain", category: "AI Frameworks" },
    { name: "Zapier/Make", category: "Integration" },
  ];

  const phoneNumber = "919335059380";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in AI Automation & Agents")}`;

  return (
    <div className="min-h-screen">

      
      {/* Hero Banner */}
      <section className="relative py-28 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Cpu className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              AI Automation & Agents
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transform your business with intelligent automation and AI-powered solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-2xl">
                Get Free Consultation
              </Button>
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-6 shadow-2xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
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
              Automate Everything with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Unlock the power of artificial intelligence and automation to streamline your business operations. From intelligent chatbots that handle customer queries 24/7 to custom CRM/ERP systems that eliminate manual tasks—we build AI solutions that save time, reduce costs, and drive growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our expertise spans natural language processing, machine learning, robotic process automation (RPA), and custom AI agents. We help businesses automate repetitive tasks, gain insights from data, and deliver exceptional customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
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

      {/* AI Agent Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered Intelligence
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Smart Agents That Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">For You</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI agents are designed to understand context, learn from interactions, and make intelligent decisions. They seamlessly integrate with your existing systems to automate complex workflows.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Natural language understanding for human-like interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Multi-channel support (web, mobile, WhatsApp, Slack)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Continuous learning and improvement from data</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop" 
                  alt="AI Agent Interface" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our AI <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Deliver</span>
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

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Automation <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
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

      {/* Automation Process Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                  alt="Business Automation Dashboard" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Workflow className="w-4 h-4" />
                  Process Automation
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Streamline Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Operations</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Transform manual, time-consuming processes into automated workflows. Our solutions integrate seamlessly with your existing tools and scale with your business.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Eliminate repetitive tasks and human error</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Real-time monitoring and performance analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Scalable solutions that grow with your business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Implementation Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              A proven methodology to deliver AI automation solutions on time and on budget
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transform</span>
            </h2>
            <p className="text-lg text-gray-600">
              AI automation solutions tailored to your industry's unique challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Cutting-Edge <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-lg text-gray-600">
              We leverage the latest AI and automation technologies to build robust solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-gray-600">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Analytics Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <BarChart3 className="w-4 h-4" />
                  Data-Driven Insights
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  AI-Powered <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Analytics</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Turn your data into actionable insights with machine learning algorithms that predict trends, identify patterns, and optimize decision-making.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Predictive analytics for informed business decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Real-time dashboards and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Custom KPIs and performance metrics</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                  alt="Data Analytics Dashboard" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CardTitle className="text-lg mb-2">Security First</CardTitle>
                <CardDescription>
                  Enterprise-grade security with data encryption and compliance with industry standards
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Brain className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CardTitle className="text-lg mb-2">AI Expertise</CardTitle>
                <CardDescription>
                  Deep expertise in machine learning, NLP, and cutting-edge AI technologies
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CardTitle className="text-lg mb-2">Rapid Deployment</CardTitle>
                <CardDescription>
                  Fast implementation with minimal disruption to your existing operations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss how AI and automation can transform your operations and boost productivity.
            </p>
            <div className="flex gap-4 justify-center">
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
                className="border-white bg-blue-600 text-white hover:bg-white/10"
                onClick={() => window.location.href = "/contact"}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;