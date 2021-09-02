import React from 'react';
import Texts from '../../contents/en/shared/Topbar';
import { Container } from './styles';
import Logo from '../../assets/logo.png';
import UserImg from '../../assets/user.png';

const Topbar: React.FC = () => {
  return (
    <Container className="shadow-sm">
      <div className="logo-wrapper">
        <img src={Logo} alt={Texts.logo_alt} title={Texts.logo_title} />
        <h1>{Texts.title}</h1>
      </div>
      <button className="shadow-sm">
        <img src={UserImg} alt={Texts.user_image_alt} title={Texts.user_image_title} />
      </button>
    </Container>
  );
}

export default Topbar;