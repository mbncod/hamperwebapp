//Add dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));

const db = require('../db/index.js');
app.use(bodyParser.json());







let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`)
})

