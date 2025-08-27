import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Delicious food spread" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-warm-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 mb-6 animate-fade-in">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <span className="text-white/90 font-medium">4.8 • 10,000+ satisfied customers</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Delicious Food
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Delivered Fast
          </span>
        </h1>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
          Order from your favorite restaurants and get fresh, hot meals delivered 
          to your doorstep in 30 minutes or less.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group">
            Order Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            Browse Restaurants
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto text-white/90">
          <div className="text-center">
            <div className="text-2xl font-bold">30min</div>
            <div className="text-sm">Delivery Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Restaurants</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50k+</div>
            <div className="text-sm">Happy Users</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;