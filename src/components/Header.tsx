import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

import CartSidebar from "./CartSidebar";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            FoodieExpress
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          
          <CartSidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;