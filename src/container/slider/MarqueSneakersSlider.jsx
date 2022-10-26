import React, {useEffect, useState, useRef} from 'react';
import './Slider.css'
import axios from 'axios';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import  { CardSneaker , PictureSneaker, NameSneaker, PriceSneaker, AlignInfoSneaker} from '../../component/cardSneaker/CardSneaker';
import { SliderHeader, SliderTitle, SliderIcon, SliderAlign, SliderSizeForSlide} from '../slider/SliderHeader';

const MarqueSneakersSlider = ({ marque }) => {
    const [sneaker, setSneaker] =  useState([]);
    const [ lengthPicture, setLengthPicture] = useState([]);
    const current = useRef(0);
    let length = lengthPicture.length;

    useEffect(() => {
        axios.get(`http://localhost:8080/sneakers?marque=${marque}`)
        .then(( response ) => {
             setSneaker(response.data);
             setLengthPicture(response.data.map((pictures ) => pictures.picture))
             console.log(response.data);
        })
    }, [])

    const nextSlide = () => {
        if(current.current === length) {
             length - 1
        } else {
            current.current + 1
        }
        console.log(current);
    }

    const prevSlide = () => {
        if(current === 0) {
            length - 1
        } else {
             current - 1
        }  
        console.log(current)
    }

    return (
        <div>
            {console.log(current)}
          <SliderHeader>
              <SliderAlign>
              <SliderTitle>
                  Adidas
              </SliderTitle>
              <SliderIcon>
                <FaArrowAltCircleLeft onClick={prevSlide}/>
                <FaArrowAltCircleRight onClick={nextSlide} />
              </SliderIcon>
              </SliderAlign>
          </SliderHeader>

        <div className='marque_sneakers_slider'>
            <SliderSizeForSlide >

         {sneaker.map(( sneaker, key) => (
             <CardSneaker key={key} > 
             <PictureSneaker src={sneaker.picture} alt="belle snkr " />
             <AlignInfoSneaker>
             <NameSneaker> {sneaker.name} </NameSneaker>
             <PriceSneaker> {sneaker.price} £ </PriceSneaker>
             </AlignInfoSneaker>
             </CardSneaker> 
           ))}
           </SliderSizeForSlide>
        </div>
        </div>

    )
}
export default MarqueSneakersSlider; 