import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-button rounded-xl shadow-glow animate-float">
                <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold text-gradient">ShareCare</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Connecting hearts and sharing resources to build stronger, more supportive communities. 
              Together, we can make a difference in the lives of those who need help most.
            </p>
            <div className="flex gap-4">
              <button className="p-3 bg-primary/20 border border-primary/30 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-105">
                <Mail className="h-5 w-5" />
              </button>
              <button className="p-3 bg-secondary/20 border border-secondary/30 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:shadow-glow hover:scale-105">
                <Phone className="h-5 w-5" />
              </button>
              <button className="p-3 bg-accent/20 border border-accent/30 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-glow hover:scale-105">
                <MapPin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6 text-gradient flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Find Resources</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Share Resources</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partner NGOs</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6 text-gradient flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              Support
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gradient-to-r from-primary/20 via-border to-secondary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center bg-card/30 backdrop-blur-sm rounded-2xl p-6">
          <p className="text-muted-foreground text-sm">
            © 2024 ShareCare. Made with ❤️ for building stronger communities.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Trusted by 500+ NGOs
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Active Community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;