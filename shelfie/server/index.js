const express = require('express');
const bodyParser = require('body-parser');
const nc = require('../server/controller');
const massive = require('massive')

require('dotenv').config()
const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

app.get('/api/products', nc.read);
app.post('/api/products', nc.create);
app.put('/api/products/:id', nc.update);
app.delete('/api/products/:id', nc.delete)


var dateWithoutSecond = new Date();
dateWithoutSecond.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const port = 3048;
app.listen(port, () => { console.log(`Server listening on port ${port} at ${dateWithoutSecond}`); });

