import React from 'react';
import './Picture.css';

export default function Picture({ source, pictureComment }) {
  return (
    <img className={`picture ${pictureComment}`} src={source} alt="waaaw" />
  );
}
