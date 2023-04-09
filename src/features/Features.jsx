import React from "react";
import "./FeaturesStyles.css";
import FeaturedItemData from "./FeaturedItemData";

const Features = () => {
  return (
    <div id='features'>
      <article className='features-header'>
        <h1>Powerful Features to Enhance Your Live Chat Experience</h1>
        <h4>
          Our live chat product is packed with features to help you connect with
          your customers and provide them with the support they need.
        </h4>
      </article>
      <article className='featured-item-container'>
        {FeaturedItemData.map((item, index) => (
          <div key={index} className='featured-item'>
            <img src={item.picture} alt={item.altText} />
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default Features;
