//Server

const net = require("net"); 

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15', // IP address here,
    port: 50541, // PORT number here,   
  });

  conn.on('connect',(name) => {
//Move up move using setTimeout()
   /*  setTimeout(() => {
    console.log('Move up');
    }, 1000);

    setTimeout(() => {
    console.log('Move up');
    }, 2000);

    setTimeout(() => {
    console.log('Move up');
    }, 3000); */

    //Using setInterval 
    let interval = 1000; 

      const actions = setInterval(() => {
        console.log('Move up');
    interval += 1000; 
    if(interval > 5000){
      clearInterval(actions)
    }
  }, 1000);

    name = "SNK"
    console.log(name, 'successfully connected to game server.');
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

    // setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}
};


console.log("Connecting ...");

setupInput(); 

module.exports = {connect}; 
