var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
  
    // Yport
    port: 3306,
  
    // username
    user: "root",
  
    // password
    password: "DeAnne09!",
    database: "cms_DB"
  });

  //create connection 
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // start();
  });
  

