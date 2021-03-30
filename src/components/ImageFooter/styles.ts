import styled from 'styled-components';

export const Identification = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
`; 

export const Logo = styled.img`
  width: auto;
  height: 30px;
`;

export const Name = styled.h3`
  color: #000;
  font-weight: ${props => props.theme.fontLight};
  font-size: 23px;
`; 

export const Role = styled.h4`
  color: ${props => props.theme.colors.gray};
  font-size: 20px;
`;


export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  opacity: 0.8;
  @media (max-width: 659px){
    height: 60px;
    ${Name}{
      font-size: 18px;
    }
    ${Role}{
      font-size: 15px;
    }
  }
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
`; 