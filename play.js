//Server

const net = require("net"); 

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15', // IP address here,
    port: 50541, // PORT number here,
  });

  //The .on method lets us specify an event name and a fucntion that does something when an event happens
  conn.on('data', (data) => {
    // code that does something when the connection is first established
    console.log('you ded cuz you idled', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};



console.log("Connecting ...");
connect();
