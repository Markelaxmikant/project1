const HeroNatigation = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="btn">
          <button> Shop Now</button>
          <button className="btn2">Category</button>
        </div>
        <div className="shopping">
            <h1>Also Available on </h1>
            <div className="brands-icons">
            <img src="./Image/flipkart.png" alt="flipkart"/> 
            <img src="./Image/amazon.png" alt="amazon"/> 
        </div>
        </div>
      </div>
      <div className="hero_image">
        <img src="./Image/shoe_image.png" alt="Shoe-images" />
      </div>
    </main>
  );
};
export default HeroNatigation;
 