const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({type: "text/*"}));
app.use(bodyParser.urlencoded({extended:false}));

app.post('/auth', (req, res) => {
  const { client_id, client_secret, code, redirect_uri } = req.body;
  
  axios.post('https://github.com/login/oauth/access_token', {
    client_id, 
    client_secret, 
    code,
    redirect_uri
  }, {responseType: 'text'})
  .then((response) => {
    let params = new URLSearchParams(response.data);
    try {
      const access_token = params.get('access_token');
      const scope = params.get('scope');
      return axios.get(`https://api.github.com/user?scope=${scope}`,{
        headers:{
          Authorization: `token ${access_token}`
        }
      })
      .then((resp) => res.status(200).send({
        avatar_url: resp.data.avatar_url,
        bio: resp.data.bio,
        blog: resp.data.blog,
        html_url: resp.data.html_url,
        id: resp.data.id,
        login: resp.data.login,
        name: resp.data.name,
        node_id: resp.data.node_id,
        url: resp.data.url,
      }))
      .catch((error) => res.status(400).json(error));
    } catch (e) {
      return res.status(400).json(e);
    }
  })
  .catch((err) => res.status(400).json(err))
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));