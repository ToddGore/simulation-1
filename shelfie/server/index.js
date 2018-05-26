const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('../server/controller');
const massive = require('massive')

require('dotenv').config()
const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

app.get('/api/inventory', ctrl.getAll);
app.post('/api/product', ctrl.addProduct);
// app.put('/api/inventory/:id', nc.update);
// app.delete('/api/inventory/:id', ctrl.deleteProduct)


var dateWithoutSecond = new Date();
dateWithoutSecond.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const port = 5678;
app.listen(port, () => { console.log(`Server listening on port ${port} at ${dateWithoutSecond}`); });

