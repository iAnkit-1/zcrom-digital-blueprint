const CompaniesSection = () => {
  const companies = [
    "TechCorp", "InnovateLabs", "DataFlow", "CloudSystems", "AI Solutions",
    "WebMasters", "DevHub", "CodeCraft", "TechVision", "NextGen",
  ];

  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
          Companies We've <span className="gradient-text">Worked With</span>
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          {companies.map((company, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-4 bg-card border border-border rounded-lg shadow-sm"
            >
              <p className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                {company}
              </p>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-4 bg-card border border-border rounded-lg shadow-sm"
            >
              <p className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                {company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
