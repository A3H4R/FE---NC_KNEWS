import React from 'react';
import ControlledCarousel from './controlledcarousel';
import Slider from './slider';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <div className="carousel">
      <ControlledCarousel />
      {/* <ArticleShowcase /> */}
      {/* <Slider /> */}
    </div>
  );
}
