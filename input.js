  const {connect} = require('./play.js');

  // Stores the active TCP connection object.
let connection;

  // setup interface to handle user input from stdin
const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}; 

//Changing setupInput() to accept an object that lets us interact with the server
/* const setupInput = (conn) => {
  connection = conn;
  console.log(connection)
  handleUserInput()
}; */



//Actions
// w = "Move: up, a = "Move: left", s = "Move: down", d = "Move: right"

const handleUserInput = function (key) {

  if (key === '\u0077'){
  console.log("Move: up")
}else if(key === '\u0061'){
  console.log("Move: left")
}else if(key === '\u0073'){
  console.log("Move: down")
}else if(key === '\u0064'){
  console.log("Move: right")
}else if (key === '\u0003') {
  // \u0003 maps to ctrl+c input
  process.exit();
}
  

};




module.exports = {setupInput}; 
