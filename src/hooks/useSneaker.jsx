import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useSneaker(id) {
  const [sneaker, setSneaker] = useState({});

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/sneakers/${id}`)
        .then((response) => {
          setSneaker(response.data);
        });
    }
  }, [id]);

  return sneaker;
}
