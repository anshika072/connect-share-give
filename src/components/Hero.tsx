import { ArrowRight, Heart } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-donation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="People sharing and donating resources" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8 animate-scale-in">
            <Heart className="h-4 w-4 text-primary" fill="currentColor" />
            <span className="text-sm text-muted-foreground">Connecting Communities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Connecting Hearts,</span>
            <br />
            <span className="text-foreground">Sharing Resources</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Bridge the gap between those who need help and those who can provide it. 
            Connect with NGOs and individuals to share resources and make a difference.
          </p>

          {/* CTA Button */}
          <div className="animate-slide-up">
            <Button variant="hero" size="xl" className="hover-lift">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Resources Shared</div>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">NGOs Connected</div>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">25,000+</div>
              <div className="text-muted-foreground">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;