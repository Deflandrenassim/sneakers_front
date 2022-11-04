import React, { useEffect, useState } from 'react';
import './Sneaker.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../../component/button/Button';
import Picture from '../../component/picture/Picture';
import {
  ContainerInfo, ContainerHeaderInfo, ContainerPrice, ContainerSize,
  ContainerMatiere, ContainerLinkShop, ContainerFooterInfo,
} from '../../component/containerInfoSneakers/ContainerInfo';
import Comment from './Comment';

function Sneaker() {
  const { id } = useParams();
  const [marque, setMarque] = useState();
  const [newName, setNewName] = useState();
  const [picture, setPicture] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/sneakers/${id}`)
      .then((response) => {
        setMarque(response.data.marque.toUpperCase());
        setNewName(response.data.name);
        setPicture(response.data.picture);
        setPrice(response.data.price);
        setSize(response.data.size);
      });
  }, []);

  return (
    <div className="sneaker">
      <div className="sneaker_header">
        <Picture pictureComment="pictureComment" source={picture} />
        <ContainerInfo>
          <ContainerHeaderInfo info={newName} marque={marque} />
          <ContainerPrice price={price} />
          <ContainerSize size={size} />
          <ContainerMatiere />
          <ContainerLinkShop />
          <ContainerFooterInfo>
            <Button appareanceLike="appareanceLike"> Jaime </Button>
            <Button appareanceDisLike="appareanceDisLike"> Jaime Pas </Button>
          </ContainerFooterInfo>
        </ContainerInfo>
      </div>
      <Comment />
    </div>
  );
}

export default Sneaker;
