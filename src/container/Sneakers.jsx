import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sneakers.css';
import { Link } from 'react-router-dom';
import { Textfield } from '../component/textfield/Textfield';
import {
  CardSneaker, NameSneaker, PictureSneaker, PriceSneaker,
} from '../component/cardSneaker/CardSneaker';

export default function Sneakers() {
  
  const [marque, setMarque] = useState();
  const [name, setName] = useState();
  const [size, setSize] = useState();
  const [price, setPrice] = useState();
  const [comment, setComment] = useState([]);
  const [picture, setPicture] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/sneakers/')
      .then((response) => {
        setComment(response.data);
      });
  }, []);

  const sendComment = () => {
    axios.post('http://localhost:8080/sneakers', {
      price, marque, size, name, picture,
    })
      .then((response) => {
        console.log(response);
      });
  };

  const handleName = (event) => {
    setName(event);
  };
  const handleMarque = (event) => {
    setMarque(event);
  };

  const handleSize = (event) => {
    setSize(event);
  };
  const handlePrice = (event) => {
    setPrice(event);
  };
  const handlePicture = (event) => {
    setPicture(event);
  };

  return (

    <div className="App">

      <div className="container_card_sneakers">
        {comment.map((commentaire, key) => (
          <CardSneaker key={key}>
            <Link to={`/comment/${commentaire.id}`}>
              <PictureSneaker src={commentaire.picture} />
              <NameSneaker>{commentaire.name}</NameSneaker>
              <PriceSneaker>
                {commentaire.price}
                {' '}
                €
              </PriceSneaker>
            </Link>
          </CardSneaker>
        ))}
      </div>

      <Textfield value={name} onChange={handleName} placeholder="Name" />

      <Textfield value={marque} onChange={handleMarque} placeholder="Marque" />

      <Textfield value={size} onChange={handleSize} placeholder="Size" />

      <Textfield value={price} onChange={handlePrice} placeholder="Price" />

      <Textfield value={picture} placeHolder="image ici" onChange={handlePicture}> </Textfield>

      <button type="button" onClick={sendComment}> Valider </button>
    </div>
  );
}
