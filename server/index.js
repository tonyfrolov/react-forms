/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const http = require('http');

const jsonTasksPath = '/jsonDatas/tasks.json';
const jsonTasksData = require(path.join(__dirname, jsonTasksPath));

const jsonUsersPath = '/jsonDatas/users.json';
const jsonUsersData = require(path.join(__dirname, jsonUsersPath));

const jsonGuysPath = '/jsonDatas/guys.json';
const jsonGuysData = require(path.join(__dirname, jsonGuysPath));

const app = express();

app.use(express.json());

// Point static path to dist
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

const routes = require('./routes');

app.use('/', routes);

app.get(jsonTasksPath, (request, response) => {
  response.send(jsonTasksData);
});

app.get(jsonUsersPath, (request, response) => {
  response.send(jsonUsersData);
});

app.get(jsonGuysPath, (request, response) => {
  response.send(jsonGuysData);
});

/** Get port from environment and store in Express. */
const port = process.env.PORT || '3000';
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`));
