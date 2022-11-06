import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function useSneaker() {
  const { id } = useParams();
  const [sneaker, setSneaker] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/sneakers/${id}`)
      .then((response) => {
        console.log(response.data);
        setSneaker(response.data);
      });
  }, []);

  return sneaker;
}
