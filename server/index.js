const express = require('express');
const bodyParser = require('body-parser');
// const conroller = require('controller');

const app = express();

const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
