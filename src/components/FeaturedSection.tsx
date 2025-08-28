import FoodCard from "./FoodCard";
import FoodCategory from "./FoodCategory";
import pizzaImage from "@/assets/pizza-card.jpg";
import burgerImage from "@/assets/burger-card.jpg";
import saladImage from "@/assets/salad-card.jpg";
import sushiImage from "@/assets/sushi-card.jpg";
import tacosImage from "@/assets/tacos-card.jpg";
import pastaImage from "@/assets/pasta-card.jpg";
import wingsImage from "@/assets/wings-card.jpg";
import smoothieImage from "@/assets/smoothie-card.jpg";

const FeaturedSection = () => {
  const categories = [
    { name: "Pizza", image: pizzaImage, count: 15 },
    { name: "Burgers", image: burgerImage, count: 12 },
    { name: "Salads", image: saladImage, count: 8 },
    { name: "Sushi", image: sushiImage, count: 10 },
    { name: "Tacos", image: tacosImage, count: 14 },
    { name: "Pasta", image: pastaImage, count: 11 },
    { name: "Wings", image: wingsImage, count: 9 },
    { name: "Smoothies", image: smoothieImage, count: 7 },
  ];

  const handleCategoryClick = (categoryName: string) => {
    // Filter featured dishes by category or show all if no match
    const section = document.querySelector('#featured-dishes');
    section?.scrollIntoView({ behavior: 'smooth' });
    
    // Here you could add filtering logic in the future
    console.log(`Clicked on ${categoryName} category`);
  };

  const featuredDishes = [
    {
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomatoes, basil leaves, and olive oil on crispy dough",
      price: 18.99,
      image: pizzaImage,
      rating: 4.8,
      deliveryTime: "25-30 min",
      restaurant: "Mario's Italian"
    },
    {
      name: "Classic Cheeseburger",
      description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and secret sauce",
      price: 15.99,
      image: burgerImage,
      rating: 4.6,
      deliveryTime: "20-25 min",
      restaurant: "Burger Palace"
    },
    {
      name: "Rainbow Buddha Bowl",
      description: "Quinoa, avocado, roasted vegetables, chickpeas with tahini dressing",
      price: 14.99,
      image: saladImage,
      rating: 4.9,
      deliveryTime: "15-20 min",
      restaurant: "Green Garden"
    },
    {
      name: "Sushi Combo Deluxe",
      description: "8 pieces of premium nigiri with California and spicy tuna rolls",
      price: 32.99,
      image: sushiImage,
      rating: 4.7,
      deliveryTime: "30-35 min",
      restaurant: "Tokyo Express"
    }
  ];

  return (
    <div className="py-16 bg-background" id="featured-section">
      <div className="container mx-auto px-4">
        {/* Categories Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by <span className="bg-hero-gradient bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover your favorite dishes from top-rated restaurants in your area
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <FoodCategory
              key={category.name}
              name={category.name}
              image={category.image}
              count={category.count}
              onClick={() => handleCategoryClick(category.name)}
            />
          ))}
        </div>

        {/* Featured Dishes */}
        <div className="text-center mb-12" id="featured-dishes">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-hero-gradient bg-clip-text text-transparent">Featured</span> Dishes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hand-picked favorites that our customers love the most
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish) => (
            <FoodCard
              key={dish.name}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image}
              rating={dish.rating}
              deliveryTime={dish.deliveryTime}
              restaurant={dish.restaurant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;