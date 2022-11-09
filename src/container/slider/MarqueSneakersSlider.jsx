import React, { useEffect, useState, useRef } from 'react';
import './Slider.css';
import axios from 'axios';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {
  Card, Picture, Name, Price, AlignInfo,
} from '../../component/card/Card';
import {
  SliderHeader, SliderTitle, SliderAlign, SliderSizeForSlide, SliderIcon,
} from './SliderHeader';

function MarqueSneakersSlider({ marque, title }) {
  const [sneaker, setSneaker] = useState([]);
  const [, setLengthPicture] = useState([]);
  const scrollContainer = useRef();

  useEffect(() => {
    axios.get(`http://localhost:8080/sneakers?marque=${marque}`)
      .then((response) => {
        setSneaker(response.data);
        setLengthPicture(response.data.map((pictures) => pictures.picture));
      });
  }, []);

  const nextSlide = () => {
    scrollContainer.current.scrollTo({
      left: scrollContainer.current.scrollLeft + 350,
      behavior: 'smooth',
    });
  };

  const prevSlide = () => {
    scrollContainer.current.scrollTo({
      left: 350 - scrollContainer.current.scrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <SliderHeader>
        <SliderAlign>
          <SliderTitle>
            {title}
          </SliderTitle>
          <SliderIcon>
            <FaArrowAltCircleLeft className="prev " onClick={prevSlide} />
            <FaArrowAltCircleRight ref={scrollContainer} className="next " onClick={nextSlide} />
          </SliderIcon>
        </SliderAlign>
      </SliderHeader>

      <div className="marque_sneakers_slider">
        <SliderSizeForSlide ref={scrollContainer}>
          {sneaker.map((sneaker) => (
            <Card key={sneaker.id}>
              <Picture src={sneaker.picture} alt="belle snkr " />
              <AlignInfo>
                <Name>
                  {sneaker.name}
                </Name>
                <Price>
                  {sneaker.price}
                  {' '}
                  €
                </Price>
              </AlignInfo>
            </Card>
          ))}
        </SliderSizeForSlide>

      </div>

    </div>

  );
}
export default MarqueSneakersSlider;
