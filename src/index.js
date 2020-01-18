const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const {MONGO_URL, PORT} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect( MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
  () => {console.log('Conectado ao db com sucesso') },
  err => { console.log('nao foi possivel conectar a data base '+ err)}
);

app.use('/devs', require('./routes/DevRoutes'));


app.listen(PORT);