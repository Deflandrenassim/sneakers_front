import React, { useEffect, useState, useRef } from 'react';
import './Slider.css';
import axios from 'axios';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {
  CardSneaker, PictureSneaker, NameSneaker, PriceSneaker, AlignInfoSneaker,
} from '../../component/cardSneaker/CardSneaker';
import {
  SliderHeader, SliderTitle, SliderIcon, SliderAlign, SliderSizeForSlide,
} from './SliderHeader';

function MarqueSneakersSlider({ marque }) {
  const [sneaker, setSneaker] = useState([]);
  const [, setLengthPicture] = useState([]);
  const scrollContainer = useRef();

  useEffect(() => {
    axios.get(`http://localhost:8080/sneakers?marque=${marque}`)
      .then((response) => {
        console.log(response.data);
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
            Adidas
          </SliderTitle>
          <SliderIcon />
        </SliderAlign>
      </SliderHeader>

      <div className="marque_sneakers_slider">
        <FaArrowAltCircleLeft className="prev" onClick={prevSlide} />
        <SliderSizeForSlide ref={scrollContainer}>
          {sneaker.map((sneaker) => (
            <CardSneaker key={sneaker.id}>
              <PictureSneaker src={sneaker.picture} alt="belle snkr " />
              <AlignInfoSneaker>
                <NameSneaker>
                  {sneaker.name}
                </NameSneaker>
                <PriceSneaker>
                  {sneaker.price}
                  {' '}
                  $
                </PriceSneaker>
              </AlignInfoSneaker>
            </CardSneaker>
          ))}
        </SliderSizeForSlide>
        <FaArrowAltCircleRight ref={scrollContainer} className="next" onClick={nextSlide} />

      </div>
    </div>

  );
}
export default MarqueSneakersSlider;
