import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, India",
      rating: 5,
      text: "ZCROM transformed our business with an amazing e-commerce platform. Their team is professional and delivery was on time!",
    },
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Excellent work on our mobile app. The design is beautiful and the performance is outstanding. Highly recommended!",
    },
    {
      name: "David Williams",
      location: "London, UK",
      rating: 5,
      text: "Best development agency we've worked with. Clear communication, great expertise, and exceptional results.",
    },
    {
      name: "Priya Sharma",
      location: "Bangalore, India",
      rating: 5,
      text: "The team at ZCROM exceeded our expectations. They understood our vision and delivered exactly what we needed.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border border-border shadow-sm hover:shadow-lg transition-smooth hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-sm italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
