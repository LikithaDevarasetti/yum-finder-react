import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface FoodCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  deliveryTime: string;
  restaurant: string;
}

const FoodCard = ({ name, description, price, image, rating, deliveryTime, restaurant }: FoodCardProps) => {
  const { addItem, openCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id: `${name}-${restaurant}`,
      name,
      price,
      image,
      restaurant
    });
    
    toast({
      title: "Added to cart!",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleQuickAdd = () => {
    handleAddToCart();
    openCart();
  };
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-food-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 w-64">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button 
          size="icon" 
          className="absolute top-2 right-2 bg-white/90 hover:bg-white text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          onClick={handleQuickAdd}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-3">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-semibold text-sm leading-tight">{name}</h3>
          <div className="flex items-center space-x-1 text-xs">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-xs mb-1 line-clamp-1">{description}</p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span className="font-medium">{restaurant}</span>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{deliveryTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">₹{(price * 80).toFixed(0)}</span>
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded" onClick={handleAddToCart}>
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;