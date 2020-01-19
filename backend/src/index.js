const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const http = require('http');
const cors = require('cors');

const { setupWebsocket } = require('./websocket')



const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-hkwdl.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// METODOS HTTP: get, post, put, delete;

//TIPOS DE PARAMETRO:

//Query Params: 90% utilizado no metodo GET  (request.query (Filtros, ordenação, paginação, ...));
//Route Params: request.params (Identificar um recurso na remoção, alteração)
//Body: request.body (dados para criação ou alteração de um registro)

//MongoDB (Não-Relacional) 




server.listen(3333);