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

}
function viewRoleDB() {
    connection.query("SELECT * FROM role", function (err, results) {
        if (err) throw err;
        console.log("Displaying all roles...\n");
        console.table(results)
        //select the requested db
        start();
    });
}
//   * Add departments, roles, employees
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

function addRole() {
    // prompt for departments being available
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.table(results)

        //once you have the items, prompt the user for which they'd like to bid on
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    //force validation to connect with a department that already exist
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].id);
                        }
                        return choiceArray;
                    },
                    message: "What department id does this new role belong in?"
                },
                {
                    name: "title",
                    type: "input",
                    message: "What is the name of this new role?"
                    //validate to see if department already exist
                },
                {
                    name: "salary",
                    type: "input",
                    message: "What is the salary of this new role?"
                    //validate to see if department already exist
                }

            ])
            .then(function (answer) {
                // when finished prompting, insert a new item into the db with that info
                connection.query(
                    "INSERT INTO role SET ?",
                    {
                        title: answer.title,
                        salary: answer.salary,
                        department_id: answer.choice,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log(`${answer.title} was successfully added!`);
                        // re-prompt the user for if they want make another action
                        start();
                    }
                );
            });

        //     });
        // }
    });
}

function addEmployee() {
    // prompt for departments being available
    connection.query("SELECT * FROM employee RIGHT JOIN role ON (employee.role_id = role.id)", function (err, results) {
        if (err) throw err;
        console.table(results)
        //once you have the items, prompt the user for which they'd like to bid on
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    //force validation to connect with a department that already exist
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].id);
                        }
                        return choiceArray;
                    },
                    message: "What role id does this new employee belong in?"
                },
                {
                    name: "first",
                    type: "input",
                    message: "What is the first name of this new employee?"
                    //validate to see if department already exist
                },
                {
                    name: "last",
                    type: "input",
                    message: "What is the last name of this new employee?"
                    //validate to see if department already exist
                },
                {
                    name: "manager",
                    type: "input",
                    message: "Please identify the employee's manager's id."
                    //validate to see if department already exist
                }


            ])
            .then(function (answer) {
                // when finished prompting, insert a new item into the db with that info
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.first,
                        last_name: answer.last,
                        role_id: answer.choice,
                        manager_id: answer.choice || 0,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log(`${answer.first} was successfully added!`);
                        // re-prompt the user for if they want make another action
                        start();
                    }
                );
            });

        //     });
        // }
    });
}

//   * Update employee roles

function addEmployee() {
    // prompt for departments being available
    connection.query("SELECT * FROM employee RIGHT JOIN role ON (employee.role_id = role.id)", function (err, results) {
        if (err) throw err;
        console.table(results)
        //once you have the items, prompt the user for which they'd like to bid on
        inquirer
            .prompt([
                {
                    name: "first",
                    type: "input",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].id);
                        }
                        return choiceArray;
                    }, 
                    message: "What is the id of the employee to update?"
                    //validate to see if department already exist
                },
                {
                    name: "choice",
                    type: "rawlist",
                    //force validation to connect with a department that already exist
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].id);
                        }
                        return choiceArray;
                    },
                    message: "What is the new role id for this employee belong in?"
                },            

            ])
            .then(function (answer) {
                // when finished prompting, insert a new item into the db with that info
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        role_id: answer.choice,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log(`The update was successfully added!`);
                        // re-prompt the user for if they want make another action
                        start();
                    }
                );
            });

        //     });
        // }
    });
}
//DELETE FROM `employee` WHERE `id` = ?;

//DELETE FROM `role` WHERE `id` = ?;

//DELETE FROM `department` WHERE `id` = ?;
