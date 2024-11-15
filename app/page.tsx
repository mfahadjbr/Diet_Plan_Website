"use client"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { InfoIcon } from 'lucide-react'
type Meal = {
  name: string;
  image: string;
  calories: number;
  ingredients: string[];
  vitamins: string[];
};

type DayPlan = {
  day: string;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
};

interface DietTableProps {
  plan: DayPlan[];
}
export default function DietPlan() {
  const [, setActiveTab] = useState("vegetarian")

  const dietPlans = {
    vegetarian: [
      {
        day: "Monday",
        breakfast: {
          name: "Oatmeal with fruits",
          image: "/1.jpg",
          calories: 300,
          ingredients: ["1/2 cup oats", "1 banana", "1 tbsp honey", "1/4 cup mixed berries"],
          vitamins: ["B1", "C", "Potassium"]
        },
        lunch: {
          name: "Quinoa salad",
          image: "/2.jpg",
          calories: 400,
          ingredients: ["1 cup cooked quinoa", "1/2 cup mixed vegetables", "1 tbsp olive oil", "1 tbsp lemon juice"],
          vitamins: ["B6", "E", "Iron"]
        },
        dinner: {
          name: "Vegetable stir-fry",
          image: "/3.jpg",
          calories: 350,
          ingredients: ["1 cup mixed vegetables", "1/2 cup tofu", "1 tbsp soy sauce", "1 tsp sesame oil"],
          vitamins: ["K", "C", "Calcium"]
        },
      },
      {
        day: "Tuesday",
        breakfast: {
          name: "Smoothie bowl",
          image: "/4.jpg",
          calories: 250,
          ingredients: ["1 frozen banana", "1/2 cup mixed berries", "1/4 cup almond milk", "1 tbsp chia seeds"],
          vitamins: ["C", "B6", "Manganese"]
        },
        lunch: {
          name: "Lentil soup",
          image: "/5.jpg",
          calories: 300,
          ingredients: ["1 cup cooked lentils", "1/2 cup mixed vegetables", "1 tsp cumin", "1 cup vegetable broth"],
          vitamins: ["B1", "Folate", "Iron"]
        },
        dinner: {
          name: "Eggplant parmesan",
          image: "/6.jpg",
          calories: 450,
          ingredients: ["1 medium eggplant", "1/4 cup tomato sauce", "1/4 cup mozzarella cheese", "1 tbsp olive oil"],
          vitamins: ["K", "C", "B6"]
        },
      },
      {
        day: "Wednesday",
        breakfast: {
          name: "Avocado toast",
          image: "/7.jpg",
          calories: 350,
          ingredients: ["1 slice whole grain bread", "1/2 avocado", "1 tsp lemon juice", "Salt and pepper to taste"],
          vitamins: ["K", "C", "B5"]
        },
        lunch: {
          name: "Greek salad",
          image: "/8.jpg",
          calories: 300,
          ingredients: ["2 cups mixed greens", "1/4 cup feta cheese", "1/4 cup olives", "1 tbsp olive oil"],
          vitamins: ["K", "A", "C"]
        },
        dinner: {
          name: "Vegetable curry",
          image: "/9.jpg",
          calories: 400,
          ingredients: ["1 cup mixed vegetables", "1/2 cup coconut milk", "1 tbsp curry powder", "1/2 cup brown rice"],
          vitamins: ["A", "C", "Iron"]
        },
      },
      {
        day: "Thursday",
        breakfast: {
          name: "Chia seed pudding",
          image: "/10.jpg",
          calories: 200,
          ingredients: ["2 tbsp chia seeds", "1/2 cup almond milk", "1 tsp honey", "1/4 cup mixed berries"],
          vitamins: ["Calcium", "Omega-3", "Phosphorus"]
        },
        lunch: {
          name: "Veggie wrap",
          image: "/11.jpg",
          calories: 350,
          ingredients: ["1 whole wheat tortilla", "1/4 cup hummus", "1 cup mixed vegetables", "1 tbsp tahini"],
          vitamins: ["B1", "C", "Zinc"]
        },
        dinner: {
          name: "Stuffed bell peppers",
          image: "/12.jpg",
          calories: 300,
          ingredients: ["2 bell peppers", "1/2 cup cooked quinoa", "1/4 cup black beans", "1/4 cup salsa"],
          vitamins: ["A", "C", "B6"]
        },
      },
      {
        day: "Friday",
        breakfast: {
          name: "Fruit parfait",
          image: "/13.jpg",
          calories: 250,
          ingredients: ["1/2 cup Greek yogurt", "1/4 cup granola", "1/2 cup mixed fruits", "1 tsp honey"],
          vitamins: ["B12", "Calcium", "Probiotics"]
        },
        lunch: {
          name: "Caprese sandwich",
          image: "/14.jpg",
          calories: 400,
          ingredients: ["2 slices whole grain bread", "2 slices mozzarella", "1 tomato", "1 tbsp balsamic glaze"],
          vitamins: ["C", "Calcium", "A"]
        },
        dinner: {
          name: "Vegetable lasagna",
          image: "/15.jpg",
          calories: 500,
          ingredients: ["2 lasagna sheets", "1/2 cup mixed vegetables", "1/4 cup ricotta cheese", "1/4 cup tomato sauce"],
          vitamins: ["A", "C", "Calcium"]
        },
      },
      {
        day: "Saturday",
        breakfast: {
          name: "Pancakes with maple syrup",
          image: "/16.jpg",
          calories: 400,
          ingredients: ["1 cup whole wheat flour", "1 egg", "3/4 cup almond milk", "1 tbsp maple syrup"],
          vitamins: ["B1", "B3", "Manganese"]
        },
        lunch: {
          name: "Vegetable sushi rolls",
          image: "/17.jpg",
          calories: 300,
          ingredients: ["1 cup sushi rice", "1 nori sheet", "1/2 cup mixed vegetables", "1 tbsp soy sauce"],
          vitamins: ["B1", "C", "Iodine"]
        },
        dinner: {
          name: "Mushroom risotto",
          image: "/18.jpg",
          calories: 450,
          ingredients: ["1 cup arborio rice", "1/2 cup mushrooms", "1/4 cup parmesan cheese", "2 cups vegetable broth"],
          vitamins: ["B3", "D", "Selenium"]
        },
      },
      {
        day: "Sunday",
        breakfast: {
          name: "Vegetable omelette",
          image: "/19.jpg",
          calories: 300,
          ingredients: ["2 eggs", "1/4 cup mixed vegetables", "1 tbsp olive oil", "1 slice whole grain toast"],
          vitamins: ["B12", "D", "A"]
        },
        lunch: {
          name: "Falafel wrap",
          image: "/20.jpg",
          calories: 450,
          ingredients: ["3 falafel balls", "1 whole wheat pita", "1/4 cup tzatziki", "1/2 cup mixed greens"],
          vitamins: ["B1", "C", "Zinc"]
        },
        dinner: {
          name: "Grilled vegetable skewers",
          image: "/21.jpg",
          calories: 350,
          ingredients: ["1 cup mixed vegetables", "1 tbsp olive oil", "1 tsp herbs de Provence", "1/2 cup quinoa"],
          vitamins: ["A", "C", "K"]
        },
      },
    ],
    nonVegetarian: [
      {
        day: "Monday",
        breakfast: {
          name: "Scrambled eggs",
          image: "/22.jpg",
          calories: 300,
          ingredients: ["2 eggs", "1/4 cup milk", "1 slice whole grain toast", "1 tsp butter"],
          vitamins: ["B12", "D", "A"]
        },
        lunch: {
          name: "Grilled chicken salad",
          image: "/23.jpg",
          calories: 400,
          ingredients: ["4 oz grilled chicken breast", "2 cups mixed greens", "1 tbsp olive oil", "1 tbsp balsamic vinegar"],
          vitamins: ["B6", "C", "Iron"]
        },
        dinner: {
          name: "Baked salmon",
          image: "/24.jpg",
          calories: 450,
          ingredients: ["4 oz salmon fillet", "1 cup steamed broccoli", "1/2 cup brown rice", "1 tsp lemon juice"],
          vitamins: ["D", "B12", "Omega-3"]
        },
      },
      {
        day: "Tuesday",
        breakfast: {
          name: "Greek yogurt with granola",
          image: "/25.jpg",
          calories: 250,
          ingredients: ["1 cup Greek yogurt", "1/4 cup granola", "1 tbsp honey", "1/4 cup mixed berries"],
          vitamins: ["B12", "Calcium", "Probiotics"]
        },
        lunch: {
          name: "Turkey sandwich",
          image: "/26.jpg",
          calories: 350,
          ingredients: ["2 slices whole grain bread", "3 oz turkey breast", "1 slice cheese", "Lettuce and tomato"],
          vitamins: ["B3", "B6", "Selenium"]
        },
        dinner: {
          name: "Beef stir-fry",
          image: "/27.jpg",
          calories: 500,
          ingredients: ["4 oz beef strips", "1 cup mixed vegetables", "1 tbsp soy sauce", "1/2 cup brown rice"],
          vitamins: ["B12", "Iron", "Zinc"]
        },
      },
      {
        day: "Wednesday",
        breakfast: {
          name: "Breakfast burrito",
          image: "/29.jpg",
          calories: 400,
          ingredients: ["1 whole wheat tortilla", "2 scrambled eggs", "1/4 cup black beans", "2 tbsp salsa"],
          vitamins: ["B12", "C", "Folate"]
        },
        lunch: {
          name: "Tuna salad",
          image: "/28.jpg",
          calories: 300,
          ingredients: ["3 oz canned tuna", "1 tbsp mayonnaise", "1 cup mixed greens", "1/4 cup cherry tomatoes"],
          vitamins: ["B12", "D", "Omega-3"]
        },
        dinner: {
          name: "Grilled lamb chops",
          image: "/30.jpg",
          calories: 550,
          ingredients: ["4 oz lamb chop", "1 cup roasted vegetables", "1/2 cup couscous", "1 tsp mint sauce"],
          vitamins: ["B12", "Iron", "Zinc"]
        },
      },
      {
        day: "Thursday",
        breakfast: {
          name: "Smoked salmon bagel",
          image: "/31.jpg",
          calories: 350,
          ingredients: ["1 whole grain bagel", "2 oz smoked salmon", "1 tbsp cream cheese", "Capers and red onion"],
          vitamins: ["D", "B12", "Omega-3"]
        },
        lunch: {
          name: "Chicken Caesar wrap",
          image: "/32.jpg",
          calories: 400,
          ingredients: ["1 whole wheat wrap", "3 oz grilled chicken", "1 tbsp Caesar dressing", "Romaine lettuce"],
          vitamins: ["B6", "C", "K"]
        },
        dinner: {
          name: "Shrimp scampi",
          image: "/33.jpg",
          calories: 450,
          ingredients: ["4 oz shrimp", "2 oz whole wheat pasta", "1 tbsp olive oil", "2 cloves garlic"],
          vitamins: ["B12", "D", "Selenium"]
        },
      },
      {
        day: "Friday",
        breakfast: {
          name: "Protein smoothie",
          image: "/34.jpg",
          calories: 300,
          ingredients: ["1 scoop protein powder", "1 banana", "1 cup almond milk", "1 tbsp peanut butter"],
          vitamins: ["B12", "D", "Potassium"]
        },
        lunch: {
          name: "Chicken noodle soup",
          image: "/35.jpg",
          calories: 350,
          ingredients: ["2 oz chicken breast", "1/2 cup noodles", "1 cup vegetables", "2 cups chicken broth"],
          vitamins: ["A", "C", "Niacin"]
        },
        dinner: {
          name: "Grilled steak",
          image: "/36.jpg",
          calories: 600,
          ingredients: ["6 oz sirloin steak", "1 baked potato", "1 cup steamed asparagus", "1 tsp butter"],
          vitamins: ["B12", "Iron", "Zinc"]
        },
      },
      {
        day: "Saturday",
        breakfast: {
          name: "Eggs Benedict",
          image: "/37.jpg",
          calories: 500,
          ingredients: ["2 poached eggs", "1 English muffin", "2 oz ham", "2 tbsp hollandaise sauce"],
          vitamins: ["A", "D", "B12"]
        },
        lunch: {
          name: "Club sandwich",
          image: "/38.jpg",
          calories: 450,
          ingredients: ["3 slices whole grain bread", "2 oz turkey", "2 oz ham", "1 slice bacon", "Lettuce and tomato"],
          vitamins: ["B3", "B6", "Selenium"]
        },
        dinner: {
          name: "Roast chicken",
          image: "/39.jpg",
          calories: 500,
          ingredients: ["4 oz roasted chicken", "1 cup roasted vegetables", "1/2 cup quinoa", "1 tsp herbs"],
          vitamins: ["B6", "Niacin", "Selenium"]
        },
      },
      {
        day: "Sunday",
        breakfast: {
          name: "Full English breakfast",
          image: "/40.jpg",
          calories: 700,
          ingredients: ["2 eggs", "2 sausages", "2 slices bacon", "1 grilled tomato", "1 slice toast"],
          vitamins: ["B12", "D", "Iron"]
        },
        lunch: {
          name: "Seafood paella",
          image: "/41.jpg",
          calories: 550,
          ingredients: ["2 oz mixed seafood", "1/2 cup rice", "1/4 cup peas", "1 tbsp olive oil"],
          vitamins: ["B12", "D", "Selenium"]
        },
        dinner: {
          name: "BBQ ribs",
          image: "/42.jpg",
          calories: 650,
          ingredients: ["6 oz pork ribs", "1/4 cup BBQ sauce", "1 corn on the cob", "1 cup coleslaw"],
          vitamins: ["B1", "B6", "Zinc"]
        },
      },
    ],
  }

  return (
    <div className="container max-w-full px-4 py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
      <motion.h1 
        className="text-4xl font-bold text-center mb-8 text-white "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frontend Website For Diet Plan
      </motion.h1>
      <motion.h1 
        className="text-4xl font-bold text-center mb-8 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Full Week Diet Plan
      </motion.h1>
      <Tabs defaultValue="vegetarian" className="w-full ">
        <TabsList className="grid w-full grid-cols-2 mb-10">
          <TabsTrigger 
            value="vegetarian" 
            onClick={() => setActiveTab("vegetarian")}
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
          >
            Vegetarian
          </TabsTrigger>
          <TabsTrigger 
            value="nonVegetarian" 
            onClick={() => setActiveTab("nonVegetarian")}
            className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
          >
            Non-Vegetarian
          </TabsTrigger>
        </TabsList>
        <TabsContent value="vegetarian">
          <DietTable plan={dietPlans.vegetarian} />
        </TabsContent>
        <TabsContent value="nonVegetarian">
          <DietTable plan={dietPlans.nonVegetarian} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function DietTable({ plan }: DietTableProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16">
      {plan.map((day, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-blue-500 text-white text-center text-2xl">
              <CardTitle>{day.day}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-4">
              <MealCard meal="Breakfast" item={day.breakfast} />
              <MealCard meal="Lunch" item={day.lunch} />
              <MealCard meal="Dinner" item={day.dinner} />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function MealCard({ meal, item }: { meal: string, item: Meal }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={meal}>
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center space-x-4 w-full">
            <div className="relative w-16 h-16 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-grow text-left">
              <CardDescription className="font-semibold text-lg">{meal}</CardDescription>
              <CardDescription>{item.name}</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-yellow-300 text-black">
              {item.calories} cal
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="mt-2 space-y-2">
            <div>
              <h4 className="font-semibold mb-1">Ingredients:</h4>
              <ul className="list-disc list-inside">
                {item.ingredients.map((ingredient, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {ingredient}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 flex items-center">
                Vitamins
                <Popover>
                  <PopoverTrigger>
                    <InfoIcon className="w-4 h-4 ml-2 text-gray-500" />
                  </PopoverTrigger>
                  <PopoverContent>
                    These are the main vitamins and minerals provided by this meal. A balanced diet should include a variety of nutrients.
                  </PopoverContent>
                </Popover>
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.vitamins.map((vitamin, index) => (
                  <motion.span
                    key={index}
                    className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {vitamin}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}