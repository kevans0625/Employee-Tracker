DROP DATABASE IF EXISTS sms_DB;
CREATE DATABASE cms_DB;
USE cms_DB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  CONSTRAINT `fk_role_department`
  FOREIGN KEY (department_id) 
  REFERENCES department(id) ON UPDATE CASCADE ON DELETE RESTRICT 
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT default 0,
  CONSTRAINT `fk_employee_role`
  FOREIGN KEY (role_id) 
  REFERENCES role(id) ON UPDATE CASCADE ON DELETE RESTRICT 
);

INSERT INTO department (name) 
VALUES ("marketing");

INSERT INTO role(title, salary)
VALUES ("coordinator", 15.75);

INSERT INTO employee (first_name, last_name)
VALUES ("Kristin", "Evans");