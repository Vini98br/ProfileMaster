"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var axios = require('axios');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/auth', function (req, res) {
    var _a = req.body, client_id = _a.client_id, client_secret = _a.client_secret, code = _a.code, redirect_uri = _a.redirect_uri;
    axios.post('https://github.com/login/oauth/access_token', {
        client_id: client_id,
        client_secret: client_secret,
        code: code,
        redirect_uri: redirect_uri
    }, { responseType: 'text' })
        .then(function (response) {
        var params = new URLSearchParams(response.data);
        try {
            var access_token = params.get('access_token');
            var scope = params.get('scope');
            return axios.get("https://api.github.com/user?scope=" + scope, {
                headers: {
                    Authorization: "token " + access_token
                }
            })
                .then(function (resp) { return res.status(200).send({
                avatar_url: resp.data.avatar_url,
                bio: resp.data.bio,
                blog: resp.data.blog,
                html_url: resp.data.html_url,
                id: resp.data.id,
                login: resp.data.login,
                name: resp.data.name,
                node_id: resp.data.node_id,
                url: resp.data.url,
            }); })
                .catch(function (error) { return res.status(400).json(error); });
        }
        catch (e) {
            return res.status(400).json(e);
        }
    })
        .catch(function (err) { return res.status(400).json(err); });
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Listening on " + PORT); });
