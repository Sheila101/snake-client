const net = require('net');
const { IP, PORT } = require('./constants.js');
const { setupInput } = require('./input.js');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', (name) => {
    conn.write("Say: Hi, let's play");

    name = 'SNK';
    console.log(name, 'successfully connected to game server.');
  });

  conn.on('data', (data) => {
    console.log(data);
    process.exit();
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };
