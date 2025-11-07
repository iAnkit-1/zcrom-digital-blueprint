const CompaniesSection = () => {
 const companyLogos = ["slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook"];

  return (
    <>
    <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
          <div className="flex flex-col items-center justify-center py-2 bg-gradient-to-b from-white to-gray-50 px-4">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Companies we{" "}
            <span className="gradient-text relative inline-block">
              Served
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
          </h2>

   <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-8 p-8">
    
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "15s" }}>
                    <div className="flex">
                        {[...companyLogos, ...companyLogos].map((company, index) => (
                            <img key={index} src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                                alt={company} className="w-full h-full object-cover mx-6" draggable={false} />
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
            </div>
    </>
  );
};

export default CompaniesSection;
