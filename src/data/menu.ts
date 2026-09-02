export type MenuItem = {
  name: string;
  price?: string;
  description?: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  intro?: string;
  items: MenuItem[];
  extras?: { title: string; items: string[] };
};

export const menu: MenuCategory[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    items: [
      {
        name: "Southwest Egg Rolls",
        price: "$12.99",
        description:
          "Three egg rolls filled with black beans, chicken, jalapeño peppers, corn, Monterey Jack cheese, peppers, spinach, and cilantro. Served with a spicy ranch sauce.",
      },
      {
        name: "Chicken Tenders",
        price: "$9.99",
        description:
          "4 hand-breaded tenders served with your choice of sauce: Ranch, BBQ, Buffalo, or Honey Mustard.",
      },
      {
        name: "Chorizo Queso Dip",
        price: "$9.99",
        description: "Served with tortilla chips.",
      },
      {
        name: "Chips & Salsa",
        price: "$5.25",
        note: "Add guacamole +$2.95.",
      },
      {
        name: "Mozzarella Wontons",
        price: "$11.99",
        description: "4 wontons served with your choice of ranch or marinara.",
      },
      {
        name: "Dynamite Shrimp",
        price: "$13.99",
        description:
          "8 pieces of shrimp, battered, fried, and coated in Boom Boom sauce.",
      },
      {
        name: "Cheese Quesadilla",
        price: "$9.99",
        description: "Served with sour cream and salsa.",
        note: "Add chicken +$3.00.",
      },
      {
        name: "Jalapeño Poppers",
        price: "$11.99",
        description:
          "6 peppers filled with cheddar cheese, served with a side of ranch dressing.",
      },
      {
        name: "Cheeseburger Sliders",
        price: "$10.99",
        description:
          "3 2-oz burgers with American cheese topped with a Baller's twist. Optional: lettuce, tomato, onion, and pickle.",
      },
      {
        name: "Pretzel Sticks",
        price: "$9.99",
        description: "4 served with cheese dipping sauce.",
      },
      {
        name: "Garlic White Cheddar Cheese Curds",
        price: "$11.99",
        description: "Served with spicy ranch.",
      },
      {
        name: "Toasted Beef Ravioli",
        price: "$10.99",
        description: "12 raviolis served with a side of marinara sauce.",
      },
      {
        name: "Basket of Fries",
        price: "$5.99",
        note: "Add nacho cheese and bacon for an additional $2.50.",
      },
      { name: "Basket of Sweet Potato Fries", price: "$7.99" },
      { name: "Basket of Tater Tots", price: "$6.99" },
      { name: "Basket of Onion Rings", price: "$6.99" },
      {
        name: "Baller's Trio Sampler",
        price: "$12.99",
        description:
          "Chicken tenders with your choice of dipping sauce, garlic white cheddar cheese curds with marinara sauce or ranch, and toasted ravioli with your choice of dipping sauce.",
        note: "Additional dipping sauces +$1.25 each. Add cheese +$1.75.",
      },
    ],
  },
  {
    id: "wings",
    label: "Wings",
    items: [
      {
        name: "10 Jumbo Wings",
        price: "$13.99",
        description: "Served with ranch or bleu cheese. Includes carrots and celery.",
      },
    ],
    extras: {
      title: "Sauce Choices",
      items: [
        "BBQ",
        "Hot",
        "Buffalo",
        "Mango Jalapeño",
        "Lemon Pepper",
        "Carolina Tangy Gold",
        "Garlic Parmesan",
      ],
    },
  },
  {
    id: "salads",
    label: "Salads",
    items: [
      {
        name: "Caesar Salad",
        price: "$9.99",
        description:
          "Crispy romaine lettuce, Parmesan cheese, tomato, hard-boiled egg, and croutons tossed in Caesar dressing.",
        note: "Add grilled or blackened chicken +$3.00. Add steak +$5.00. Add shrimp +$5.00.",
      },
      {
        name: "Baller's Salad",
        price: "$15.99",
        description:
          "Choice of grilled or crispy chicken served on spring salad mix with tomatoes, bacon, hard-boiled egg, cucumber, shredded cheddar cheese, topped with French fries, served with your choice of dressing.",
        note: "Substitute steak +$2.00. Substitute shrimp +$2.00.",
      },
      {
        name: "Berry Salad",
        price: "$14.99",
        description:
          "Almonds, feta cheese, mandarin oranges, grapefruit, strawberries, raspberries, blueberries with a raspberry vinaigrette.",
      },
      {
        name: "Chicken Chopped Salad",
        price: "$15.99",
        description:
          "Chicken, bacon, avocado, cucumber, tomato, and red onion tossed in a house dressing.",
      },
      {
        name: "Side House Salad",
        price: "$5.99",
        description:
          "Salad mix, croutons, red onion, cherry tomatoes, and cheddar cheese.",
      },
      {
        name: "Side Caesar Salad",
        price: "$5.99",
        description:
          "Crispy romaine lettuce, Parmesan cheese, and croutons tossed in Caesar dressing.",
      },
    ],
    extras: {
      title: "Dressings",
      items: [
        "Ranch",
        "Bleu Cheese",
        "Italian",
        "French",
        "Raspberry Vinaigrette",
        "Thousand Island",
        "House Dressing",
        "Honey Mustard",
      ],
    },
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    intro:
      "Includes choice of fries, tater tots, coleslaw, or homemade chips. Substitute onion rings +$1.00, sweet potato fries +$1.50, fruit cup +$2.00, or House/Caesar Salad +$2.00.",
    items: [
      {
        name: "Grilled Chicken Sandwich",
        price: "$14.99",
        description:
          "Grilled chicken, applewood bacon, cheddar, lettuce, tomato, mayo on a brioche bun.",
      },
      {
        name: "Fried Chicken Sandwich",
        price: "$14.99",
        description:
          "Fried chicken, lettuce, tomato, pickle, and mayo on a brioche bun.",
      },
      {
        name: "Buffalo Chicken Sandwich",
        price: "$14.99",
        description:
          "Fried or grilled chicken tossed in your choice of hot or mild sauce with lettuce, tomato, and onion on a brioche bun.",
      },
      {
        name: "Patty Melt",
        price: "$12.99",
        description:
          "American cheese, grilled onions, served on marble rye bread.",
      },
      {
        name: "Grilled Cheese",
        price: "$9.99",
        description:
          "American and pepper jack cheese with bacon served on Texas toast.",
      },
      {
        name: "BLT",
        price: "$11.99",
        description: "Bacon, lettuce, tomato, and mayo on Texas toast.",
      },
      {
        name: "Reuben",
        price: "$14.99",
        description:
          "Corned beef, Swiss cheese, sauerkraut, Thousand Island dressing served on marble rye bread.",
      },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    intro:
      "Includes choice of fries, tater tots, coleslaw, or homemade chips. Substitute onion rings +$1.00, sweet potato fries +$1.50, fruit cup +$2.00, or House/Caesar Salad +$2.00.",
    items: [
      {
        name: "Grilled Chicken Caesar",
        price: "$14.99",
        description:
          "Romaine lettuce, grilled chicken, crushed croutons, Parmesan cheese, and Caesar dressing.",
      },
      {
        name: "Buffalo Chicken",
        price: "$14.99",
        description:
          "Chicken tenders tossed in buffalo sauce, cheddar cheese, lettuce, tomato, and ranch dressing.",
      },
      {
        name: "Chicken Bacon Ranch",
        price: "$14.99",
        description:
          "Chicken tenders, bacon, mozzarella cheese, lettuce, tomato, and ranch dressing.",
      },
      {
        name: "Buffalo Steak",
        price: "$15.99",
        description:
          "Steak, lettuce, onion, tomato, cheddar cheese, smothered in buffalo sauce.",
      },
    ],
  },
  {
    id: "burgers",
    label: "½ lb. Angus Burgers",
    intro:
      "Farm to table. Includes choice of fries, tater tots, coleslaw, or homemade chips. Substitute onion rings +$1.00, sweet potato fries +$1.50, fruit cup +$2.00, or House/Caesar Salad +$2.00. Substitute grilled chicken or black bean burger at no additional charge. Gluten-free bun +$2.50.",
    items: [
      {
        name: "Bacon Burger",
        price: "$17.50",
        description:
          "Angus patty, bacon, pepper jack and American cheese, lettuce, tomato, and pickles on a brioche bun.",
      },
      {
        name: "Classic Cheeseburger",
        price: "$15.50",
        description:
          "Choice of cheese with lettuce, tomato, red onion, and pickles on a brioche bun.",
      },
      {
        name: "Cowboy Burger",
        price: "$17.50",
        description:
          "Cheddar cheese, BBQ sauce, onion straws, and bacon on a brioche bun.",
      },
      {
        name: "Baller's Hangover Burger",
        price: "$17.95",
        description:
          "Cheddar cheese, fried egg, smashed tater tots, bacon, house sriracha aioli on a brioche bun.",
      },
      {
        name: "Baller's Atomic Burger",
        price: "$17.50",
        description:
          "Angus patty with two slices of ghost pepper cheese, fresh jalapeño, mango habanero sauce on a brioche bun.",
      },
      {
        name: "Smash Burger",
        price: "$14.95",
        description:
          "Served with caramelized onions and American cheese on a brioche bun.",
      },
    ],
    extras: {
      title: "Additional Items & Cheese Options",
      items: [
        "Bacon +$2.00",
        "Sautéed Onions",
        "Sautéed Mushrooms",
        "Onion Straws or Jalapeños +$1.00",
        "Fried Egg +$1.50",
        "Extra Cheese +$1.25",
        "Cheese: American",
        "Cheese: Cheddar",
        "Cheese: Pepper Jack",
        "Cheese: Swiss",
        "Cheese: Mozzarella",
        "Cheese: Ghost Pepper",
      ],
    },
  },
  {
    id: "flatbreads",
    label: "Flatbread Pizzas",
    intro: "Made with our homemade pizza sauce.",
    items: [
      { name: "Cheese Flatbread", price: "$11.50" },
      {
        name: "Veggie Delight Flatbread",
        price: "$13.75",
        description: "Green peppers, onions, mushrooms, black olives, tomatoes.",
      },
      { name: "Pepperoni Flatbread", price: "$12.75" },
      { name: "Sausage Flatbread", price: "$12.75" },
      {
        name: "Barbecue Chicken Flatbread",
        price: "$14.75",
        description:
          "Moonshine BBQ sauce, grilled chicken, red onions, mozzarella cheese.",
      },
      {
        name: "Buffalo Chicken",
        price: "$14.75",
        description:
          "Buffalo sauce, grilled chicken, crumbled bleu cheese, red onions, mozzarella.",
      },
      {
        name: "Chicken Bacon Ranch",
        price: "$14.75",
        description:
          "Ranch, grilled chicken, bacon, cheddar cheese, mozzarella cheese.",
      },
    ],
    extras: {
      title: "Additional Toppings",
      items: [
        "Bacon +$1.25",
        "Sausage +$1.25",
        "Chicken +$2.00",
        "Veggies +$1.25: Green peppers",
        "Veggies +$1.25: Onions",
        "Veggies +$1.25: Mushrooms",
        "Veggies +$1.25: Black olives",
        "Veggies +$1.25: Jalapeños",
        "Veggies +$1.25: Tomatoes",
      ],
    },
  },
  {
    id: "sides",
    label: "Side Dishes",
    items: [
      { name: "French Fries", price: "$3.00" },
      { name: "Tater Tots", price: "$4.00" },
      { name: "Coleslaw", price: "$4.00" },
      { name: "Vegetable Medley", price: "$4.00" },
      { name: "Onion Rings", price: "$5.00" },
      { name: "Sweet Potato Fries", price: "$6.00" },
      { name: "Fruit Bowl", price: "$5.00" },
      { name: "Watermelon Bowl", price: "$5.00" },
    ],
  },
  {
    id: "kids",
    label: "Kids' Menu",
    intro:
      "10 years and under — $7.95. Kids' drinks — $1.00. All entrées served with choice of a side.",
    items: [
      { name: "Chicken Tenders" },
      { name: "Grilled Cheese" },
      { name: "Grilled Chicken Breast" },
      { name: "Hot Dog" },
      {
        name: "Cheeseburger Sliders",
        description:
          "Two 2-oz burgers with American cheese. Optional: lettuce, tomato, onion, and pickle.",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Chocolate Overload Cake", price: "$7.95" },
      { name: "Peanut Butter Explosion", price: "$7.95" },
      { name: "Salted Caramel Cheesecake", price: "$7.95" },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    intro: "$2.95 each",
    items: [
      { name: "Coke" },
      { name: "Diet Coke" },
      { name: "Coke Zero" },
      { name: "Sprite" },
      { name: "Ginger Ale" },
      { name: "Raspberry Tea" },
      { name: "Unsweetened Tea" },
      { name: "Lemonade" },
      { name: "Apple Juice" },
      { name: "Milk" },
    ],
  },
];
