'use strict';

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
     res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', multer().single("upfile"), (req, res) => {
  const { originalname, mimetype, size } = req.file;
  res.send({name: originalname, type: mimetype, size});
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Node.js listening ...');
});