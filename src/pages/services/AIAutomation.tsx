import { Cpu, Bot, Workflow, Zap, CheckCircle, ArrowRight } from "lucide-react";
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

  const phoneNumber = "919335059380";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in AI Automation & Agents")}`;

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-primary overflow-hidden">
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
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get Free Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
              Automate Everything with <span className="gradient-text">AI</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Unlock the power of artificial intelligence and automation to streamline your business operations. From intelligent chatbots that handle customer queries 24/7 to custom CRM/ERP systems that eliminate manual tasks—we build AI solutions that save time, reduce costs, and drive growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expertise spans natural language processing, machine learning, robotic process automation (RPA), and custom AI agents. We help businesses automate repetitive tasks, gain insights from data, and deliver exceptional customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our AI <span className="gradient-text">Solutions</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What We <span className="gradient-text">Deliver</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
              >
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Automation <span className="gradient-text">Success Stories</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <strong>Tech:</strong> {project.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-primary rounded-2xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss how AI and automation can transform your operations and boost productivity.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Chat on WhatsApp
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
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
