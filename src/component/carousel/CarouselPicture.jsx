import React from 'react'
import './Carousel.css';

const CarouselPicture = ({ chidlren, src }) => {

    return (
        <img className='carousel_picture' src={src} alt='sneak' >
            {chidlren}
        </img >

    )
}
export default CarouselPicture; 
