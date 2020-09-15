import React from 'react';
import logo from "../../assets/images/gdg-logo.png";
import { Container, Image } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Image src={logo}/>
      <p>GDG</p>
    </Container>
  );
}

export default Header;