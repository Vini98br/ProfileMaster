const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const xmlParser = require('xml2json');
const AWS = require('aws-sdk');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({type: "text/*"}));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/files', async (req, res) => {
  axios.get(`https://staticprofilemaster.s3.amazonaws.com/`)
    .then(resp => {
      const parsed = xmlParser.toJson(resp.data);
      res.send( 
        JSON.parse(parsed).ListBucketResult.Contents.map(obj => {
          let sub = obj.Key.substring(obj.Key.lastIndexOf('/') + 1, obj.Key.length)
          if((sub[0] === "2" && sub[sub.length - 1] === 's') || (sub[0] === "m" && sub[sub.length - 1] === 's'))
            return sub;
        }).filter(Boolean)
      );
    })
})

app.get('/logo', async (req, res) => {
  AWS.config.update(
    {
      accessKeyId: AWS.config.credentials.accessKeyId,
      secretAccessKey: AWS.config.credentials.secretAccessKey,
      region: AWS.config.region,
    }
  );
  var s3 = new AWS.S3();
  var options = {
      Bucket: 'staticprofilemaster',
      Key: 'gdg-logo.png',
  };

  res.attachment('gdg-logo.png');
  var fileStream = s3.getObject(options).createReadStream();
  fileStream.pipe(res);
})

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
      axios.get(`http://staticprofilemaster.s3.amazonaws.com/?${res.params}`)
    .then(res => console.log(xmlParser.toJson(res.data)))
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