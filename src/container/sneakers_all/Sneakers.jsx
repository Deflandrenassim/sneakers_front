import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSneakersInfo from '../../hooks/useSneakersInfo';
import { Textfield } from '../../component/textfield/Textfield';

const useForm = () => {
  const [form, setForm] = useState({});
  const updateValue = (name, value) => {
    setForm({ ...form, [name]: value });
  };
  return { form, updateValue };
};

export default function Sneakers() {
  const sneakers = useSneakersInfo();
  const {
    form: {
      marque, name, size, price, comment, picture, matiere,
    }, updateValue,
  } = useForm();

  const sendComment = () => {
    axios.post('http://localhost:8080/sneakers', {
      marque, name, size, price, comment, picture, matiere,
    })
      .then((response) => {
        console.log(response);
      });
  };
  const handleName = (event) => {
    updateValue('name', event);
  };
  const handleMatiere = (event) => {
    updateValue('matiere', event);
  };
  const handleMarque = (event) => {
    updateValue('marque', event);
  };
  const handleSize = (event) => {
    updateValue('size', event);
  };
  const handlePrice = (event) => {
    updateValue('price', event);
  };
  const handlePicture = (event) => {
    updateValue('picture', event);
  };

  return (

    <div className="App">
      <div className="container_card_sneakers">
        {sneakers.map((commentaire) => (
          <div key={commentaire.id}>
            <Link to={`/comment/${commentaire.id}`}>
              <img src={commentaire.picture} alt="bg sneakers" />
              <span>{commentaire.name}</span>
              <span>
                {commentaire.price}
                {' '}
                €
              </span>
            </Link>
          </div>
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
