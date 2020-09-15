import React from 'react';

import { Footer, Logo, LogoWrapper, Identification, Name, Role } from './styles';

export interface ImageFooterProps {
  name: string | undefined;
  role: string;
  logo: string;
}

const ImageFooter: React.FC<ImageFooterProps> = ({name = 'Seu nome', role, logo}) => {
  return (
    <Footer>
      <LogoWrapper>
        <Logo src={logo} />
      </LogoWrapper>
      <Identification>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Identification>
    </Footer>
  );
}

export default ImageFooter;