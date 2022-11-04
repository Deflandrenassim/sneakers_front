import React from 'react';
import './Sneaker.css';
import Button from '../../component/button/Button';
import Picture from '../../component/picture/Picture';
import useSneaker from '../../hooks/useSneaker';
import {
  ContainerInfo, ContainerHeaderInfo, ContainerPrice, ContainerSize,
  ContainerMatiere, ContainerLinkShop, ContainerFooterInfo,
} from '../../component/containerInfoSneakers/ContainerInfo';
import Comment from './Comment';

function Sneaker() {
  const {
    size, marque, price, newName, picture,
  } = useSneaker({});

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
