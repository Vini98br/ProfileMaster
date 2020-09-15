import styled, { keyframes } from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Frame = styled.div<{hasImage?: boolean}>`
  border: ${props => props.hasImage ? `5px dashed ${props.theme.colors.gray}` : 'unset'};
  position: relative;
  width: 500px;
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

export const Container = styled.div`
  background-color: #000;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 100px;
  @media (max-width: 1180px){
    padding: 0 50px;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    ${Content} {
      align-items: center;
      text-align: center;
    }
    ${Button} {
      width: 300px;
    }
  }
  @media (min-width: 401px) and (max-width: 659px){
    padding: 80px 0;
    ${Frame}{
      width: 300px;
      height: 300px;
    }
  }
  @media (max-width: 400px){
    padding: 80px 0;
    ${Frame}{
      margin-top: 10px;
      width: 250px;
      height: 250px;
    }
  }
`;
