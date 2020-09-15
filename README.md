# ProfileMaster 🎫

### Descrição
---
- Aplicação que gera moldura para imagem do profile com os dados vindos do GitHub. Isso poderia ser usado como "ingresso" de um evento, para criar imagens de profiles para redes sociais ou apenas para identifcar pessoas.
- Projeto feito para processo seletivo da [App Masters](https://appmasters.io/pt/)

### ✨ Features
---
- [x] Moldura GDG
- [x] Moldura IloveProgramming

### 🛠 Tecnologias
---
- [React](https://pt-br.reactjs.org/) 
- [TypeScript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/en/)

### 🖥 Pré-requisitos
---
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/#installation). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back-End (Servidor)  
---
```bash
# Clone este repositório
$ git clone <https://github.com/Vini98br/ProfileMaster>

# Acesse a pasta do projeto no terminal/cmd
$ cd ProfileMaster/server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:5000
```

### 🖼 Rodando o Front-End 
---
```bash
# Clone este repositório
$ git clone <https://github.com/Vini98br/ProfileMaster>

# Acesse a pasta do projeto no terminal/cmd
$ cd ProfileMaster

# Instale as dependências
$ npm install
```
* Antes de executar o projeto crie um arquivo na raiz do projeto com o nome de `.env`, com as seguintes variáveis (acesse esse [link](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) que ensina a criar as 2 primeiras variáveis ambiente:
```javascript
  REACT_APP_CLIENT_ID=Your Client ID from Github
  REACT_APP_CLIENT_SECRET=Your Client Secret from Github
  REACT_APP_REDIRECT_URI=http://localhost:3000/
  REACT_APP_PROXY_URL=http://localhost:5000/auth
  SERVER_PORT=5000
```
* Após esse passo execute o comando a seguir para iniciar o Front-end:
```bash
# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <localhost:3000>
```


### 👨‍💻 Autor
---
<img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQFslH0kG98L1g/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=onuhbh3D7XgIss9C-dgILQ66w8deH7W_Ay7TI7WESMk" width="100px;" alt=""/>


[![Linkedin Badge](https://img.shields.io/badge/-Vinicius-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vinicius-soran%C3%A7o/)](https://www.linkedin.com/in/vinicius-soran%C3%A7o/) 
