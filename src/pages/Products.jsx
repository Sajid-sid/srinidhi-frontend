import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import Productsbanner from "../assets/productsbanner.webp";
import { products } from "../assets/data/Products";
import { categories } from "../assets/data/categories";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products-page">
    
      <img src={Productsbanner} alt="product-banner" className="product-banner"/>
    
      {/* Page Heading */}

      <div className="heading">

        <h1>Products</h1>

        <p>
          We are widely acknowledged in the arena of Authorized Wholesale
          Dealer and Trader of Toshiba VRF SMMS-E Air Conditioning Unit,
          Carrier Superia Split Air Conditioner, Toshiba Cassette Digital Air
          Conditioner and many more.
        </p>

      </div>

      {/* Display Category Wise Products */}

      {categories.map((category) => {

        const categoryProducts = products.filter(
          (product) => product.category === category.name
        );

        return (
          <div key={category.id} className="category-section">

            <h2 className="category-title">
              {category.name}
            </h2>

            <p className="category-description">
              {category.description}
            </p>

            <div className="products-grid">

              {categoryProducts.map((product) => (

                <div
                  key={product.id}
                  className="product-card"
                  onClick={() =>
                    navigate(`/product/${product.id}`, {
                      state: product,
                    })
                  }
                >

                  {/* Product Image */}

                  <div className="image-container">

                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="product-image"
                    />

                  </div>

                  {/* Product Details */}

                  <div className="product-content">

                    <h3>{product.name}</h3>

                    <p className="price">
                      {product.price}
                      <span> / Unit</span>
                    </p>

                    <button
                      className="view-btn"
                      onClick={(e) => {
                        e.stopPropagation();

                        navigate(`/product/${product.id}`, {
                          state: product,
                        });
                      }}
                    >
                      View Details
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>
        );

      })}

    </div>
  );
};

export default Products;