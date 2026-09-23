import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./App.css";

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 18,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 12,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Boston Fern",
    price: 16,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 22,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: 14,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },

  // Low Maintenance Plants
  {
    id: 7,
    name: "ZZ Plant",
    price: 20,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1614594575810-9b8b9b3d1c25?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Pothos",
    price: 13,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 17,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f2360af8e4?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Chinese Evergreen",
    price: 19,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Cast Iron Plant",
    price: 21,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Dracaena",
    price: 24,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=500&q=80",
  },

  // Decorative Plants
  {
    id: 13,
    name: "Monstera",
    price: 25,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1614594575810-9b8b9b3d1c25?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Fiddle Leaf Fig",
    price: 30,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Calathea",
    price: 23,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Bird of Paradise",
    price: 32,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Philodendron",
    price: 18,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Croton",
    price: 20,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/products">Plants</a>
          <a href="/cart">Cart ({cartCount})</a>
        </div>
      </nav>

      <div className="product-container">
        <h1>Our Houseplants</h1>

        {categories.map((category) => (
          <section key={category} className="plant-category">
            <h2>{category}</h2>

            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>

                    <p className="plant-price">
                      ${plant.price.toFixed(2)}
                    </p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
