import React from "react";
import TShirt from "../tsHIRT/TShirt";
import "./Cart.css"

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p className="orange">Please add some products</p>;
  } else {
    message = (
      <div>
        <small>thanks for wasting your moneyyy</small>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>Order Summary: {cart.length}</h2>
      {cart.length > 2 ? <span className="teal">R o kino</span> : <span className="red">gorib</span>}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 7 && <p className="purple">Free delivery!!</p>}
      {cart.length === 7 || <p className="red">7 item free delivery</p>}
    </div>
  );
};

export default Cart;
