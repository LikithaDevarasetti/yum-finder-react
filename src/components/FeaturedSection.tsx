import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FoodCard from "./FoodCard";
import FoodCategory from "./FoodCategory";
import pizzaImage from "@/assets/pizza-category.jpg";
import burgerImage from "@/assets/burger-category.jpg";
import saladImage from "@/assets/salad-category.jpg";
import sushiImage from "@/assets/sushi-category.jpg";
import tacosImage from "@/assets/tacos-category.jpg";
import pastaImage from "@/assets/pasta-category.jpg";
import wingsImage from "@/assets/wings-category.jpg";
import smoothieImage from "@/assets/smoothie-category.jpg";

// Pizza images
import margheritaPizza from "@/assets/margherita-pizza.jpg";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import hawaiianPizza from "@/assets/hawaiian-pizza.jpg";
import meatLoversPizza from "@/assets/meat-lovers-pizza.jpg";
import vegetarianPizza from "@/assets/vegetarian-pizza.jpg";
import bbqChickenPizza from "@/assets/bbq-chicken-pizza.jpg";
import fourCheesePizza from "@/assets/four-cheese-pizza.jpg";
import buffaloChickenPizza from "@/assets/buffalo-chicken-pizza.jpg";
import mushroomPizza from "@/assets/mushroom-pizza.jpg";
import supremePizza from "@/assets/supreme-pizza.jpg";
import whitePizza from "@/assets/white-pizza.jpg";
import spinachPizza from "@/assets/spinach-pizza.jpg";
import spicyItalianPizza from "@/assets/spicy-italian-pizza.jpg";
import mediterraneanPizza from "@/assets/mediterranean-pizza.jpg";
import pestoPizza from "@/assets/pesto-pizza.jpg";

// Burger images
import classicCheeseburger from "@/assets/classic-cheeseburger.jpg";
import doubleBaconBurger from "@/assets/double-bacon-burger.jpg";
import mushroomSwissBurger from "@/assets/mushroom-swiss-burger.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";
import bbqRanchBurger from "@/assets/bbq-ranch-burger.jpg";
import jalapenoBurger from "@/assets/jalapeno-burger.jpg";
import turkeyBurger from "@/assets/turkey-burger.jpg";
import fishBurger from "@/assets/fish-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import blueCheeseBurger from "@/assets/blue-cheese-burger.jpg";
import breakfastBurger from "@/assets/breakfast-burger.jpg";
import avocadoBurger from "@/assets/avocado-burger.jpg";

// Other individual dish images
import caesarSalad from "@/assets/caesar-salad.jpg";
import greekSalad from "@/assets/greek-salad.jpg";
import quinoaBowl from "@/assets/quinoa-bowl.jpg";
import salmonSushi from "@/assets/salmon-sushi.jpg";
import dragonRoll from "@/assets/dragon-roll.jpg";
import rainbowRoll from "@/assets/rainbow-roll.jpg";
import fishTacos from "@/assets/fish-tacos.jpg";
import carnitasTacos from "@/assets/carnitas-tacos.jpg";
import shrimpTacos from "@/assets/shrimp-tacos.jpg";
import fettuccineAlfredo from "@/assets/fettuccine-alfredo.jpg";
import lasagna from "@/assets/lasagna.jpg";
import pestoLinguine from "@/assets/pesto-linguine.jpg";
import honeyGarlicWings from "@/assets/honey-garlic-wings.jpg";
import koreanWings from "@/assets/korean-wings.jpg";
import bbqWings from "@/assets/bbq-wings.jpg";
import tropicalSmoothie from "@/assets/tropical-smoothie.jpg";
import greenSmoothie from "@/assets/green-smoothie.jpg";
import chocolatePbSmoothie from "@/assets/chocolate-pb-smoothie.jpg";

const FeaturedSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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

  const allDishes = [
    // Pizza (15 dishes)
    { name: "Margherita Pizza", description: "Fresh mozzarella, tomatoes, basil leaves, and olive oil on crispy dough", price: 18.99, image: margheritaPizza, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Pepperoni Pizza", description: "Classic pepperoni with mozzarella cheese on traditional crust", price: 19.99, image: pepperoniPizza, rating: 4.7, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Hawaiian Pizza", description: "Ham, pineapple, and mozzarella cheese on thin crust", price: 20.99, image: hawaiianPizza, rating: 4.5, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Meat Lovers Pizza", description: "Pepperoni, sausage, ham, and bacon on thick crust", price: 24.99, image: meatLoversPizza, rating: 4.9, deliveryTime: "30-35 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Vegetarian Pizza", description: "Bell peppers, mushrooms, onions, olives, and tomatoes", price: 18.99, image: vegetarianPizza, rating: 4.6, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "BBQ Chicken Pizza", description: "Grilled chicken, BBQ sauce, red onions, and cilantro", price: 22.99, image: bbqChickenPizza, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Four Cheese Pizza", description: "Mozzarella, parmesan, gorgonzola, and ricotta cheese", price: 21.99, image: fourCheesePizza, rating: 4.7, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Buffalo Chicken Pizza", description: "Spicy buffalo chicken with ranch dressing and celery", price: 23.99, image: buffaloChickenPizza, rating: 4.6, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Mushroom Pizza", description: "Fresh mushrooms with garlic, herbs, and mozzarella", price: 19.99, image: mushroomPizza, rating: 4.5, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Supreme Pizza", description: "Pepperoni, sausage, peppers, onions, and mushrooms", price: 25.99, image: supremePizza, rating: 4.8, deliveryTime: "30-35 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "White Pizza", description: "Ricotta, mozzarella, garlic, and herbs on white sauce", price: 20.99, image: whitePizza, rating: 4.7, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Spinach Pizza", description: "Fresh spinach, feta cheese, and sun-dried tomatoes", price: 21.99, image: spinachPizza, rating: 4.6, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Spicy Italian Pizza", description: "Salami, jalapeños, red pepper flakes, and mozzarella", price: 22.99, image: spicyItalianPizza, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Mediterranean Pizza", description: "Olives, sun-dried tomatoes, feta, and basil", price: 23.99, image: mediterraneanPizza, rating: 4.7, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },
    { name: "Pesto Pizza", description: "Basil pesto, cherry tomatoes, and fresh mozzarella", price: 21.99, image: pestoPizza, rating: 4.9, deliveryTime: "25-30 min", restaurant: "Mario's Italian", category: "Pizza" },

    // Burgers (12 dishes)
    { name: "Classic Cheeseburger", description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and secret sauce", price: 15.99, image: classicCheeseburger, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "Double Bacon Burger", description: "Two beef patties with crispy bacon, cheese, and BBQ sauce", price: 19.99, image: doubleBaconBurger, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "Mushroom Swiss Burger", description: "Beef patty with sautéed mushrooms and Swiss cheese", price: 17.99, image: mushroomSwissBurger, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "Veggie Burger", description: "Plant-based patty with avocado, sprouts, and chipotle mayo", price: 14.99, image: veggieBurger, rating: 4.5, deliveryTime: "15-20 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "BBQ Ranch Burger", description: "Beef patty with onion rings, BBQ sauce, and ranch dressing", price: 18.99, image: bbqRanchBurger, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "Spicy Jalapeño Burger", description: "Pepper jack cheese, jalapeños, and spicy mayo", price: 16.99, image: jalapenoBurger, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "Turkey Burger", description: "Lean turkey patty with cranberry sauce and swiss", price: 16.99, image: turkeyBurger, rating: 4.4, deliveryTime: "20-25 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "Fish Burger", description: "Crispy fish fillet with tartar sauce and lettuce", price: 17.99, image: fishBurger, rating: 4.5, deliveryTime: "20-25 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "Chicken Burger", description: "Grilled chicken breast with herb mayo and tomato", price: 15.99, image: chickenBurger, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "Blue Cheese Burger", description: "Beef patty with blue cheese crumbles and caramelized onions", price: 18.99, image: blueCheeseBurger, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "Breakfast Burger", description: "Beef patty with fried egg, bacon, and hash browns", price: 19.99, image: breakfastBurger, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Burger Palace", category: "Burgers" },
    { name: "Avocado Burger", description: "Beef patty with fresh avocado, sprouts, and lime mayo", price: 17.99, image: avocadoBurger, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Burger Palace", category: "Burgers" },

    // Salads (8 dishes)
    { name: "Rainbow Buddha Bowl", description: "Quinoa, avocado, roasted vegetables, chickpeas with tahini dressing", price: 14.99, image: quinoaBowl, rating: 4.9, deliveryTime: "15-20 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Caesar Salad", description: "Romaine lettuce, parmesan, croutons, and caesar dressing", price: 12.99, image: caesarSalad, rating: 4.5, deliveryTime: "10-15 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Greek Salad", description: "Mixed greens, feta, olives, tomatoes, and olive oil dressing", price: 13.99, image: greekSalad, rating: 4.7, deliveryTime: "10-15 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Chicken Caesar Salad", description: "Grilled chicken over caesar salad with extra parmesan", price: 16.99, image: caesarSalad, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Quinoa Power Bowl", description: "Quinoa, kale, sweet potato, nuts, and balsamic vinaigrette", price: 15.99, image: quinoaBowl, rating: 4.8, deliveryTime: "15-20 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Asian Chicken Salad", description: "Mixed greens, grilled chicken, sesame dressing, and crispy noodles", price: 16.99, image: saladImage, rating: 4.7, deliveryTime: "15-20 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, basil, and balsamic glaze", price: 13.99, image: saladImage, rating: 4.6, deliveryTime: "10-15 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Taco Salad", description: "Lettuce, beans, cheese, salsa, avocado in tortilla bowl", price: 14.99, image: saladImage, rating: 4.5, deliveryTime: "15-20 min", restaurant: "Green Garden", category: "Salads" },

    // Sushi (10 dishes)
    { name: "Sushi Combo Deluxe", description: "8 pieces of premium nigiri with California and spicy tuna rolls", price: 32.99, image: salmonSushi, rating: 4.7, deliveryTime: "30-35 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Salmon Lover Set", description: "6 pieces salmon nigiri with salmon avocado roll", price: 28.99, image: salmonSushi, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Dragon Roll", description: "Eel, cucumber inside, avocado on top with eel sauce", price: 16.99, image: dragonRoll, rating: 4.9, deliveryTime: "20-25 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Rainbow Roll", description: "California roll topped with assorted sashimi", price: 18.99, image: rainbowRoll, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Spicy Tuna Roll", description: "Spicy tuna with cucumber and avocado", price: 12.99, image: dragonRoll, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Philadelphia Roll", description: "Salmon, cream cheese, and cucumber", price: 13.99, image: salmonSushi, rating: 4.5, deliveryTime: "15-20 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Chirashi Bowl", description: "Assorted sashimi over sushi rice with miso soup", price: 24.99, image: rainbowRoll, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Tempura Roll", description: "Shrimp tempura with avocado and cucumber", price: 14.99, image: dragonRoll, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Vegetable Roll", description: "Cucumber, avocado, and pickled radish", price: 8.99, image: salmonSushi, rating: 4.4, deliveryTime: "10-15 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Sashimi Platter", description: "15 pieces of assorted fresh sashimi", price: 29.99, image: rainbowRoll, rating: 4.9, deliveryTime: "25-30 min", restaurant: "Tokyo Express", category: "Sushi" },

    // Tacos (14 dishes)
    { name: "Beef Tacos", description: "Seasoned ground beef with lettuce, cheese, and salsa", price: 12.99, image: carnitasTacos, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Chicken Tacos", description: "Grilled chicken with cilantro, onions, and lime", price: 12.99, image: fishTacos, rating: 4.7, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Fish Tacos", description: "Beer-battered fish with cabbage slaw and chipotle mayo", price: 15.99, image: fishTacos, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Carnitas Tacos", description: "Slow-cooked pork with onions and cilantro", price: 14.99, image: carnitasTacos, rating: 4.9, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Veggie Tacos", description: "Black beans, peppers, onions, and avocado", price: 11.99, image: shrimpTacos, rating: 4.5, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Shrimp Tacos", description: "Grilled shrimp with mango salsa and lime crema", price: 16.99, image: shrimpTacos, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Al Pastor Tacos", description: "Marinated pork with pineapple and onions", price: 14.99, image: carnitasTacos, rating: 4.7, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Barbacoa Tacos", description: "Slow-cooked beef with traditional spices", price: 15.99, image: fishTacos, rating: 4.8, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Chorizo Tacos", description: "Mexican sausage with potatoes and peppers", price: 13.99, image: shrimpTacos, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Breakfast Tacos", description: "Scrambled eggs, bacon, cheese, and potatoes", price: 10.99, image: carnitasTacos, rating: 4.5, deliveryTime: "10-15 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Steak Tacos", description: "Grilled steak with peppers and onions", price: 16.99, image: fishTacos, rating: 4.9, deliveryTime: "20-25 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Quesadilla Tacos", description: "Cheese-filled tortilla with your choice of meat", price: 13.99, image: shrimpTacos, rating: 4.7, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Buffalo Chicken Tacos", description: "Spicy buffalo chicken with blue cheese and celery", price: 14.99, image: carnitasTacos, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Korean BBQ Tacos", description: "Korean marinated beef with kimchi and sriracha mayo", price: 16.99, image: fishTacos, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Taco Fiesta", category: "Tacos" },

    // Pasta (11 dishes)
    { name: "Spaghetti Carbonara", description: "Spaghetti with eggs, pancetta, parmesan, and black pepper", price: 18.99, image: fettuccineAlfredo, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Pasta Villa", category: "Pasta" },
    { name: "Fettuccine Alfredo", description: "Fettuccine with creamy parmesan sauce", price: 16.99, image: fettuccineAlfredo, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Pasta Villa", category: "Pasta" },
    { name: "Lasagna", description: "Layered pasta with meat sauce, ricotta, and mozzarella", price: 19.99, image: lasagna, rating: 4.9, deliveryTime: "30-35 min", restaurant: "Pasta Villa", category: "Pasta" },
    { name: "Penne Arrabbiata", description: "Penne pasta with spicy tomato and garlic sauce", price: 15.99, image: pestoLinguine, rating: 4.7, deliveryTime: "15-20 min", restaurant: "Pasta Villa", category: "Pasta" },
    { name: "Chicken Parmigiana", description: "Breaded chicken over spaghetti with marinara", price: 21.99, image: lasagna, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Pasta Villa", category: "Pasta" },
    { name: "Pesto Linguine", description: "Linguine with fresh basil pesto and pine nuts", price: 17.99, image: pestoLinguine, rating: 4.7, deliveryTime: "15-20 min", restaurant: "Pasta Villa", category: "Pasta" },
    { name: "Ravioli", description: "Cheese-filled ravioli with tomato or cream sauce", price: 18.99, image: fettuccineAlfredo, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Pasta Villa", category: "Pasta" },
    { name: "Seafood Linguine", description: "Linguine with shrimp, mussels, and clams in white wine", price: 24.99, image: lasagna, rating: 4.9, deliveryTime: "25-30 min", restaurant: "Pasta Villa", category: "Pasta" },
    { name: "Gnocchi", description: "Potato dumplings with choice of sauce", price: 16.99, image: pestoLinguine, rating: 4.5, deliveryTime: "20-25 min", restaurant: "Pasta Villa", category: "Pasta" },
    { name: "Cacio e Pepe", description: "Spaghetti with pecorino cheese and black pepper", price: 15.99, image: fettuccineAlfredo, rating: 4.8, deliveryTime: "15-20 min", restaurant: "Pasta Villa", category: "Pasta" },
    { name: "Bolognese", description: "Traditional meat sauce over your choice of pasta", price: 19.99, image: lasagna, rating: 4.7, deliveryTime: "25-30 min", restaurant: "Pasta Villa", category: "Pasta" },

    // Wings (9 dishes)
    { name: "Buffalo Wings", description: "Classic spicy buffalo wings with blue cheese dip", price: 14.99, image: bbqWings, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Wing Stop", category: "Wings" },
    { name: "BBQ Wings", description: "Sweet and tangy BBQ glazed chicken wings", price: 14.99, image: bbqWings, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Wing Stop", category: "Wings" },
    { name: "Honey Garlic Wings", description: "Wings tossed in honey garlic sauce", price: 15.99, image: honeyGarlicWings, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Wing Stop", category: "Wings" },
    { name: "Teriyaki Wings", description: "Japanese-style teriyaki glazed wings", price: 15.99, image: koreanWings, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Wing Stop", category: "Wings" },
    { name: "Lemon Pepper Wings", description: "Crispy wings with lemon pepper seasoning", price: 14.99, image: bbqWings, rating: 4.5, deliveryTime: "20-25 min", restaurant: "Wing Stop", category: "Wings" },
    { name: "Spicy Korean Wings", description: "Korean-style spicy gochujang wings", price: 16.99, image: koreanWings, rating: 4.9, deliveryTime: "25-30 min", restaurant: "Wing Stop", category: "Wings" },
    { name: "Parmesan Wings", description: "Wings tossed in garlic parmesan sauce", price: 15.99, image: honeyGarlicWings, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Wing Stop", category: "Wings" },
    { name: "Cajun Wings", description: "Spicy cajun seasoned chicken wings", price: 14.99, image: bbqWings, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Wing Stop", category: "Wings" },
    { name: "Thai Chili Wings", description: "Sweet and spicy Thai chili glazed wings", price: 16.99, image: koreanWings, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Wing Stop", category: "Wings" },

    // Smoothies (7 dishes)
    { name: "Berry Blast Smoothie", description: "Mixed berries, banana, yogurt, and honey", price: 8.99, image: tropicalSmoothie, rating: 4.8, deliveryTime: "5-10 min", restaurant: "Smoothie Bar", category: "Smoothies" },
    { name: "Tropical Paradise", description: "Mango, pineapple, coconut milk, and lime", price: 9.99, image: tropicalSmoothie, rating: 4.9, deliveryTime: "5-10 min", restaurant: "Smoothie Bar", category: "Smoothies" },
    { name: "Green Machine", description: "Spinach, kale, apple, banana, and ginger", price: 9.99, image: greenSmoothie, rating: 4.7, deliveryTime: "5-10 min", restaurant: "Smoothie Bar", category: "Smoothies" },
    { name: "Chocolate Peanut Butter", description: "Banana, cocoa, peanut butter, and almond milk", price: 10.99, image: chocolatePbSmoothie, rating: 4.6, deliveryTime: "5-10 min", restaurant: "Smoothie Bar", category: "Smoothies" },
    { name: "Strawberry Banana", description: "Classic strawberry banana with vanilla yogurt", price: 8.99, image: greenSmoothie, rating: 4.5, deliveryTime: "5-10 min", restaurant: "Smoothie Bar", category: "Smoothies" },
    { name: "Acai Bowl Smoothie", description: "Acai, berries, granola, and coconut flakes", price: 11.99, image: tropicalSmoothie, rating: 4.8, deliveryTime: "10-15 min", restaurant: "Smoothie Bar", category: "Smoothies" },
    { name: "Protein Power Smoothie", description: "Protein powder, banana, oats, and almond butter", price: 12.99, image: chocolatePbSmoothie, rating: 4.7, deliveryTime: "5-10 min", restaurant: "Smoothie Bar", category: "Smoothies" },
  ];

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const section = document.querySelector('#featured-dishes');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredDishes = selectedCategory === "All" 
    ? allDishes.slice(0, 4) // Show only 4 dishes when "All" is selected
    : allDishes.filter(dish => dish.category === selectedCategory);

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

        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <div></div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 rounded-full"
                onClick={() => {
                  const container = document.getElementById('categories-scroll');
                  if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 rounded-full"
                onClick={() => {
                  const container = document.getElementById('categories-scroll');
                  if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div 
            id="categories-scroll"
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 mb-16 justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
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
        </div>

        {/* Featured Dishes */}
        <div className="text-center mb-12" id="featured-dishes">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              {selectedCategory === "All" ? "Featured" : selectedCategory}
            </span> Dishes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {selectedCategory === "All" 
              ? "Hand-picked favorites that our customers love the most"
              : `Delicious ${selectedCategory.toLowerCase()} dishes just for you`
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => (
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