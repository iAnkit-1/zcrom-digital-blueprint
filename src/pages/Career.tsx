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
    <div className="min-h-screen bg-background flex flex-col mt-10">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto mt-28 px-4 lg:px-8 py-18">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
              Join Our Team{" "}
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
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a dynamic team of creators and innovators redefining what's
              possible in tech. Explore our open roles and find where you belong.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <Users className="text-primary h-5 w-5" />
                <span className="font-medium">50+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-primary h-5 w-5" />
                <span className="font-medium">Remote-First Culture</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-primary h-5 w-5" />
                <span className="font-medium">Fast Growing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 container mx-auto px-4 lg:px-8" id="openings">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              Current Openings
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-card border rounded-xl p-6 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {job.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-1">
                      {job.department}
                    </p>
                  </div>
                  {job.badge && (
                    <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {job.badge}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {job.desc}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                  <div className="flex flex-col text-xs text-muted-foreground font-medium gap-1">
                    <span>{job.type}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {job.location}
                    </span>
                  </div>
                  <Button
                    onClick={() => handleApplyClick(job)}
                    className="transition-all text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
                    }}
                  >
                    View Role
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* General Application CTA */}
          <div
            className="mt-16 p-8 rounded-xl text-center border text-white"
            style={{
              background:
                "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
            }}
          >
            <h3 className="text-2xl font-semibold mb-3">
              Don't see the right role?
            </h3>
            <p className="text-sm mb-6 max-w-2xl mx-auto opacity-90">
              We're always looking for exceptional talent. Feel free to send us
              your resume for future consideration.
            </p>
            <Button
              asChild
              size="lg"
              className="text-white border-0 hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
              }}
            >
              <a href="mailto:careers@zcrom.com">
                Email Us Your Resume <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* --- MODALS --- */}

      {/* Job Details Modal */}
      {selectedJob && !showApplicationForm && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-card border shadow-lg rounded-xl max-w-3xl w-full my-8 relative overflow-hidden">
            <div className="sticky top-0 bg-card z-10 px-6 py-4 border-b flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                <p className="text-muted-foreground text-sm flex items-center gap-3 mt-1">
                  <span>{selectedJob.department}</span> •
                  <span>{selectedJob.type}</span> •
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {selectedJob.location}
                  </span>
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="rounded-full"
              >
                <X size={20} />
              </Button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
              <div className="prose max-w-none dark:prose-invert">
                <h3 className="text-lg font-semibold mb-2">About the Role</h3>
                <p className="text-muted-foreground mb-8">
                  {selectedJob.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Responsibilities
                    </h3>
                    <ul className="space-y-3">
                      {selectedJob.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Requirements</h3>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">
                    Benefits & Perks
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {selectedJob.benefits.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border-t bg-muted/20 flex justify-end gap-3">
              <Button variant="outline" onClick={handleClose}>
                Close
              </Button>
              <Button
                onClick={handleProceedToApplication}
                size="lg"
                className="text-white border-0"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
                }}
              >
                Apply for this position
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && !submitted && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-card border shadow-lg rounded-xl max-w-2xl w-full my-8 relative">
            <div className="px-6 py-4 border-b flex justify-between items-center sticky top-0 bg-card z-10 rounded-t-xl">
              <h2 className="text-xl font-bold">
                Apply for {selectedJob.title}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="rounded-full"
              >
                <X size={20} />
              </Button>
            </div>

            <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Location *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="location"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      LinkedIn Profile
                    </label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <input
                        type="url"
                        name="linkedin"
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      GitHub / Portfolio
                    </label>
                    <div className="relative">
                      <Github className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <input
                        type="url"
                        name="portfolio"
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Resume (PDF) *</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          {formData.resume ? (
                            formData.resume.name
                          ) : (
                            <span className="font-semibold">
                              Click to upload resume
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
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
                  <label className="text-sm font-medium">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    rows={4}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-y"
                    placeholder="Tell us why you're a great fit..."
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-white border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
                    }}
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border shadow-lg rounded-xl max-w-md w-full p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="text-green-600 dark:text-green-500 h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Application Received</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest in ZCROM. Our team will review your
              application and get back to you shortly.
            </p>
            <Button variant="outline" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
