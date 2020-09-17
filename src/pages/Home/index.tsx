import React, { useEffect, useRef, useState } from 'react';
import { CheckCircleFilled, DownloadOutlined, GithubOutlined } from "@ant-design/icons";
import qs from 'qs';
import axios from 'axios';
import ImageFooter from '../../components/ImageFooter';
import { DownloadElement } from "../../utils";
import { 
  Container, Title, SubTitle, Button, Content, Ticket, Obs, Frame,
  Spinner, SpinnerWrapper, Image, DownloadButton
} from './styles';

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
  };
  const queryString = qs.stringify(params);

  useEffect(() => {
    const setState = ({newValue, key, ...rest}: StorageEvent) => {
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

  const handleLogin = (hasLogin: boolean) => () => {
    if(!hasLogin)
      window.open(`https://github.com/login/oauth/authorize/?${queryString}`, 'newwindow',  'width=600,height=750')
  };

  const getButtonContent = (login: string) => {
    if(login){
      return (
        <>
          <p>{userData.login}</p>
          <CheckCircleFilled />
        </>
      );
    }
    else{
      return <p>Gerar com GitHub</p>;
    }
  };
  
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
          {getButtonContent(userData?.login)}
        </Button>
        <Obs>Vamos usar somente informações públicas</Obs>
      </Content>
      <Ticket>
        <Frame ref={divRef} hasImage={!Boolean(userData?.avatar_url)}>
          {userData?.avatar_url ? <Image src={userData.avatar_url} /> : 'Sua imagem aqui'}
          <ImageFooter name={userData?.name} role='Embaixador(a)'/>
        </Frame>
        {userData?.avatar_url && 
          <DownloadButton onClick={() => DownloadElement(divRef?.current!, 'gdg')}>
            <DownloadOutlined />
            <p>Download</p>
          </DownloadButton>
        }
      </Ticket>
    </Container>
  );
}

export default Home;