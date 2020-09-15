import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  background-color: #000;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1080px){
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
`; 

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: ${props => props.theme.fontBold};
`; 

export const SubTitle = styled.h2`
  color: ${props => props.theme.colors.gray};
  font-size: 22px;
  margin: 20px 0;
  font-weight: ${props => props.theme.fontLight};
`; 

export const Button = styled.a<{hasLogin?: boolean}>`
  width: 200px;
  height: 40px;
  background-color: ${props => props.hasLogin ? '#252729' : '#fff'};
  color: ${props => props.hasLogin ? '#fff' : 'black'};
  border-radius: 5px;
  outline:none;
  border: unset;
  cursor: ${props => props.hasLogin ? 'default' : 'pointer'};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: .3s background-color;
  text-decoration: none;
  :visited{
    color: #000;
  }
  :hover{
    background-color: ${props => props.hasLogin ? '#252729' : '#000'};;
    color: #fff;
    border:1px solid ${props => props.hasLogin ? '#252729' : '#fff'};;
  }
  img {
    width: 15px;
  }
  p {
    font-weight: ${props => props.hasLogin ? props.theme.fontLight : props.theme.fontBold};
  }
`;

export const Ticket = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Frame = styled.div<{hasImage?: boolean}>`
  border: ${props => props.hasImage ? `5px dashed ${props.theme.colors.gray}` : 'unset'};
  position: relative;
  min-width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Obs = styled.h3`
  color: ${props => props.theme.colors.gray};
  margin-top: 10px;
  font-size: 15px;
  font-weight: ${props => props.theme.fontLight};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  opacity: 0.8;
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
`; 

export const Identification = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  width: 100px;
  height: 100%;
`; 

export const Logo = styled.img`
  width: auto;
  height: 100%;
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

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 4px solid #fff;
  border-right: 4px solid #fff;
  border-bottom: 4px solid #fff;
  border-left: 8px solid #fff;
  background: transparent;
  width: 154px;
  height: 154px;
  border-radius: 50%;
`;

export const DownloadButton = styled.a`
  width: 200px;
  height: 40px;
  background-color: #FFF;
  margin-top: 20px;
  border-radius: 5px;
  outline:none;
  border: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: .3s background-color;
  text-decoration: none;
  :visited{
    color: #000;
  }
  :hover{
    background-color: #000;
    color: #fff;
    border:1px solid #fff;
  }
  img {
    width: 15px;
  }
  p {
    font-weight: ${props => props.theme.fontBold};
  }
`;