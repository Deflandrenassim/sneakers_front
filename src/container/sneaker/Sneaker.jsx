import React from 'react';
import './Sneaker.css';
import { useParams } from 'react-router-dom';
import Button from '../../component/button/Button';
import Picture from '../../component/picture/Picture';
import useSneaker from '../../hooks/useSneaker';
import {
  ContainerInfo, ContainerHeaderInfo, ContainerPrice, ContainerMatiere, ContainerLinkShop,
  ContainerFooterInfo, ContainerSize,
} from '../../component/containerInfoSneakers/ContainerInfo';
import Comment from './Comment';

function Sneaker() {
  const { id } = useParams();

  const sneaker = useSneaker(id);

  return (
    <div className="sneaker">
      <div className="sneaker_header">
        <Picture pictureComment="pictureComment" source={sneaker.picture} />
        <ContainerInfo>
          <ContainerHeaderInfo info={sneaker.newName} marque={sneaker.marque} />
          <ContainerPrice price={sneaker.price} />
          <ContainerSize size={sneaker.size} />
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
