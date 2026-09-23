import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "./CartSlice";
import "./App.css";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/products">Plants</a>
          <a href="/cart">Cart ({cartCount})</a>
        </div>
      </nav>

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <div className="cart-summary">
          <h2>Total Plants: {cartCount}</h2>
          <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>

                  <p>Unit Price: ${item.price.toFixed(2)}</p>

                  <p>
                    Item Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>

                    <span>Quantity: {item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-buttons">
          <a href="/products" className="continue-button">
            Continue Shopping
          </a>

          <button
            className="checkout-button"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
