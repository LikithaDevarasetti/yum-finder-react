import { Card } from "@/components/ui/card";

interface FoodCategoryProps {
  name: string;
  image: string;
  count: number;
  onClick?: () => void;
}

const FoodCategory = ({ name, image, count, onClick }: FoodCategoryProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-food-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2" onClick={onClick}>
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm opacity-90">{count} dishes</p>
        </div>
      </div>
    </Card>
  );
};

export default FoodCategory;