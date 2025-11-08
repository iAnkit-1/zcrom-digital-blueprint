// import { Search, TrendingUp, Target, BarChart, CheckCircle, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// const SEOMarketing = () => {
//   const benefits = [
//     "Keyword Research & Strategy",
//     "On-Page SEO Optimization",
//     "Technical SEO Audits",
//     "Content Marketing Strategy",
//     "Link Building Campaigns",
//     "Local SEO for Businesses",
//     "Analytics & Reporting",
//     "Conversion Rate Optimization",
//   ];

//   const services = [
//     {
//       icon: Search,
//       title: "SEO Optimization",
//       description: "Rank higher on Google with comprehensive on-page and off-page SEO",
//     },
//     {
//       icon: Target,
//       title: "PPC Campaigns",
//       description: "Google Ads & social media advertising for maximum ROI",
//     },
//     {
//       icon: TrendingUp,
//       title: "Social Media Marketing",
//       description: "Build engagement across Instagram, Facebook, LinkedIn & more",
//     },
//     {
//       icon: BarChart,
//       title: "Analytics & Insights",
//       description: "Data-driven decisions with detailed performance tracking",
//     },
//   ];

//   const projects = [
//     {
//       title: "E-commerce SEO Growth",
//       description: "Increased organic traffic by 350% in 6 months for fashion retailer",
//       result: "+350% Traffic",
//     },
//     {
//       title: "Local SEO for Restaurant Chain",
//       description: "Ranked #1 for 25+ local keywords across 10 cities",
//       result: "#1 Rankings",
//     },
//     {
//       title: "SaaS Content Marketing",
//       description: "Generated 5000+ qualified leads through content strategy",
//       result: "5K+ Leads",
//     },
//   ];

//   const phoneNumber = "919696726607";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in SEO & Digital Marketing")}`;

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
//             <Search className="w-16 h-16 mx-auto mb-6" />
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//               SEO & Digital Marketing
//             </h1>
//             <p className="text-xl text-white/90 mb-8">
//               Boost your online visibility and drive qualified traffic that converts
//             </p>
//             <div className="flex gap-4 justify-center">
//               <Button 
//                 size="lg" 
//                 className="bg-white text-primary hover:bg-white/90"
//                 onClick={() => window.open(whatsappUrl, "_blank")}
//               >
//                 Get Free SEO Audit
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
//               Grow Your Business <span className="gradient-text">Online</span>
//             </h2>
//             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//               In today's digital landscape, being found online is critical. Our SEO and digital marketing services help you dominate search rankings, attract your target audience, and convert visitors into customers. We combine data-driven strategies with creative execution to deliver measurable results.
//             </p>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               From comprehensive SEO audits to social media campaigns, PPC advertising, and content marketing—we provide end-to-end digital marketing solutions tailored to your business goals.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Our <span className="gradient-text">Services</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {services.map((service, index) => {
//               const Icon = service.icon;
//               return (
//                 <Card key={index} className="hover:shadow-lg transition-smooth">
//                   <CardHeader>
//                     <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
//                       <Icon className="text-white" size={28} />
//                     </div>
//                     <CardTitle className="text-lg">{service.title}</CardTitle>
//                     <CardDescription className="text-sm mt-2">
//                       {service.description}
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
//             Proven <span className="gradient-text">Results</span>
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
//                     {project.result}
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
//               Ready to Dominate Search Rankings?
//             </h2>
//             <p className="text-lg text-white/90 mb-8">
//               Get a free SEO audit and discover how we can boost your online presence.
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
//                 Request Free Audit
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SEOMarketing;


import { Search, TrendingUp, Target, BarChart, CheckCircle, ArrowRight, Users, Award, Zap, Globe, LineChart, MousePointerClick, MessageSquare, Mail, Megaphone, FileText, PenTool, Sparkles, Eye, Heart, Share2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SEOMarketing = () => {
  const benefits = [
    "Keyword Research & Strategy",
    "On-Page SEO Optimization",
    "Technical SEO Audits",
    "Content Marketing Strategy",
    "Link Building Campaigns",
    "Local SEO for Businesses",
    "Analytics & Reporting",
    "Conversion Rate Optimization",
  ];

  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Rank higher on Google with comprehensive on-page and off-page SEO",
    },
    {
      icon: Target,
      title: "PPC Campaigns",
      description: "Google Ads & social media advertising for maximum ROI",
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Build engagement across Instagram, Facebook, LinkedIn & more",
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Data-driven decisions with detailed performance tracking",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Automated campaigns that nurture leads and drive conversions",
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "High-quality blog posts, videos, and graphics that engage",
    },
  ];

  const projects = [
    {
      title: "E-commerce SEO Growth",
      description: "Increased organic traffic by 350% in 6 months for fashion retailer",
      result: "+350% Traffic",
    },
    {
      title: "Local SEO for Restaurant Chain",
      description: "Ranked #1 for 25+ local keywords across 10 cities",
      result: "#1 Rankings",
    },
    {
      title: "SaaS Content Marketing",
      description: "Generated 5000+ qualified leads through content strategy",
      result: "5K+ Leads",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "250%", label: "Avg Traffic Increase" },
    { icon: Users, value: "10K+", label: "Leads Generated" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
    { icon: Globe, value: "50+", label: "Businesses Scaled" },
  ];

  const seoProcess = [
    {
      step: "1",
      title: "SEO Audit & Research",
      description: "Comprehensive analysis of your website and competitor landscape",
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Custom SEO roadmap with keyword targeting and content plan",
    },
    {
      step: "3",
      title: "Implementation",
      description: "On-page optimization, technical fixes, and content creation",
    },
    {
      step: "4",
      title: "Monitor & Optimize",
      description: "Continuous tracking, reporting, and strategy refinement",
    },
  ];

  const digitalServices = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      points: ["Technical SEO", "On-page optimization", "Link building", "Local SEO"],
    },
    {
      icon: Megaphone,
      title: "Paid Advertising",
      points: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Display campaigns"],
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      points: ["Content calendar", "Community engagement", "Influencer outreach", "Paid social"],
    },
    {
      icon: FileText,
      title: "Content Marketing",
      points: ["Blog writing", "Video production", "Infographics", "E-books & guides"],
    },
  ];

  const industries = [
    { name: "E-commerce", icon: ShoppingCart, focus: "Product SEO & conversion optimization" },
    { name: "Healthcare", icon: Heart, focus: "Local SEO & patient acquisition" },
    { name: "Real Estate", icon: Globe, focus: "Location-based marketing & lead gen" },
    { name: "SaaS", icon: Zap, focus: "Content marketing & demo signups" },
    { name: "Education", icon: FileText, focus: "Student enrollment & brand awareness" },
    { name: "Professional Services", icon: Award, focus: "Reputation management & leads" },
  ];

  const ppcMetrics = [
    { metric: "ROAS", value: "450%", description: "Return on Ad Spend" },
    { metric: "CPC", value: "-35%", description: "Reduced Cost Per Click" },
    { metric: "CTR", value: "+180%", description: "Click-Through Rate Increase" },
    { metric: "Conversions", value: "+220%", description: "Qualified Leads Growth" },
  ];

  const contentTypes = [
    { type: "Blog Posts", icon: FileText, description: "SEO-optimized articles" },
    { type: "Social Media", icon: Share2, description: "Engaging posts & stories" },
    { type: "Video Content", icon: Eye, description: "YouTube & social videos" },
    { type: "Email Campaigns", icon: Mail, description: "Newsletters & automations" },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in SEO & Digital Marketing")}`;

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-28 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Search className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              SEO & Digital Marketing
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Boost your online visibility and drive qualified traffic that converts
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get Free SEO Audit
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white  bg-blue-500 text-white hover:bg-white/10"
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
              Grow Your Business <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Online</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              In today's digital landscape, being found online is critical. Our SEO and digital marketing services help you dominate search rankings, attract your target audience, and convert visitors into customers. We combine data-driven strategies with creative execution to deliver measurable results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From comprehensive SEO audits to social media campaigns, PPC advertising, and content marketing—we provide end-to-end digital marketing solutions tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600">
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

      {/* SEO Strategy Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4" />
                  SEO Excellence
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Dominate Search <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Rankings</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our proven SEO strategies help businesses rank on the first page of Google. We optimize every aspect of your online presence—from technical SEO to content strategy and link building.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Comprehensive keyword research and targeting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Technical SEO audits and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">High-quality backlink building campaigns</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                  alt="SEO Analytics Dashboard" 
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
            Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center mb-4">
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

      {/* Social Media Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop" 
                  alt="Social Media Marketing" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Share2 className="w-4 h-4" />
                  Social Media Power
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Engage Your <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Audience</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Build a loyal community and drive engagement across all major social platforms. Our social media strategies combine organic content with targeted paid campaigns.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Platform-specific content strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Community management and engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Influencer partnerships and collaborations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Complete Digital <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Marketing Suite</span>
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to succeed online, all under one roof
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {digitalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                        <ul className="space-y-2">
                          {service.points.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PPC Advertising Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Target className="w-4 h-4" />
                  Paid Advertising
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Maximize Your <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Ad ROI</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get instant visibility with expertly managed PPC campaigns. We optimize every dollar spent to deliver qualified leads and measurable results.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {ppcMetrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600 mb-1">{metric.value}</div>
                      <div className="text-xs font-semibold text-gray-900 mb-1">{metric.metric}</div>
                      <div className="text-xs text-gray-600">{metric.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop" 
                  alt="PPC Campaign Dashboard" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What We <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Deliver</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">SEO Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to dominating search rankings
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {seoProcess.map((item, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
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

      {/* Content Marketing Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop" 
                  alt="Content Marketing Strategy" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <PenTool className="w-4 h-4" />
                  Content That Converts
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Tell Your <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Brand Story</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Engage your audience with compelling content that educates, entertains, and converts. From blog posts to videos, we create content that drives results.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {contentTypes.map((type, index) => {
                    const Icon = type.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-200">
                        <Icon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm mb-1">{type.type}</div>
                          <div className="text-xs text-gray-600">{type.description}</div>
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

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Industries We <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Excel In</span>
            </h2>
            <p className="text-lg text-gray-600">
              Specialized marketing strategies for your industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-600">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6 text-green-600" />
                      <CardTitle className="text-lg">{industry.name}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      {industry.focus}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Proven <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Results</span>
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
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-sm font-semibold">
                    {project.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <LineChart className="w-4 h-4" />
                  Data-Driven Results
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Track Every <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Metric</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Transparency is key to our approach. You'll receive detailed monthly reports showing exactly how your campaigns are performing and where your budget is going.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Real-time analytics dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Monthly performance reports and insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">ROI tracking and conversion optimization</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                  alt="Marketing Analytics Dashboard" 
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
              Why Choose <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Our Agency</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <CardTitle className="text-lg mb-2">Proven Track Record</CardTitle>
                <CardDescription>
                  Hundreds of successful campaigns with measurable ROI improvements
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <CardTitle className="text-lg mb-2">Dedicated Team</CardTitle>
                <CardDescription>
                  Expert SEO specialists, content creators, and PPC managers
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <CardTitle className="text-lg mb-2">Fast Results</CardTitle>
                <CardDescription>
                  See improvements within 30-90 days with our proven strategies
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get a free SEO audit and discover how we can boost your online presence.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Chat on WhatsApp
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white bg-blue-500 text-white hover:bg-white/10"
                onClick={() => window.location.href = "/contact"}
              >
                Request Free Audit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOMarketing;