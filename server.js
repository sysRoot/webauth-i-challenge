const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const apiRoute = require('./routes/api');

const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', apiRoute);

module.exports = server;
