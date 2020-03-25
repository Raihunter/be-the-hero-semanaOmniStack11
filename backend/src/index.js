const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
//precisa informa o app e o express que vai usar o json para o corpo das requisições.
app.use(express.json());
app.use(routes);


app.listen(3333);