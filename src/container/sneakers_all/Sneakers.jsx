import React from 'react';
import axios from 'axios';
import './Sneakers.css';
import { Link } from 'react-router-dom';
import useSneakersInfo from '../../hooks/useSneakersInfo';
import { Textfield } from '../../component/textfield/Textfield';
import useForm from '../../hooks/useForm';

export default function Sneakers() {
  const sneakers = useSneakersInfo();
  console.log(sneakers);
  const form = useForm();
  const {
    form: {
      marque, name, size, price, comment, picture, matiere,
    }, updateValue,
  } = form;

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

    <div>

      <div className="contains_sneakers_all">
        {sneakers.map((commentaire) => (
          <div className="card_sneakers_all" key={commentaire.id}>
            <Link to={`/comment/${commentaire.id}`}>
              <img className="img_sneakers_all" src={commentaire.picture} />
              <div className="align_Info_sneakers_all">
                <div className="name_sneakers_all">{commentaire.name}</div>
                <div className="price_sneakers_all">
                  {commentaire.price}
                  {' '}
                  €
                </div>
              </div>
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
