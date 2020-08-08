const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const part = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/MyMovies'));

app.get('/*', (req, res) => res.sendFile(path.join(_dirname)));

const serve = http.createServer(app);
server.listen(port, () => window.console.log('Running...'));