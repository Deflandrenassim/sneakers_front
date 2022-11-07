import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sneakers.css';
import { Link } from 'react-router-dom';
import { Textfield } from '../../component/textfield/Textfield';
import {
  PictureSneaker, NameSneaker, AlignInfoSneaker, PriceSneaker,
} from '../../component/cardSneaker/CardSneaker';

export default function Sneakers() {
  const [marque, setMarque] = useState();
  const [name, setName] = useState();
  const [size, setSize] = useState();
  const [price, setPrice] = useState();
  const [comment, setComment] = useState([]);
  const [picture, setPicture] = useState();
  const [matiere, setMatiere] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/sneakers/')
      .then((response) => {
        setComment(response.data);
      });
  }, []);

  const sendComment = () => {
    axios.post('http://localhost:8080/sneakers', {
      price, marque, size, name, picture, matiere,
    })
      .then((response) => {
        console.log(response);
      });
  };

  const handleName = (event) => {
    setName(event);
  };
  const handleMatiere = (event) => {
    setMatiere(event);
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

      <div className="container_wrap">
        {comment.map((commentaire) => (
          <Link to={`/comment/${commentaire.id}`}>
            <div key={commentaire.id}>
              <PictureSneaker src={commentaire.picture} alt="bg sneakers" />
              <AlignInfoSneaker>
                <NameSneaker>{commentaire.name}</NameSneaker>
                <PriceSneaker>
                  Prix :
                  {' '}
                  {commentaire.price}
                  {' '}
                  €
                </PriceSneaker>
              </AlignInfoSneaker>
            </div>
          </Link>
        ))}
      </div>

      <Textfield value={name} onChange={handleName} placeholder="Name" />

      <Textfield value={marque} onChange={handleMarque} placeholder="Marque" />

      <Textfield value={matiere} onChange={handleMatiere} placeholder="Matiere" />

      <Textfield value={size} onChange={handleSize} placeholder="Size" />

      <Textfield value={price} onChange={handlePrice} placeholder="Price" />

      <Textfield value={picture} placeHolder="image ici" onChange={handlePicture}> </Textfield>

      <button type="button" onClick={sendComment}> Valider </button>
    </div>
  );
}
