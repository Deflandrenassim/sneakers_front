import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function useSneaker() {
  const { id } = useParams();
  const [marque, setMarque] = useState();
  const [newName, setNewName] = useState();
  const [picture, setPicture] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();

  const object = {
    size,
    setMarque,
    marque,
    setNewName,
    price,
    setPicture,
    newName,
    picture,
    setSize,
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/sneakers/${id}`)
      .then((response) => {
        console.log(response);
        setMarque(response.data.marque.toUpperCase());
        setNewName(response.data.name);
        setPicture(response.data.picture);
        setPrice(response.data.price);
        setSize(response.data.size);
      });
  }, []);
  return object;
}
