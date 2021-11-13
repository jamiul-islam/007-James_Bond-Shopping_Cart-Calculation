import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(props);

  // const totalReducer = (previous, product) => previous + product.price;
  // const total = cart.reduce(totalReducer, 0);
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.budget * product.quantity;
    // console.log(product.budget);
    totalQuantity = totalQuantity + product.quantity;
  }

  return (
    <div style={{ position: "fixed" }}>
      <h1>watch history</h1>
      <h5>Movies Viewed: {totalQuantity}</h5>
      <p>Total Budget: {total}</p>
      <hr />
      {/* dynamically showing each element's name onClick */}
      {cart.map((item) => {
        return (
          <div>
            <p>Name: {item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
