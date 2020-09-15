import React, { useEffect, useRef, useState } from 'react';
import logoGDG from '../../assets/images/gdg-logo.png';
import { CheckCircleFilled, DownloadOutlined, GithubOutlined } from "@ant-design/icons";
import qs from 'qs';
import { 
  Container, Title, SubTitle, Button, Content, Ticket, Obs, Frame,
  Footer, LogoWrapper, Name, Role, Logo, Identification, Spinner, SpinnerWrapper, Image, DownloadButton
} from './styles';
import axios from 'axios';
import html2canvas from 'html2canvas';

export interface UserData {
  avatar_url: string;
  bio: string | null;
  blog: string;
  html_url: string;
  id: number;
  login: string;
  name: string;
  node_id: string;
  url: string;
}

const Home: React.FC = () => {
  const [userData, setUserData] = useState<UserData>(JSON.parse(localStorage.getItem('@GitHub_User')!) || {});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  const params = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    client_secret: process.env.REACT_APP_CLIENT_SECRET
    // isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")!) || false,
    // user: JSON.parse(localStorage.getItem("user")!) || null,
  };
  const queryString = qs.stringify(params);

  useEffect(() => {
    const setState = ({newValue, key, ...rest}: StorageEvent) => {
      console.log(key)
      if(key === '@GitHub_User' || key === null)
        setUserData(JSON.parse(newValue!));
    }
    window.addEventListener('storage', setState);

    (async () => {
      const code = qs.parse(window.location.search.replace('?',''))?.code;
      if(code){
        setIsLoading(true);
        const res = await axios.post(process.env.REACT_APP_PROXY_URL!,{
          ...params,
          code
        });        
        if(res){
          setIsLoading(false);
          localStorage.setItem('@GitHub_User', JSON.stringify(res.data));
          window.open('', '_self', '');
          window.close();
        }
      } 
    })();

    return () => window.removeEventListener('storage', setState);
  }, []);

  const handleDownloadClick = () => {
    html2canvas(divRef?.current!, { logging: true, useCORS: true }).then(canvas => {
      var a = document.createElement('a');
      a.href=canvas.toDataURL("image/png");
      a.download = "image.png"
      a.click();
    })
  };

  const handleLogin = (hasLogin: boolean) => () => {
    if(!hasLogin)
      window.open(`https://github.com/login/oauth/authorize/?${queryString}`, 'newwindow',  'width=600,height=750')
  }
  
  return isLoading ? (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  ) : (
    <Container>
      <Content>
        <Title>GDG Juiz de Fora</Title>
        <SubTitle>
          Bem-vindo(a) a comunidade de desenvolvedores.
          Participe, aprenda e compartilhe conhecimento!
        </SubTitle>
        <Button
          hasLogin={Boolean(userData?.login)} 
          onClick={handleLogin(Boolean(userData?.login))}
        >
          <GithubOutlined />
          {userData?.login ? 
            <>
              <p>{userData.login}</p>
              <CheckCircleFilled />
            </>
          : <p>Gerar com GitHub</p>
        }
        </Button>
        <Obs>Vamos usar somente informações públicas</Obs>
      </Content>
      <Ticket>
        <Frame ref={divRef} hasImage={!Boolean(userData?.avatar_url)}>
          {userData?.avatar_url ? <Image src={userData.avatar_url} /> : 'Sua imagem aqui'}
          <Footer>
            <LogoWrapper>
              <Logo src={logoGDG} />
            </LogoWrapper>
            <Identification>
              <Name>{userData?.name ? userData?.name : 'Seu nome'}</Name>
              <Role>Embaixador(a)</Role>
            </Identification>
          </Footer>
        </Frame>
        {userData?.avatar_url && 
          <DownloadButton onClick={handleDownloadClick}>
            <DownloadOutlined />
            <p>Download</p>
          </DownloadButton>
        }
      </Ticket>
    </Container>
  );
}

export default Home;