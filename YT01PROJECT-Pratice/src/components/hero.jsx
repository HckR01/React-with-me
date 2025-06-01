const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem mollitia provident iusto quisquam nemo, magni distinctio eius impedit dicta.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Learn More</button>
        </div>

        <div className="shopping">
          <p>Available here</p>
          <div className="brand-logo">
            <img src="/image/amazon.png" alt="amazon" />
            <img src="/image/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/image/hero-image.png" alt="Hero" />
      </div>
    </main>
  );
};

export default Hero;
