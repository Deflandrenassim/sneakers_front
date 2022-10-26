import React from 'react';
import './Slider.css';

export function SliderHeader ({children }) {
    return (
        <div className='slider_header'>
            {children}
        </div>
    );
}
export function SliderSizeForSlide ({children}) {
    return (
        <div className='slider_size'> 
            {children}
        </div>
    )
}
export function SliderAlign ({ children }) {
    return (
        <div className='slider_align'>
            {children }
        </div>
    )
}
export function SliderTitle ({ children }) {
    return (
        <div className="silder_title"> {children} </div>
    );
}
export function SliderIcon ({ children }) {
    return (
        <div className="slider_icon">
        {children }
        </div>
    );
}