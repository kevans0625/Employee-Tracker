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
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start() {
    console.log("Welcome to the employee manager!")
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View all employees by Department",
                    "View all employees by Manager", 
                "Add a department",
                "Add a role",
                "Add an employee",
                    "Remove an employee",
                   "Update employee roles", 
                   "Update employee manager", 
                "View All Roles",
                "Exit"
            ]
        })
        .then(function (answer) {
            // based on their answer, either call the appropriate functions

            switch (answer.action) {
                case "View all employees":
                    viewEmployeeDB();
                    break;
                case "View all employees by Department":
                    viewDepartmentDB();
                    break;
                case "View All Roles":
                    viewRoleDB();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole()
                    break;
                case "Add an employee":
                    addEmployee()
                    break;
                default:
                    connection.end();
            }
        });
}
// Build a command-line application that at a minimum allows the user to:
//c
//   * Add departments, roles, employees

//   * Update employee roles
//u
//d
//   * View departments, roles, employees
function viewEmployeeDB() {
    connection.query("SELECT * FROM employee", function (err, results) {
        if (err) throw err;
        console.log("Displaying all employees...\n");
        console.table(results)
        //select the requested db
        start();
    });
}
function viewDepartmentDB() {
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.log("Displaying all departments...\n");
        console.table(results)
        //select the requested db
        start();
    });

}function viewRoleDB() {
    connection.query("SELECT * FROM role", function (err, results) {
        if (err) throw err;
        console.log("Displaying all roles...\n");
        console.table(results)
        //select the requested db
        start();
    });
}
function addDepartment() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the name of this new department?"
                //validate to see if department already exist
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: answer.name,
                },
                function (err) {
                    if (err) throw err;
                    console.log(`${answer.name} was successfully added!`);
                    // re-prompt the user for if they want make another action
                    start();
                }
            );
        });

}





//DELETE FROM `employee` WHERE `id` = ?;

//DELETE FROM `role` WHERE `id` = ?;

//DELETE FROM `department` WHERE `id` = ?;
