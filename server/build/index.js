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
    return axios_1.default.post('https://github.com/login/oauth/access_token', {
        client_id: client_id,
        client_secret: client_secret,
        code: code,
        redirect_uri: redirect_uri
    }, { responseType: 'json' })
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
                .then(function (resp) {
                console.log(resp.data);
                return res.status(200).json(resp.data);
            })
                .catch(function (error) { return res.status(400).json({ message: 'ERRO' }); });
        }
        catch (e) {
            console.log(e);
        }
        // return res.status(200).json({ok: 'ok'})
    })
        .catch(function (err) { return res.status(400).json(err); });
});
var PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, function () { return console.log("Listening on " + PORT); });
