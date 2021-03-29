# ProfileMaster 🎫
![Heroku](http://heroku-badge.herokuapp.com/?app=heroku-badge&root=projects.html)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1f2db274-fc52-4e26-8e65-559104272967/deploy-status)](https://app.netlify.com/sites/profilemaster/deploys)

## 💫 Demo
* Backend hospedado: https://nameless-springs-83115.herokuapp.com/
* Frontend (somente o componente): https://profilemaster.netlify.app/
* Frontend injetado ( no meu caso um HTML estático simples): https://profilemaster-injected.netlify.app/

## Descrição
- Aplicação que gera moldura para imagem do profile com os dados vindos do GitHub. Isso poderia ser usado como "ingresso" de um evento, para criar imagens de profiles para redes sociais ou apenas para identifcar pessoas.
- Projeto feito para processo seletivo da [App Masters](https://appmasters.io/pt/)

## ✨ Features
- [x] Moldura GDG
- [x] Script de injeção em site de terceiros

## 🛠 Tecnologias
- [React](https://pt-br.reactjs.org/) 
- [TypeScript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/en/)

## 🖥 Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/#installation), [AWS-CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) instalado e configurado. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## 🎲 Rodando o Back-End (Servidor)  
```bash
# Clone este repositório
$ git clone <https://github.com/Vini98br/ProfileMaster>

# Acesse a pasta do projeto no terminal/cmd
$ cd ProfileMaster/server

# Instale as dependências
$ npm install
```
* Antes de executar o projeto crie um arquivo na pasta server do projeto com o nome de `.env`, com as seguintes variáveis:
```javascript
  AWS_ACCESS_KEY_ID= Seu id de acessa da AWS
  AWS_SECRET_ACCESS_KEY=Seu id secreto da AWS
  AWS_BUCKET_NAME=nome do bucket do S3
```
* Obs: Lembrando que o nome do bucket só servirá para o ambiente de dev, visto que, também é necessario configurar as variáveis ambiente no servidor de deploy( ex.: heroku, etc)
```bash
# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:5000
```

## 🖼 Rodando o Front-End 
```bash
# Clone este repositório
$ git clone <https://github.com/Vini98br/ProfileMaster>

# Acesse a pasta do projeto no terminal/cmd
$ cd ProfileMaster

# Instale as dependências
$ npm install
```
* Antes de executar o projeto crie um arquivo na raiz do projeto com o nome de `.env.development`, com as seguintes variáveis (acesse esse [link](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) que ensina a criar as 2 primeiras variáveis ambiente:
```javascript
  REACT_APP_CLIENT_ID=Seu Client ID do Github
  REACT_APP_CLIENT_SECRET=Seu Client Secret do Github
  REACT_APP_REDIRECT_URI=http://localhost:3000/
  REACT_APP_PROXY_URL=http://localhost:5000/
  SERVER_PORT=5000
```
* Em caso de produção coloque outro arquivo na raiz com o nome de `.env.production`:
```bash 
  REACT_APP_CLIENT_ID=Seu Client ID do Github
  REACT_APP_CLIENT_SECRET=Seu Client Secret do Github
  REACT_APP_REDIRECT_URI=http://profilemaster-injected.netlify.app/ -> frontend hospedado
  REACT_APP_PROXY_URL=https://nameless-springs-83115.herokuapp.com/ -> backend hospedado
  SERVER_PORT=5000
```
* Após esse passo execute o comando a seguir para iniciar o Front-end:
```bash
# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <localhost:3000>
```

## 💲 O script de injeção
* Deve ser colocado em meio ao HTML um div com a id igual a `profile-master`.
  ```js 
  <div id="profile-master"></div>  
  ```
* O mesmo deve ser inserido uma linha antes da tag `</body>`.
  ```js
  <script type="text/javascript">
  (async()=>{fetch("https://nameless-springs-83115.herokuapp.com/files").then(e=>e.clone().json()).then(e=>{var t=document.createElement("script");t.type="text/javascript";var a=document.createElement("script");a.src="https://"+e.bucketName+".s3-sa-east-1.amazonaws.com/webpack.js";var s=document.createElement("script");s.src="https://"+e.bucketName+".s3-sa-east-1.amazonaws.com/static/js/"+e.bundles[0];var c=document.createElement("script");c.src="https://"+e.bucketName+".s3-sa-east-1.amazonaws.com/static/js/"+e.bundles[1],t.appendChild(a),t.appendChild(s),t.appendChild(c),document.body.append(t)})})();
  </script>
  ```
* Este código pega os arquivos do bucket do s3, os quais foram colocados lá com o comando `npm run build-and-deploy`.
* Vale ressaltar que o bucket que é usado no script é o mesmo que é configurado nas variáveis ambiente do servidor em que o nodeJS foi hospedado.

## 👨‍💻 Autor
<img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQHhVRUrg0-HOA/profile-displayphoto-shrink_200_200/0/1616630141036?e=1622678400&v=beta&t=dq4epFH4tJLs-cnd4zUUOO2CHp7Xq5NsrwalWyhAV7k" width="70px;" alt=""/>


[![Linkedin Badge](https://img.shields.io/badge/-Vinicius-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vinicius-soran%C3%A7o/)](https://www.linkedin.com/in/vinicius-soran%C3%A7o/) 
