import React from 'react';
import EcommerceApp from './EcommerceApp';
import SocialApp from './SocialApp';
import StreamingApp from './StreamingApp';
import './Portfolio.css';

const Portfolio = ({ portfolio }) => {
  return (
    <div className="container-portfolio" ref={portfolio}>
      <h1 className="title-portfolio">Portfolio</h1>
      <div className="portfolio">
        <SocialApp />
        <StreamingApp />
        <EcommerceApp />
      </div>
    </div>
  );
};

export default Portfolio;
