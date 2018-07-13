const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
// const conroller = require('controller');

const app = express();
massive(process.env.CONNECTION_STRING);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
