import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Carousel.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import CarouselPicture from './CarouselPicture';

export default function Carousel() {
  const [data, setData] = useState([]);
  const [lengthPicture, setLengthtPicture] = useState([]);
  const [current, setCurrent] = useState(0);
  const { length } = lengthPicture;

  useEffect(() => {
    axios.get('http://localhost:8080/sneakers/')
      .then((response) => {
        setData(response.data);
        setLengthtPicture(response.data.map((pictures) => pictures.picture));
      });
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {data.map((photo, key) => (

        <div
          className={key === current ? 'slide active  ' : 'slide  '}
          key={photo.id}
        >
          {key === current && (

          <CarouselPicture src={photo.picture} />
          )}
        </div>

      ))}
    </div>
  );
}
