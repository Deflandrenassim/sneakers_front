import React, { forwardRef } from 'react';
import './Slider.css';

export function SliderHeader({ children }) {
  return (
    <div className="slider_header">
      {children}
    </div>
  );
}
export const SliderSizeForSlide = forwardRef(({ children }, ref) => (
  <div className="slider_size" ref={ref}>
    {children}
  </div>
));

export function SliderAlign({ children }) {
  return (
    <div className="slider_align">
      {children }
    </div>
  );
}
export function SliderTitle({ children }) {
  return (
    <div className="silder_title">
      {' '}
      {children}
      {' '}
    </div>
  );
}
export function SliderIcon({ children }) {
  return (
    <div className="slider_icon">
      {children }
    </div>
  );
}
