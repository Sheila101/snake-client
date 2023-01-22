const { connect } = require('./play.js');

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

//Actions
// w = "Move: up, a = "Move: left", s = "Move: down", d = "Move: right", q = "Send a message"
const handleUserInput = function (key) {
  if (key === '\u0077') {
    console.log('Move: up');
    connection.write('Move: up');
  } else if (key === '\u0061') {
    connection.write('Move: left');
  } else if (key === '\u0073') {
    connection.write('Move: down');
  } else if (key === '\u0064') {
    connection.write('Move: right');
  } else if (key === '\u0051') {
    connection.write('Say: Hey there');
  } else if (key === '\u0003') {
    // \u0003 maps to ctrl+c input
    process.exit();
  }
};

module.exports = { setupInput };
