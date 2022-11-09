import { useState } from 'react';

export default function useInscription() {
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [mail, setMail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [passwordDouble, setPasswordDouble] = useState();
  const [erreur, setErreur] = useState();

  const valueObjet = {
    lastName,
    setLastName,
    firstName,
    setFirstName,
    mail,
    setMail,
    number,
    setNumber,
    password,
    setPassword,
    passwordDouble,
    setPasswordDouble,
    erreur,
    setErreur,

  };
  return valueObjet;
}
