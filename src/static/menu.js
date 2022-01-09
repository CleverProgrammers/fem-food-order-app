import burgerIcon from '../assets/images/foodCategories/burger.png'
import pizzaIcon from '../assets/images/foodCategories/pizza.png'
import hotdogIcon from '../assets/images/foodCategories/hotdog.png'
import snackIcon from '../assets/images/foodCategories/poutine.png'
import sodaIcon from '../assets/images/foodCategories/soda.png'
import tacoIcon from '../assets/images/foodCategories/taco.png'
import mushroomPizza from '../assets/images/food/mushroomPizza.jpg'
import italianPizza from '../assets/images/food/italianPizza.webp'
import pepperoniPizza from '../assets/images/food/pepperoniPizza.jpg'

export const menu = [
  {
    title: 'Pizza',
    icon: pizzaIcon,
    items: [
      {
        name: 'Mushroom Pizza',
        price: 7.49,
        rating: 5,
        emoji: '🍄',
        image: mushroomPizza,
      },
      {
        name: 'Italian Pizza',
        price: 12.98,
        rating: 5,
        emoji: '🇮🇹',
        image: italianPizza,
      },
      {
        name: 'Pepperoni Pizza',
        price: 9.99,
        rating: 5,
        emoji: '🌶️',
        image: pepperoniPizza,
      },
    ],
  },
  {
    title: 'Burger',
    icon: burgerIcon,
    items: [
      {
        name: 'Cheese Burger',
        price: 11.78,
        rating: 5,
        emoji: '🧀',
      },
      {
        name: 'Western Burger',
        price: 13.95,
        rating: 5,
        emoji: '🥓',
      },
    ],
  },
  {
    title: 'Hot Dog',
    icon: hotdogIcon,
    items: [
      {
        name: 'Hot Dog',
        price: 5.99,
        rating: 4,
        emoji: '🌭',
      },
    ],
  },
  {
    title: 'Taco',
    icon: tacoIcon,
    items: [
      {
        name: 'Taco',
        price: 5.99,
        rating: 5,
        emoji: '🌮',
      },
    ],
  },
  {
    title: 'Snack',
    icon: snackIcon,
    items: [
      {
        name: 'Poutine',
        price: 3.99,
        rating: 5,
        emoji: '🥨',
      },
    ],
  },
  {
    title: 'Soda',
    icon: sodaIcon,
    items: [
      {
        name: 'Coke',
        price: 1.99,
        rating: 5,
        emoji: '🥤',
      },
    ],
  },
]
