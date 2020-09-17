import React from 'react';

import { Footer, Logo, LogoWrapper, Identification, Name, Role } from './styles';

export interface ImageFooterProps {
  name: string | undefined;
  role: string;
}

const ImageFooter: React.FC<ImageFooterProps> = ({name = 'Seu nome', role}) => {
  return (
    <Footer>
      <LogoWrapper>
        <Logo src={process.env.REACT_APP_PROXY_URL! + 'logo'} />
      </LogoWrapper>
      <Identification>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Identification>
    </Footer>
  );
}

export default ImageFooter;