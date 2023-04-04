import React from "react";
import "./HeroStyles.css";
const Hero = () => {
  return (
    <div className='hero'>
      <div className='grid-container'>
        <article className='grid-left'>
          <h1>Improve your customer experience with real-time assistance</h1>
          <p>
            Our live chat software helps you connect with your customers
            instantly, boosting sales and improving customer satisfaction. Try
            it out today and see the difference it can make for your business.
          </p>
          <article className='grid-left-buttons-container'>
            <button>Get Started</button>
            <article className='see-in-action'>
              <img src='../../src/assets/vector-play.png' alt='play button' />
              <button>See in Action</button>
            </article>
          </article>
        </article>
        <article className='grid-right'></article>
      </div>
    </div>
  );
};

export default Hero;
