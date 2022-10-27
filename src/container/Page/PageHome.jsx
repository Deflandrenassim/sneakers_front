import React from 'react';
import MarqueSneakersSlider from '../slider/MarqueSneakersSlider';
import { Carousel } from '../../component/carousel/Carousel';

export default function PageHome() {
  return (
    <div>
      <Carousel />
      <MarqueSneakersSlider marque="Nike" />
      <MarqueSneakersSlider marque="Adidas" />
    </div>
  );
}
