import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../component/button/Button';
import './Login.css';
import { Link } from 'react-router-dom';
import { EmailField, PasswordField } from '../../component/textfield/Textfield';
import { ContainerForm, ContainerPicture, ContainerRegister } from '../../component/containerForm/ContainerForm';
function Login() {
  const [verificationMail, setVerificationMail] = useState();
  const [verificationPassword, setverificationPassword] = useState();
  const [erreur, setErreur] = useState();
  // const navigate = useNavigate();

  const handleVerificationMail = (e) => {
    setVerificationMail(e.target.value);
  };

  const handleVerificationPassword = (e) => {
    setverificationPassword(e.target.value);
  };

  const sendVerification = () => {
    axios.post('http://localhost:8080/login/', {
      verificationMail, verificationPassword,
    })
      .then((response) => {
        console.log(response);
        // navigate('/');
      })
      .catch((error) => {
        setErreur(error.response.data.message);
      });
  };

  return (
    <div className="login">
      <ContainerForm>
        <ContainerPicture />
        <ContainerRegister>
          <EmailField value={verificationMail} onChange={handleVerificationMail} placeholder="Email" />
          <PasswordField value={verificationPassword} onChange={handleVerificationPassword} placeholder="Password" />
          <span>{erreur}</span>
          <Button appareanceLike="appareanceLike" onClick={sendVerification}> Envoyer </Button>
          <Link className="link" to="/inscription"> Créer son compte</Link>
        </ContainerRegister>
      </ContainerForm>
    </div>
  );
}
export default Login;
