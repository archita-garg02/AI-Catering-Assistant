const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Jaipur",
];

const cuisines = [
  "Indian",
  "Chinese",
  "Italian",
  "South Indian",
  "North Indian",
  "Continental",
  "Mexican",
  "Thai",
];

const foodTypes = ["Veg", "Non-Veg"];

const events = [
  "Wedding",
  "Birthday",
  "Corporate",
  "Party",
  "Engagement",
];

const caterers = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,

  name: `Royal Caterers ${index + 1}`,

  city: cities[Math.floor(Math.random() * cities.length)],

  cuisine: cuisines[Math.floor(Math.random() * cuisines.length)],

  foodType: foodTypes[Math.floor(Math.random() * foodTypes.length)],

  eventType: events[Math.floor(Math.random() * events.length)],

  rating: (4 + Math.random()).toFixed(1),

  reviews: Math.floor(Math.random() * 900) + 100,

  price: Math.floor(Math.random() * 1800) + 400,

  experience: Math.floor(Math.random() * 20) + 3,

  orders: Math.floor(Math.random() * 4000) + 500,

  verified: Math.random() > 0.2,

  image: "/images/caterers/caterer.jpg",
}));

export default caterers;