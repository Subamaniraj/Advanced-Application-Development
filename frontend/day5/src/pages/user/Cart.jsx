import React, { useState, useEffect } from 'react';
import '../../assets/css/Cart.css';
import img from '../../assets/images/dj.jpg';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Sample data for cart items
    const sampleCartItems = [
      {
        id: 1,
        name: 'Product 1',
        image: img,
        price: 10.99,
        quantity: 2,
      },
      {
        id: 2,
        name: 'Product 2',
        image: img,
        price: 15.99,
        quantity: 1,
      },
      {
        id: 3,
        name: 'Product 3',
        image: img,
        price: 20.99,
        quantity: 3,
      },
    ];

    // Store sample cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(sampleCartItems));

    // Set cart items state
    setCartItems(sampleCartItems);
  }, []);

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Render cart items
  const renderCartItems = () => {
    return cartItems.map((item, index) => (
      <div key={index} className="cart-item">
        <img src={item.image} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">{renderCartItems()}</div>
          <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
          <button className="checkout-button">Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
