import { Users, Search, Heart, Share2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Join the Community",
      description: "Sign up and become part of our caring community of individuals and NGOs working together.",
      color: "text-primary"
    },
    {
      icon: Search,
      title: "Find or Share Resources",
      description: "Browse available resources or post what you can share with those in need.",
      color: "text-secondary"
    },
    {
      icon: Heart,
      title: "Connect with Care",
      description: "Match with people who need help or can provide assistance in your local area.",
      color: "text-primary"
    },
    {
      icon: Share2,
      title: "Make a Difference",
      description: "Complete the exchange and see the positive impact you've made in someone's life.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            How <span className="text-gradient">ShareCare</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Our simple four-step process makes it easy to connect hearts and share resources
            with those who need them most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-card-gradient border border-border rounded-2xl p-8 text-center hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-button rounded-full text-primary-foreground font-bold text-lg mb-6 shadow-button">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-6 ${step.color}`}>
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;