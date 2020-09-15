"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var axios_1 = __importDefault(require("axios"));
var app = express_1.default();
app.use(cors_1.default({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.json({ type: "text/*" }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.post('/auth', function (req, res) {
    var _a = req.body, client_id = _a.client_id, client_secret = _a.client_secret, code = _a.code, redirect_uri = _a.redirect_uri;
    axios_1.default.post('https://github.com/login/oauth/access_token', {
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
            return axios_1.default.get("https://api.github.com/user?scope=" + scope, {
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
var PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, function () { return console.log("Listening on " + PORT); });
