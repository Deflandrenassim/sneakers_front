import React from 'react'
import MarqueSneakersSlider from '../slider/MarqueSneakersSlider'
import { Carousel } from '../../component/carousel/Carousel'
export const PageHome = () => {
    return (
        <div>
            <Carousel />
            <MarqueSneakersSlider marque="Nike" />
            <MarqueSneakersSlider marque="Adidas" />
        </div>
    )
}
