import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleFormSubmit = (e, nombre, email, password, confirmPassword) => {
    e.preventDefault();

   
    if (!nombre || !email || !password || !confirmPassword) {
      setAlertMessage('Completar todos los campos');
      setAlertType('danger');
    } else if (password !== confirmPassword) {
      setAlertMessage('Las contraseñas no coinciden');
      setAlertType('danger');
    } else {
      setAlertMessage('Registro exitoso');
      setAlertType('success');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Crea tu cuenta</h1>
      <div className="text-center mb-3">
        <SocialButton icon="fa-facebook" />
        <SocialButton icon="fa-github" />
        <SocialButton icon="fa-linkedin" />
      </div>
      <p className="text-center">Usa tu email para registrarte</p>
      <Formulario onSubmit={handleFormSubmit} />
      <Alert message={alertMessage} type={alertType} />
    </div>
  );
};

export default Registro;
