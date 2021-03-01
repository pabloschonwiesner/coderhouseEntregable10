"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.mensaje = exports.producto = void 0;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var index_1 = __importDefault(require("./routes/index"));
var ProductoBD_1 = __importDefault(require("./ProductoBD"));
var MensajeBD_1 = __importDefault(require("./MensajeBD"));
exports.producto = new ProductoBD_1.default();
exports.mensaje = new MensajeBD_1.default();
dotenv_1.default.config();
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(__dirname + '/views'));
app.get('/', function (req, res) {
    res.sendFile('./views/index.html');
});
app.use('/api', index_1.default);
// server socket.io
var server = require('http').createServer(app);
exports.io = require('socket.io')(server);
require('./sockets/index');
server.listen(process.env.PORT, function () { return console.log("Escuchando en el puerto " + process.env.PORT); });
server.on('error', function (err) { console.log("Error de conexion: " + err); });
