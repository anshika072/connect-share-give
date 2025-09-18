import { Heart } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="p-2 bg-gradient-button rounded-xl shadow-glow animate-float">
              <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="text-2xl font-bold text-gradient">ShareCare</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 animate-fade-in">
            <Button variant="nav" size="sm">
              About
            </Button>
            <Button variant="default" size="sm">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;