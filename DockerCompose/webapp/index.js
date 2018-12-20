'use strict';

const express = require('express');
const http    = require('http');
const path    = require('path');

const app     = express();
const port    = process.env.PORT || 3000;
const host    = process.env.HOST || 'localhost';

const options = {
  'host'  : process.env.DATABASE_HOST || 'localhost',
  'port'  : 3306,
  'user'  : 'luke',
  'password'  : 'skywalker',
  'database'  : 'testdockercomp'
};

const server  = http.createServer(app);
const CompDB  = require('./datastorage');
const db      = new CompDB(options);

app.get('/all', (req,res) =>
  db.getAll()
  .then(result => res.json(result))
  .catch(err => res.json({err:err.message})));

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'homepage.html')));

server.listen(port,host,() => console.log(`Serving at ${host} on port ${port}`));
