import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../assets/data/Products";
import { categories } from "../assets/data/categories";
import "./ProductDetails.css";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const category = categories.find(
    (item) => item.name === product.category
  );

  const relatedProducts = products.filter(
    (item) => item.category === product.category
  );

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const currentIndex = product.images.indexOf(selectedImage);

  const nextImage = () => {
    setSelectedImage(
      product.images[(currentIndex + 1) % product.images.length]
    );
  };

  const prevImage = () => {
    setSelectedImage(
      product.images[
        (currentIndex - 1 + product.images.length) %
          product.images.length
      ]
    );
  };

  return (
    <div className="product-details-page">

      <div className="page-header">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <div className="breadcrumb">
          Home / Products / {category?.name}
        </div>

      </div>

      <div className="product-details-container">

        <div className="gallery">

          <div className="main-image">

            <button
              className="arrow left"
              onClick={prevImage}
            >
              &#10094;
            </button>

            <img
              src={selectedImage}
              alt={product.name}
            />

            <button
              className="arrow right"
              onClick={nextImage}
            >
              &#10095;
            </button>

          </div>

          <div className="thumbnail-container">

            {product.images.map((img, index) => (

              <img
                key={index}
                src={img}
                alt=""
                className={
                  selectedImage === img
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() => setSelectedImage(img)}
              />

            ))}

          </div>

        </div>

        <div className="product-info">

          <h1>{product.name}</h1>

          <div className="price-row">

            <h2>{product.price}</h2>

            <span>/ Unit</span>

          </div>

          <table className="details-table">

            <tbody>

              {Object.entries(product.specifications).map(
                ([key, value]) => (

                  <tr key={key}>

                    <td>{key.replaceAll("_", " ")}</td>

                    <td>{value}</td>

                  </tr>

                )
              )}

            </tbody>

          </table>

          <div className="description">
<h3>Product Description</h3>

  {Array.isArray(product.description) ? (
    <ul className="product-description">
      {product.description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    <p>{product.description}</p>
  )}
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;