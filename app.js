var mysql = require("mysql")
var inquirer = require("inquirer")
const cTable = require('console.table');

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
    start();
  });

  function start(){
      console.log("Welcome to the employee manager!")
      inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
            "View all employees",
        //     "View all employees by Department", 
        //     "View all employees by Manager", 
        //     "Add an employee",
        //     "Remove an employee",
        //    "Update employee roles", 
        //    "Update employee manager", 
        //     "View All Roles"
        ]
        })
        .then(function (answer) {
            // based on their answer, either call the appropriate functions
            if (answer.action === "View all employees") {
                viewEmployeeDB(); // We have to write this code
            } else {
                connection.end();
            }
        });
    }
    // Build a command-line application that at a minimum allows the user to:
    //c
    //   * Add departments, roles, employees
    //r
    //   * View departments, roles, employees
    //   * Update employee roles
    //u
    //d
     //   * View departments, roles, employees
      function viewEmployeeDB(){
          connection.query("SELECT * FROM employee", function(err, results) {
              if (err) throw err;
              console.log("Displaying all employees...\n");
        console.table(results)
            //select the requested db
            start();
    });
}
  

