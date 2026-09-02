import type { LucideIcon } from "lucide-react";
import { Beef, Drumstick, Sandwich, Soup, Shrimp, Salad, Pizza } from "lucide-react";

export type Favorite = {
  name: string;
  price: string;
  tag: string;
  icon: LucideIcon;
  theme: "navy" | "red" | "split";
};

export const favorites: Favorite[] = [
  {
    name: "Bacon Burger",
    price: "$17.50",
    tag: "½ lb. Angus Burger",
    icon: Beef,
    theme: "red",
  },
  {
    name: "Baller's Hangover Burger",
    price: "$17.95",
    tag: "½ lb. Angus Burger",
    icon: Beef,
    theme: "split",
  },
  {
    name: "Jumbo Wings",
    price: "$13.99",
    tag: "10 Wings",
    icon: Drumstick,
    theme: "navy",
  },
  {
    name: "Buffalo Chicken Sandwich",
    price: "$14.99",
    tag: "Sandwich",
    icon: Sandwich,
    theme: "red",
  },
  {
    name: "Southwest Egg Rolls",
    price: "$12.99",
    tag: "Appetizer",
    icon: Soup,
    theme: "navy",
  },
  {
    name: "Dynamite Shrimp",
    price: "$13.99",
    tag: "Appetizer",
    icon: Shrimp,
    theme: "split",
  },
  {
    name: "Chicken Bacon Ranch Flatbread",
    price: "$14.75",
    tag: "Flatbread Pizza",
    icon: Pizza,
    theme: "navy",
  },
  {
    name: "Berry Salad",
    price: "$14.99",
    tag: "Salad",
    icon: Salad,
    theme: "red",
  },
];
