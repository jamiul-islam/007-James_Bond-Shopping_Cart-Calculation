import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { name, rating, poster, Director, budget, releaseDate } = props.product;

  return (
    <div className="product">
      <div className="container">
        <div className="d-flex mb-3 mt-3">
          <div>
            <img src={poster} className="me-3 rounded-bottom" alt="" />
          </div>
          <div>
            <h4 className="product-name text-primary">{name}</h4>
            <p>Rating: {rating}</p>
            <p>Release Date: {releaseDate}</p>
            <p>
              <small>Director: {Director}</small>
            </p>
            <p>Budget: {budget}</p>
            <button
              onClick={() => props.handleAddToCart(props.product)}
              className="btn btn-outline-success"
            >
              <FontAwesomeIcon icon={faShoppingCart} /> add to cart
            </button>
            <br />
            <FontAwesomeIcon className="me-4 mt-3 text-danger" icon={faHeart} />
            <FontAwesomeIcon
              className="ms-5 mt-3 text-success"
              icon={faShare}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
