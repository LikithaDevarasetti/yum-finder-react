import { Card } from "@/components/ui/card";

interface FoodCategoryProps {
  name: string;
  image: string;
  count: number;
  onClick?: () => void;
}

const FoodCategory = ({ name, image, count, onClick }: FoodCategoryProps) => {
  return (
    <div className="group cursor-pointer text-center transition-all duration-300 hover:-translate-y-2" onClick={onClick}>
      <div className="w-24 h-24 mx-auto mb-3 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-xs text-muted-foreground">{count} dishes</p>
      </div>
    </div>
  );
};

export default FoodCategory;