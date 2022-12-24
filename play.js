const net = require('net');
const { connect } = require('./client.js');
const { IP, PORT } = require('./constants.js');
const { setupInput } = require('./input.js');

// establishes a connection with the game server
const conn = connect();

setupInput(conn);
