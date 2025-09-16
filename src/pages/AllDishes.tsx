import { useState } from "react";
import { Button } from "@/components/ui/button";
import FoodCard from "@/components/FoodCard";
import FoodCategory from "@/components/FoodCategory";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import category images
import pizzaImage from "@/assets/pizza-category.jpg";
import burgerImage from "@/assets/burger-category.jpg";
import saladImage from "@/assets/salad-category.jpg";
import sushiImage from "@/assets/sushi-category.jpg";
import tacosImage from "@/assets/tacos-category.jpg";
import pastaImage from "@/assets/pasta-category.jpg";
import wingsImage from "@/assets/wings-category.jpg";
import smoothieImage from "@/assets/smoothie-category.jpg";

// Import all pizza images
import margheritaPizza from "@/assets/margherita-pizza.jpg";
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
import hawaiianPizza from "@/assets/hawaiian-pizza.jpg";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import meatLoversPizza from "@/assets/meat-lovers-pizza.jpg";

// Import all burger images
import classicCheeseburger from "@/assets/classic-cheeseburger.jpg";
import bbqRanchBurger from "@/assets/bbq-ranch-burger.jpg";
import jalapenoBurger from "@/assets/jalapeno-burger.jpg";
import turkeyBurger from "@/assets/turkey-burger.jpg";
import fishBurger from "@/assets/fish-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import blueCheeseBurger from "@/assets/blue-cheese-burger.jpg";
import breakfastBurger from "@/assets/breakfast-burger.jpg";
import avocadoBurger from "@/assets/avocado-burger.jpg";
import mushroomSwissBurger from "@/assets/mushroom-swiss-burger.jpg";
import doubleBaconBurger from "@/assets/double-bacon-burger.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";

// Import all salad images
import caesarSalad from "@/assets/caesar-salad.jpg";
import greekSalad from "@/assets/greek-salad.jpg";
import quinoaBowl from "@/assets/quinoa-bowl.jpg";
import asianChickenSalad from "@/assets/asian-chicken-salad.jpg";
import capreseSalad from "@/assets/caprese-salad.jpg";
import tacoSalad from "@/assets/taco-salad.jpg";
import chickenCaesarSalad from "@/assets/chicken-caesar-salad.jpg";
import quinoaPowerBowl from "@/assets/quinoa-power-bowl.jpg";

// Import all sushi images
import dragonRoll from "@/assets/dragon-roll.jpg";
import rainbowRoll from "@/assets/rainbow-roll.jpg";
import salmonSushi from "@/assets/salmon-sushi.jpg";
import spicyTunaRoll from "@/assets/spicy-tuna-roll.jpg";
import philadelphiaRoll from "@/assets/philadelphia-roll.jpg";
import californiaRoll from "@/assets/california-roll.jpg";
import tempuraRoll from "@/assets/tempura-roll.jpg";
import chirashiBowl from "@/assets/chirashi-bowl.jpg";
import salmonNigiri from "@/assets/salmon-nigiri.jpg";
import tunaSashimi from "@/assets/tuna-sashimi.jpg";

// Import all tacos images
import carnitasTacos from "@/assets/carnitas-tacos.jpg";
import fishTacos from "@/assets/fish-tacos.jpg";
import shrimpTacos from "@/assets/shrimp-tacos.jpg";
import chickenTacos from "@/assets/chicken-tacos.jpg";
import beefTacos from "@/assets/beef-tacos.jpg";
import veggieTacos from "@/assets/veggie-tacos.jpg";
import alPastorTacos from "@/assets/al-pastor-tacos.jpg";
import barbacoa from "@/assets/barbacoa-tacos.jpg";
import chorizoTacos from "@/assets/chorizo-tacos.jpg";
import breakfastTacos from "@/assets/breakfast-tacos.jpg";
import steakTacos from "@/assets/steak-tacos.jpg";
import quesadillaTacos from "@/assets/quesadilla-tacos.jpg";
import buffaloChickenTacos from "@/assets/buffalo-chicken-tacos.jpg";
import koreanBbqTacos from "@/assets/korean-bbq-tacos.jpg";

// Import all pasta images
import fettuccineAlfredo from "@/assets/fettuccine-alfredo.jpg";
import pestoLinguine from "@/assets/pesto-linguine.jpg";
import lasagna from "@/assets/lasagna.jpg";
import spaghettiCarbonara from "@/assets/spaghetti-carbonara.jpg";
import penneArrabbiata from "@/assets/penne-arrabbiata.jpg";
import chickenParmigiana from "@/assets/chicken-parmigiana.jpg";
import ravioli from "@/assets/ravioli.jpg";
import seafoodLinguine from "@/assets/seafood-linguine.jpg";
import gnocchi from "@/assets/gnocchi.jpg";
import tortellini from "@/assets/tortellini.jpg";
import macaroniCheese from "@/assets/macaroni-cheese.jpg";

// Import all wings images
import bbqWings from "@/assets/bbq-wings.jpg";
import honeyGarlicWings from "@/assets/honey-garlic-wings.jpg";
import koreanWings from "@/assets/korean-wings.jpg";
import buffaloWings from "@/assets/buffalo-wings.jpg";
import teriyakiWings from "@/assets/teriyaki-wings.jpg";
import lemonPepperWings from "@/assets/lemon-pepper-wings.jpg";
import hotWings from "@/assets/hot-wings.jpg";
import parmesanWings from "@/assets/parmesan-wings.jpg";
import jamaicanJerkWings from "@/assets/jamaican-jerk-wings.jpg";

// Import all smoothie images
import greenSmoothie from "@/assets/green-smoothie.jpg";
import tropicalSmoothie from "@/assets/tropical-smoothie.jpg";
import chocolatePbSmoothie from "@/assets/chocolate-pb-smoothie.jpg";
import berryBlastSmoothie from "@/assets/berry-blast-smoothie.jpg";
import proteinPowerSmoothie from "@/assets/protein-power-smoothie.jpg";
import acaiBowlSmoothie from "@/assets/acai-bowl-smoothie.jpg";
import kaleCleanseSmoothie from "@/assets/kale-cleanse-smoothie.jpg";

const AllDishes = () => {
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
    { name: "Chicken Caesar Salad", description: "Grilled chicken over caesar salad with extra parmesan", price: 16.99, image: chickenCaesarSalad, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Quinoa Power Bowl", description: "Quinoa, kale, sweet potato, nuts, and balsamic vinaigrette", price: 15.99, image: quinoaPowerBowl, rating: 4.8, deliveryTime: "15-20 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Asian Chicken Salad", description: "Mixed greens, grilled chicken, sesame dressing, and crispy noodles", price: 16.99, image: asianChickenSalad, rating: 4.7, deliveryTime: "15-20 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, basil, and balsamic glaze", price: 13.99, image: capreseSalad, rating: 4.6, deliveryTime: "10-15 min", restaurant: "Green Garden", category: "Salads" },
    { name: "Taco Salad", description: "Lettuce, beans, cheese, salsa, avocado in tortilla bowl", price: 14.99, image: tacoSalad, rating: 4.5, deliveryTime: "15-20 min", restaurant: "Green Garden", category: "Salads" },

    // Sushi (10 dishes)
    { name: "Sushi Combo Deluxe", description: "8 pieces of premium nigiri with California and spicy tuna rolls", price: 32.99, image: salmonSushi, rating: 4.7, deliveryTime: "30-35 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Salmon Lover Set", description: "6 pieces salmon nigiri with salmon avocado roll", price: 28.99, image: salmonNigiri, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Dragon Roll", description: "Eel, cucumber inside, avocado on top with eel sauce", price: 16.99, image: dragonRoll, rating: 4.9, deliveryTime: "20-25 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Rainbow Roll", description: "California roll topped with assorted sashimi", price: 18.99, image: rainbowRoll, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Spicy Tuna Roll", description: "Spicy tuna with cucumber and avocado", price: 12.99, image: spicyTunaRoll, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Philadelphia Roll", description: "Salmon, cream cheese, and cucumber", price: 13.99, image: philadelphiaRoll, rating: 4.5, deliveryTime: "15-20 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Chirashi Bowl", description: "Assorted sashimi over sushi rice with miso soup", price: 24.99, image: chirashiBowl, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Tempura Roll", description: "Shrimp tempura with avocado and cucumber", price: 14.99, image: tempuraRoll, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "California Roll", description: "Crab, avocado, and cucumber", price: 11.99, image: californiaRoll, rating: 4.4, deliveryTime: "15-20 min", restaurant: "Tokyo Express", category: "Sushi" },
    { name: "Tuna Sashimi", description: "Fresh tuna sashimi slices with wasabi and soy sauce", price: 22.99, image: tunaSashimi, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Tokyo Express", category: "Sushi" },

    // Tacos (14 dishes)
    { name: "Beef Tacos", description: "Seasoned ground beef with lettuce, cheese, and salsa", price: 12.99, image: beefTacos, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Chicken Tacos", description: "Grilled chicken with cilantro, onions, and lime", price: 12.99, image: chickenTacos, rating: 4.7, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Fish Tacos", description: "Beer-battered fish with cabbage slaw and chipotle mayo", price: 15.99, image: fishTacos, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Carnitas Tacos", description: "Slow-cooked pork with onions and cilantro", price: 14.99, image: carnitasTacos, rating: 4.9, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Shrimp Tacos", description: "Grilled shrimp with avocado and mango salsa", price: 16.99, image: shrimpTacos, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Veggie Tacos", description: "Roasted vegetables with black beans and avocado", price: 11.99, image: veggieTacos, rating: 4.5, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Al Pastor Tacos", description: "Marinated pork with pineapple and onions", price: 14.99, image: alPastorTacos, rating: 4.7, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Barbacoa Tacos", description: "Slow-cooked beef with cilantro and onions", price: 15.99, image: barbacoa, rating: 4.8, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Chorizo Tacos", description: "Spicy chorizo with eggs and cheese", price: 13.99, image: chorizoTacos, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Breakfast Tacos", description: "Scrambled eggs with bacon and cheese", price: 10.99, image: breakfastTacos, rating: 4.5, deliveryTime: "10-15 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Steak Tacos", description: "Grilled steak with peppers and onions", price: 16.99, image: steakTacos, rating: 4.9, deliveryTime: "20-25 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Quesadilla Tacos", description: "Crispy quesadilla-style tacos with cheese", price: 12.99, image: quesadillaTacos, rating: 4.6, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Buffalo Chicken Tacos", description: "Spicy buffalo chicken with blue cheese crumbles", price: 14.99, image: buffaloChickenTacos, rating: 4.7, deliveryTime: "15-20 min", restaurant: "Taco Fiesta", category: "Tacos" },
    { name: "Korean BBQ Tacos", description: "Korean marinated beef with kimchi and sesame", price: 17.99, image: koreanBbqTacos, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Taco Fiesta", category: "Tacos" },

    // Pasta (11 dishes)
    { name: "Fettuccine Alfredo", description: "Creamy alfredo sauce with parmesan cheese", price: 16.99, image: fettuccineAlfredo, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Pasta Place", category: "Pasta" },
    { name: "Pesto Linguine", description: "Fresh basil pesto with pine nuts and parmesan", price: 17.99, image: pestoLinguine, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Pasta Place", category: "Pasta" },
    { name: "Lasagna", description: "Layers of pasta with meat sauce and three cheeses", price: 19.99, image: lasagna, rating: 4.9, deliveryTime: "30-35 min", restaurant: "Pasta Place", category: "Pasta" },
    { name: "Spaghetti Carbonara", description: "Pasta with eggs, bacon, parmesan, and black pepper", price: 18.99, image: spaghettiCarbonara, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Pasta Place", category: "Pasta" },
    { name: "Penne Arrabbiata", description: "Spicy tomato sauce with garlic and red peppers", price: 15.99, image: penneArrabbiata, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Pasta Place", category: "Pasta" },
    { name: "Chicken Parmigiana", description: "Breaded chicken with marinara and mozzarella", price: 21.99, image: chickenParmigiana, rating: 4.7, deliveryTime: "25-30 min", restaurant: "Pasta Place", category: "Pasta" },
    { name: "Cheese Ravioli", description: "Stuffed pasta with ricotta in tomato basil sauce", price: 17.99, image: ravioli, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Pasta Place", category: "Pasta" },
    { name: "Seafood Linguine", description: "Mixed seafood in white wine garlic sauce", price: 24.99, image: seafoodLinguine, rating: 4.8, deliveryTime: "25-30 min", restaurant: "Pasta Place", category: "Pasta" },
    { name: "Potato Gnocchi", description: "Handmade gnocchi in brown butter sage sauce", price: 18.99, image: gnocchi, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Pasta Place", category: "Pasta" },
    { name: "Cheese Tortellini", description: "Ring pasta stuffed with cheese in cream sauce", price: 17.99, image: tortellini, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Pasta Place", category: "Pasta" },
    { name: "Mac and Cheese", description: "Classic macaroni with three-cheese sauce", price: 14.99, image: macaroniCheese, rating: 4.5, deliveryTime: "15-20 min", restaurant: "Pasta Place", category: "Pasta" },

    // Wings (9 dishes)
    { name: "BBQ Wings", description: "Crispy wings with tangy BBQ sauce", price: 13.99, image: bbqWings, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Wing Zone", category: "Wings" },
    { name: "Buffalo Wings", description: "Classic hot wings with blue cheese dip", price: 13.99, image: buffaloWings, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Wing Zone", category: "Wings" },
    { name: "Honey Garlic Wings", description: "Sweet and savory honey garlic glazed wings", price: 14.99, image: honeyGarlicWings, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Wing Zone", category: "Wings" },
    { name: "Korean Wings", description: "Crispy wings with Korean gochujang glaze", price: 15.99, image: koreanWings, rating: 4.9, deliveryTime: "25-30 min", restaurant: "Wing Zone", category: "Wings" },
    { name: "Teriyaki Wings", description: "Wings glazed with sweet teriyaki sauce", price: 14.99, image: teriyakiWings, rating: 4.6, deliveryTime: "20-25 min", restaurant: "Wing Zone", category: "Wings" },
    { name: "Lemon Pepper Wings", description: "Dry seasoned wings with lemon pepper spice", price: 13.99, image: lemonPepperWings, rating: 4.5, deliveryTime: "20-25 min", restaurant: "Wing Zone", category: "Wings" },
    { name: "Hot Wings", description: "Extra spicy wings for heat lovers", price: 13.99, image: hotWings, rating: 4.7, deliveryTime: "20-25 min", restaurant: "Wing Zone", category: "Wings" },
    { name: "Parmesan Wings", description: "Wings tossed in garlic parmesan sauce", price: 15.99, image: parmesanWings, rating: 4.8, deliveryTime: "20-25 min", restaurant: "Wing Zone", category: "Wings" },
    { name: "Jamaican Jerk Wings", description: "Spicy Caribbean jerk seasoned wings", price: 15.99, image: jamaicanJerkWings, rating: 4.7, deliveryTime: "25-30 min", restaurant: "Wing Zone", category: "Wings" },

    // Smoothies (7 dishes)
    { name: "Green Goddess", description: "Spinach, apple, banana, and ginger smoothie", price: 8.99, image: greenSmoothie, rating: 4.6, deliveryTime: "5-10 min", restaurant: "Smooth Operator", category: "Smoothies" },
    { name: "Tropical Paradise", description: "Mango, pineapple, coconut, and lime smoothie", price: 9.99, image: tropicalSmoothie, rating: 4.8, deliveryTime: "5-10 min", restaurant: "Smooth Operator", category: "Smoothies" },
    { name: "Chocolate PB Power", description: "Chocolate, peanut butter, banana protein smoothie", price: 10.99, image: chocolatePbSmoothie, rating: 4.9, deliveryTime: "5-10 min", restaurant: "Smooth Operator", category: "Smoothies" },
    { name: "Berry Blast", description: "Mixed berries with yogurt and honey", price: 8.99, image: berryBlastSmoothie, rating: 4.7, deliveryTime: "5-10 min", restaurant: "Smooth Operator", category: "Smoothies" },
    { name: "Protein Power", description: "Vanilla protein with banana and almond milk", price: 11.99, image: proteinPowerSmoothie, rating: 4.5, deliveryTime: "5-10 min", restaurant: "Smooth Operator", category: "Smoothies" },
    { name: "Acai Energy Bowl", description: "Acai berries with granola and fresh fruit", price: 12.99, image: acaiBowlSmoothie, rating: 4.8, deliveryTime: "10-15 min", restaurant: "Smooth Operator", category: "Smoothies" },
    { name: "Kale Detox", description: "Kale, cucumber, apple, and lemon cleansing blend", price: 9.99, image: kaleCleanseSmoothie, rating: 4.4, deliveryTime: "5-10 min", restaurant: "Smooth Operator", category: "Smoothies" },
  ];

  const filteredDishes = selectedCategory === "All" 
    ? allDishes 
    : allDishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-hero-gradient bg-clip-text text-transparent">
          All Dishes
        </h1>
        
        {/* Category Filter */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            onClick={() => setSelectedCategory("All")}
            className="whitespace-nowrap"
          >
            All ({allDishes.length})
          </Button>
          {categories.map((category) => (
            <FoodCategory
              key={category.name}
              name={category.name}
              image={category.image}
              count={category.count}
              isActive={selectedCategory === category.name}
              onClick={() => setSelectedCategory(category.name)}
            />
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDishes.map((dish, index) => (
            <FoodCard
              key={index}
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
      
      <Footer />
    </div>
  );
};

export default AllDishes;