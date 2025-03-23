import React from "react";

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;