const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const pathHTML = path.resolve(__dirname, '../public/');

app.use(express.static(pathHTML));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./messageRoute'));

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
});