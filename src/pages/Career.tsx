// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { 
//   Briefcase, ArrowRight, MapPin, 
//   X, CheckCircle, Upload, Mail, Phone, Linkedin, Github, 
//   Users, Globe, TrendingUp
// } from "lucide-react";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

// const Career = () => {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [showApplicationForm, setShowApplicationForm] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     location: '',
//     linkedin: '',
//     github: '',
//     portfolio: '',
//     experience: '',
//     coverLetter: '',
//     resume: null
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const jobs = [
//     {
//       id: 1,
//       title: "Frontend Developer",
//       desc: "Craft pixel-perfect, responsive interfaces using React, Next.js, and Tailwind.",
//       type: "Full-time",
//       location: "Remote / India",
//       department: "Engineering",
//       badge: "Hot",
//       fullDescription: "As a Frontend Developer at ZCROM, you'll be at the forefront of creating stunning, high-performance web applications that delight users and drive business results. You'll work with the latest technologies and frameworks to build scalable, maintainable codebases.",
//       responsibilities: [
//         "Develop responsive and intuitive user interfaces using React, Next.js, and TypeScript",
//         "Collaborate with designers to implement pixel-perfect designs",
//         "Optimize application performance and ensure cross-browser compatibility",
//         "Write clean, maintainable code with comprehensive testing",
//         "Participate in code reviews and mentor junior developers"
//       ],
//       requirements: [
//         "1+ years of experience with React and modern JavaScript/TypeScript",
//         "Strong understanding of HTML5, CSS3, and responsive design principles",
//         "Experience with state management (Redux, Zustand, or similar)",
//         "Proficiency in Tailwind CSS or other utility-first frameworks",
//         "Knowledge of Git, CI/CD, and agile methodologies"
//       ],
//       benefits: [
//         "Competitive salary and equity",
//         "Health insurance for you and your family",
//         "Flexible work hours and remote options",
//         "Annual learning and development budget",
//         "Latest hardware of your choice"
//       ]
//     },
//     {
//       id: 2,
//       title: "Backend Developer",
//       desc: "Build robust, scalable APIs and microservices. Master system design and databases.",
//       type: "Full-time",
//       location: "Remote / India",
//       department: "Engineering",
//       badge: "Urgent",
//       fullDescription: "Join our backend team to architect and build scalable, high-performance systems that power our applications. You'll work on challenging problems involving distributed systems, databases, and cloud infrastructure.",
//       responsibilities: [
//         "Design and develop RESTful APIs and microservices",
//         "Build scalable backend systems using Node.js, Python, or Go",
//         "Optimize database queries and design efficient data models",
//         "Implement security best practices and authentication systems",
//         "Deploy and maintain applications on cloud platforms (AWS, GCP, Azure)"
//       ],
//       requirements: [
//         "2+ years of backend development experience",
//         "Strong knowledge of Node.js, Python, or Go",
//         "Experience with SQL and NoSQL databases",
//         "Understanding of microservices architecture",
//         "Experience with Docker and cloud platforms"
//       ],
//       benefits: [
//         "Competitive salary and equity",
//         "Health insurance for you and your family",
//         "Flexible work hours and remote options",
//         "Annual learning and development budget",
//         "Latest hardware of your choice"
//       ]
//     },
//     {
//       id: 3,
//       title: "UI/UX Designer",
//       desc: "Design breathtaking user experiences that blend aesthetics with intuitive functionality.",
//       type: "Contract",
//       location: "Hybrid",
//       department: "Design",
//       badge: "New",
//       fullDescription: "As a UI/UX Designer at ZCROM, you'll craft beautiful, user-centered designs that solve real problems. You'll own the entire design process from research to final implementation.",
//       responsibilities: [
//         "Create wireframes, prototypes, and high-fidelity mockups",
//         "Conduct user research and usability testing",
//         "Design intuitive user flows and information architecture",
//         "Collaborate with developers to ensure design feasibility",
//         "Maintain and evolve design systems"
//       ],
//       requirements: [
//         "3+ years of UI/UX design experience",
//         "Proficiency in Figma, Adobe XD, or Sketch",
//         "Strong portfolio demonstrating design thinking",
//         "Understanding of design systems",
//         "Excellent communication skills"
//       ],
//       benefits: [
//         "Flexible working arrangements",
//         "Opportunity to convert to full-time position",
//         "Access to premium design tools",
//         "Collaborative creative environment",
//         "Regular design workshops"
//       ]
//     }
//   ];

//   const handleApplyClick = (job) => {
//     setSelectedJob(job);
//     setShowApplicationForm(false);
//     setSubmitted(false);
//   };

//   const handleProceedToApplication = () => {
//     setShowApplicationForm(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => {
//       handleClose();
//       setFormData({
//         fullName: '', email: '', phone: '', location: '', linkedin: '',
//         github: '', portfolio: '', experience: '', coverLetter: '', resume: null
//       });
//     }, 3000);
//   };

//   const handleClose = () => {
//     setSelectedJob(null);
//     setShowApplicationForm(false);
//     setSubmitted(false);
//   };

//   return (
//     <div className="min-h-screen bg-background flex flex-col mt-10">
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="container mx-auto mt-28 px-4 lg:px-8 py-18">
//           <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
//             <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
//               Join Our Team{" "}
//               <span className="gradient-text relative inline-block">
//                 ZCROM
//                 <svg
//                   className="absolute -bottom-3 left-0 w-full h-3"
//                   viewBox="0 0 200 12"
//                   preserveAspectRatio="none"
//                 >
//                   <path
//                     d="M0,10 Q100,0 200,10"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     className="text-primary/40"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </span>
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               We are a dynamic team of creators and innovators redefining what's
//               possible in tech. Explore our open roles and find where you belong.
//             </p>

//             <div className="flex flex-wrap justify-center gap-8 mt-12">
//               <div className="flex items-center gap-2">
//                 <Users className="text-primary h-5 w-5" />
//                 <span className="font-medium">50+ Team Members</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Globe className="text-primary h-5 w-5" />
//                 <span className="font-medium">Remote-First Culture</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <TrendingUp className="text-primary h-5 w-5" />
//                 <span className="font-medium">Fast Growing</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Open Positions */}
//         <section className="py-16 container mx-auto px-4 lg:px-8" id="openings">
//           <div className="flex items-center justify-between mb-10">
//             <h2 className="text-3xl font-bold flex items-center gap-3">
//               <Briefcase className="h-8 w-8 text-primary" />
//               Current Openings
//             </h2>
//           </div>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {jobs.map((job) => (
//               <div
//                 key={job.id}
//                 className="bg-card border rounded-xl p-6 hover:shadow-md transition-all duration-200 flex flex-col"
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-xl font-semibold text-card-foreground">
//                       {job.title}
//                     </h3>
//                     <p className="text-sm text-primary font-medium mt-1">
//                       {job.department}
//                     </p>
//                   </div>
//                   {job.badge && (
//                     <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
//                       {job.badge}
//                     </span>
//                   )}
//                 </div>

//                 <p className="text-muted-foreground text-sm mb-6 flex-grow">
//                   {job.desc}
//                 </p>

//                 <div className="flex items-center justify-between mt-auto pt-4 border-t">
//                   <div className="flex flex-col text-xs text-muted-foreground font-medium gap-1">
//                     <span>{job.type}</span>
//                     <span className="flex items-center gap-1">
//                       <MapPin size={12} /> {job.location}
//                     </span>
//                   </div>
//                   <Button
//                     onClick={() => handleApplyClick(job)}
//                     className="transition-all text-white"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
//                     }}
//                   >
//                     View Role
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* General Application CTA */}
//           <div
//             className="mt-16 p-8 rounded-xl text-center border text-white"
//             style={{
//               background:
//                 "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
//             }}
//           >
//             <h3 className="text-2xl font-semibold mb-3">
//               Don't see the right role?
//             </h3>
//             <p className="text-sm mb-6 max-w-2xl mx-auto opacity-90">
//               We're always looking for exceptional talent. Feel free to send us
//               your resume for future consideration.
//             </p>
//             <Button
//               asChild
//               size="lg"
//               className="text-white border-0 hover:opacity-90"
//               style={{
//                 background:
//                   "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
//               }}
//             >
//               <a href="mailto:careers@zcrom.com">
//                 Email Us Your Resume <ArrowRight className="ml-2 h-4 w-4" />
//               </a>
//             </Button>
//           </div>
//         </section>
//       </main>

//       <Footer />

//       {/* --- MODALS --- */}

//       {/* Job Details Modal */}
//       {selectedJob && !showApplicationForm && (
//         <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-card border shadow-lg rounded-xl max-w-3xl w-full my-8 relative overflow-hidden">
//             <div className="sticky top-0 bg-card z-10 px-6 py-4 border-b flex justify-between items-center">
//               <div>
//                 <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
//                 <p className="text-muted-foreground text-sm flex items-center gap-3 mt-1">
//                   <span>{selectedJob.department}</span> •
//                   <span>{selectedJob.type}</span> •
//                   <span className="flex items-center gap-1">
//                     <MapPin size={14} /> {selectedJob.location}
//                   </span>
//                 </p>
//               </div>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={handleClose}
//                 className="rounded-full"
//               >
//                 <X size={20} />
//               </Button>
//             </div>

//             <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
//               <div className="prose max-w-none dark:prose-invert">
//                 <h3 className="text-lg font-semibold mb-2">About the Role</h3>
//                 <p className="text-muted-foreground mb-8">
//                   {selectedJob.fullDescription}
//                 </p>

//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div>
//                     <h3 className="text-lg font-semibold mb-4">
//                       Responsibilities
//                     </h3>
//                     <ul className="space-y-3">
//                       {selectedJob.responsibilities.map((item, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-start gap-3 text-sm text-muted-foreground"
//                         >
//                           <CheckCircle className="h-5 w-5 text-primary shrink-0" />
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold mb-4">Requirements</h3>
//                     <ul className="space-y-3">
//                       {selectedJob.requirements.map((item, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-start gap-3 text-sm text-muted-foreground"
//                         >
//                           <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mt-8 pt-8 border-t">
//                   <h3 className="text-lg font-semibold mb-4">
//                     Benefits & Perks
//                   </h3>
//                   <ul className="grid sm:grid-cols-2 gap-3">
//                     {selectedJob.benefits.map((item, idx) => (
//                       <li
//                         key={idx}
//                         className="flex items-center gap-2 text-sm text-muted-foreground"
//                       >
//                         <span className="text-primary">•</span> {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 border-t bg-muted/20 flex justify-end gap-3">
//               <Button variant="outline" onClick={handleClose}>
//                 Close
//               </Button>
//               <Button
//                 onClick={handleProceedToApplication}
//                 size="lg"
//                 className="text-white border-0"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
//                 }}
//               >
//                 Apply for this position
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Application Form Modal */}
//       {showApplicationForm && !submitted && (
//         <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-card border shadow-lg rounded-xl max-w-2xl w-full my-8 relative">
//             <div className="px-6 py-4 border-b flex justify-between items-center sticky top-0 bg-card z-10 rounded-t-xl">
//               <h2 className="text-xl font-bold">
//                 Apply for {selectedJob.title}
//               </h2>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={handleClose}
//                 className="rounded-full"
//               >
//                 <X size={20} />
//               </Button>
//             </div>

//             <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Full Name *</label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       required
//                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Email *</label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         className="flex h-10 w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Phone *</label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
//                       <input
//                         type="tel"
//                         name="phone"
//                         required
//                         className="flex h-10 w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Location *</label>
//                     <div className="relative">
//                       <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
//                       <input
//                         type="text"
//                         name="location"
//                         required
//                         className="flex h-10 w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm"
//                         value={formData.location}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">
//                       LinkedIn Profile
//                     </label>
//                     <div className="relative">
//                       <Linkedin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
//                       <input
//                         type="url"
//                         name="linkedin"
//                         className="flex h-10 w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm"
//                         value={formData.linkedin}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">
//                       GitHub / Portfolio
//                     </label>
//                     <div className="relative">
//                       <Github className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
//                       <input
//                         type="url"
//                         name="portfolio"
//                         className="flex h-10 w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm"
//                         value={formData.portfolio}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Resume (PDF) *</label>
//                   <div className="flex items-center justify-center w-full">
//                     <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
//                       <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                         <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
//                         <p className="text-sm text-muted-foreground">
//                           {formData.resume ? (
//                             formData.resume.name
//                           ) : (
//                             <span className="font-semibold">
//                               Click to upload resume
//                             </span>
//                           )}
//                         </p>
//                         <p className="text-xs text-muted-foreground mt-1">
//                           PDF only (MAX. 5MB)
//                         </p>
//                       </div>
//                       <input
//                         type="file"
//                         className="hidden"
//                         accept=".pdf"
//                         onChange={handleFileChange}
//                         required
//                       />
//                     </label>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Cover Letter</label>
//                   <textarea
//                     name="coverLetter"
//                     rows={4}
//                     className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-y"
//                     placeholder="Tell us why you're a great fit..."
//                     value={formData.coverLetter}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="pt-4">
//                   <Button
//                     type="submit"
//                     size="lg"
//                     className="w-full text-white border-0"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
//                     }}
//                   >
//                     Submit Application
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Modal */}
//       {submitted && (
//         <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-card border shadow-lg rounded-xl max-w-md w-full p-8 text-center">
//             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
//               <CheckCircle className="text-green-600 dark:text-green-500 h-8 w-8" />
//             </div>
//             <h2 className="text-2xl font-bold mb-2">Application Received</h2>
//             <p className="text-muted-foreground mb-6">
//               Thank you for your interest in ZCROM. Our team will review your
//               application and get back to you shortly.
//             </p>
//             <Button variant="outline" onClick={handleClose}>
//               Close
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Career;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, ArrowRight, MapPin, 
  X, CheckCircle, Upload, Mail, Phone, Linkedin, Github, 
  Users, Globe, TrendingUp
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    portfolio: '',
    experience: '',
    coverLetter: '',
    resume: null
  });
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "Craft pixel-perfect, responsive interfaces using React, Next.js, and Tailwind.",
      type: "Full-time",
      location: "Remote / India",
      department: "Engineering",
      badge: "Hot",
      fullDescription: "As a Frontend Developer at ZCROM, you'll be at the forefront of creating stunning, high-performance web applications that delight users and drive business results. You'll work with the latest technologies and frameworks to build scalable, maintainable codebases.",
      responsibilities: [
        "Develop responsive and intuitive user interfaces using React, Next.js, and TypeScript",
        "Collaborate with designers to implement pixel-perfect designs",
        "Optimize application performance and ensure cross-browser compatibility",
        "Write clean, maintainable code with comprehensive testing",
        "Participate in code reviews and mentor junior developers"
      ],
      requirements: [
        "1+ years of experience with React and modern JavaScript/TypeScript",
        "Strong understanding of HTML5, CSS3, and responsive design principles",
        "Experience with state management (Redux, Zustand, or similar)",
        "Proficiency in Tailwind CSS or other utility-first frameworks",
        "Knowledge of Git, CI/CD, and agile methodologies"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health insurance for you and your family",
        "Flexible work hours and remote options",
        "Annual learning and development budget",
        "Latest hardware of your choice"
      ]
    },
    {
      id: 2,
      title: "Backend Developer",
      desc: "Build robust, scalable APIs and microservices. Master system design and databases.",
      type: "Full-time",
      location: "Remote / India",
      department: "Engineering",
      badge: "Urgent",
      fullDescription: "Join our backend team to architect and build scalable, high-performance systems that power our applications. You'll work on challenging problems involving distributed systems, databases, and cloud infrastructure.",
      responsibilities: [
        "Design and develop RESTful APIs and microservices",
        "Build scalable backend systems using Node.js, Python, or Go",
        "Optimize database queries and design efficient data models",
        "Implement security best practices and authentication systems",
        "Deploy and maintain applications on cloud platforms (AWS, GCP, Azure)"
      ],
      requirements: [
        "2+ years of backend development experience",
        "Strong knowledge of Node.js, Python, or Go",
        "Experience with SQL and NoSQL databases",
        "Understanding of microservices architecture",
        "Experience with Docker and cloud platforms"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health insurance for you and your family",
        "Flexible work hours and remote options",
        "Annual learning and development budget",
        "Latest hardware of your choice"
      ]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      desc: "Design breathtaking user experiences that blend aesthetics with intuitive functionality.",
      type: "Contract",
      location: "Hybrid",
      department: "Design",
      badge: "New",
      fullDescription: "As a UI/UX Designer at ZCROM, you'll craft beautiful, user-centered designs that solve real problems. You'll own the entire design process from research to final implementation.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity mockups",
        "Conduct user research and usability testing",
        "Design intuitive user flows and information architecture",
        "Collaborate with developers to ensure design feasibility",
        "Maintain and evolve design systems"
      ],
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe XD, or Sketch",
        "Strong portfolio demonstrating design thinking",
        "Understanding of design systems",
        "Excellent communication skills"
      ],
      benefits: [
        "Flexible working arrangements",
        "Opportunity to convert to full-time position",
        "Access to premium design tools",
        "Collaborative creative environment",
        "Regular design workshops"
      ]
    }
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(false);
    setSubmitted(false);
  };

  const handleProceedToApplication = () => {
    setShowApplicationForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
      setFormData({
        fullName: '', email: '', phone: '', location: '', linkedin: '',
        github: '', portfolio: '', experience: '', coverLetter: '', resume: null
      });
    }, 3000);
  };

  const handleClose = () => {
    setSelectedJob(null);
    setShowApplicationForm(false);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col mt-12">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto mt-12 px-4 lg:px-8 py-8">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Join Our Team at{" "}
              <span className="gradient-text relative inline-block">
                ZCROM
                <svg
                  className="absolute -bottom-3 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q100,0 200,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary/40"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              We're a dynamic team of creators and innovators redefining what's
              possible in tech. Explore our open roles and find where you belong.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="text-primary h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Team Size</div>
                  <div className="font-semibold">50+ Members</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Globe className="text-primary h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Work Style</div>
                  <div className="font-semibold">Remote-First</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TrendingUp className="text-primary h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Growth</div>
                  <div className="font-semibold">Fast Growing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-2 container mx-auto px-4 lg:px-8" id="openings">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join our talented team and help us build the future of technology
              </p>
            </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group bg-card border rounded-2xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold">
                      {job.department}
                    </p>
                  </div>
                  {job.badge && (
                    <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                      {job.badge}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-base mb-8 flex-grow leading-relaxed">
                  {job.desc}
                </p>

                <div className="space-y-4 mt-auto">
                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex flex-col text-sm text-muted-foreground font-medium gap-2">
                      <span className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary" /> {job.location}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleApplyClick(job)}
                    className="w-full transition-all text-white font-semibold group-hover:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
                    }}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          </div>

          {/* General Application CTA */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div
              className="p-10 rounded-2xl text-center border text-white shadow-xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Don't see the right role?
                </h3>
                <p className="text-base mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
                  We're always looking for exceptional talent. Feel free to send us
                  your resume and we'll reach out when a suitable position opens up.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 shadow-lg"
                >
                  <a href="mailto:careers@zcrom.com" className="inline-flex items-center">
                    Email Us Your Resume <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>


      {/* --- MODALS --- */}

      {/* Job Details Modal */}
      {selectedJob && !showApplicationForm && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-card border shadow-2xl rounded-2xl max-w-4xl w-full my-8 relative overflow-hidden">
            <div className="sticky top-0 bg-card z-10 px-8 py-6 border-b flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedJob.title}</h2>
                <p className="text-muted-foreground flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {selectedJob.department}
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {selectedJob.type}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" /> {selectedJob.location}
                  </span>
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="rounded-full hover:bg-muted"
              >
                <X size={22} />
              </Button>
            </div>

            <div className="p-8 md:p-10 overflow-y-auto max-h-[70vh]">
              <div className="prose max-w-none dark:prose-invert">
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4 text-foreground">About the Role</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {selectedJob.fullDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h3 className="text-xl font-bold mb-5 text-foreground">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-4">
                      {selectedJob.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-5 text-foreground">Requirements</h3>
                    <ul className="space-y-4">
                      {selectedJob.requirements.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t">
                  <h3 className="text-xl font-bold mb-5 text-foreground">
                    Benefits & Perks
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {selectedJob.benefits.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-muted-foreground bg-muted/30 rounded-lg p-3"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border-t bg-muted/20 flex justify-end gap-4">
              <Button variant="outline" onClick={handleClose} size="lg">
                Close
              </Button>
              <Button
                onClick={handleProceedToApplication}
                size="lg"
                className="text-white border-0 font-semibold px-8"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
                }}
              >
                Apply for this position
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && !submitted && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-card border shadow-2xl rounded-2xl max-w-3xl w-full my-8 relative">
            <div className="px-8 py-6 border-b flex justify-between items-center sticky top-0 bg-card z-10 rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold">
                  Apply for {selectedJob.title}
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Fill in your details below to complete your application
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="rounded-full hover:bg-muted"
              >
                <X size={22} />
              </Button>
            </div>

            <div className="p-8 md:p-10 max-h-[75vh] overflow-y-auto">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        required
                        className="flex h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Phone *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="flex h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Location *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="location"
                        required
                        className="flex h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="New York, USA"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      LinkedIn Profile
                    </label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input
                        type="url"
                        name="linkedin"
                        className="flex h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="linkedin.com/in/johndoe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      GitHub / Portfolio
                    </label>
                    <div className="relative">
                      <Github className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input
                        type="url"
                        name="portfolio"
                        className="flex h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        placeholder="github.com/johndoe"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Resume (PDF) *</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <div className="p-3 rounded-full bg-primary/10 mb-3">
                          <Upload className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-sm text-foreground mb-1">
                          {formData.resume ? (
                            <span className="font-semibold text-primary">
                              {formData.resume.name}
                            </span>
                          ) : (
                            <span className="font-semibold">
                              Click to upload your resume
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF only (MAX. 5MB)
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                      />
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Cover Letter (Optional)</label>
                  <textarea
                    name="coverLetter"
                    rows={5}
                    className="flex w-full rounded-lg border border-input bg-background px-4 py-3 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell us why you're a great fit for this role..."
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="pt-6">
                  <Button
                    onClick={handleSubmit}
                    size="lg"
                    className="w-full text-white border-0 font-semibold text-base h-12"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
                    }}
                  >
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-card border shadow-2xl rounded-2xl max-w-md w-full p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="text-green-600 dark:text-green-500 h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Application Received!</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Thank you for your interest in joining ZCROM. Our team will review your
              application carefully and get back to you within 5-7 business days.
            </p>
            <Button 
              variant="outline" 
              onClick={handleClose}
              size="lg"
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;