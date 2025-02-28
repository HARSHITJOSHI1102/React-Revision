import React from "react";
function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dolor blanditiis ratione soluta veritatis itaque nisi nihil? Quaerat
          odit at, possimus est alias ut ipsa totam veniam consequatur dolorum
          ratione.
        </p>

        <div className="hero-btn">
          <button> Shop Now </button>
          <button className="secondary-btn"> Category </button>
        </div>

        <div className="shopping">
          <p>Also Available on </p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoeimage" />
      </div>
    </main>
  );
}

export default Hero;
