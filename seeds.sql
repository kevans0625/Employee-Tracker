USE cms_DB;

INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Executive");
INSERT INTO department (name) VALUES ("Member Services");
INSERT INTO department (name) VALUES ("Education");
INSERT INTO department (name) VALUES ("Accouting");
INSERT INTO department (name) VALUES ("Creative Services");
INSERT INTO department (name) VALUES ("Human Resources");

INSERT INTO role(title, salary, department_id) VALUES ("Marketing Coordinator", 15.75,1);
INSERT INTO role(title, salary, department_id) VALUES ("Office Pet", 15.75,3);
INSERT INTO role(title, salary, department_id) VALUES ("Digital Specalist", 15.75,2);
INSERT INTO role(title, salary, department_id) VALUES ("Lawyer", 15.75,3);
INSERT INTO role(title, salary, department_id) VALUES ("Cinematographer", 15.75,7);
INSERT INTO role(title, salary, department_id) VALUES ("Manager", 15.75,3);
INSERT INTO role(title, salary, department_id) VALUES ("Education Director", 15.75,5);
INSERT INTO role(title, salary, department_id) VALUES ("Payroll Assistant", 15.75,6);
INSERT INTO role(title, salary, department_id) VALUES ("HR Coordinator", 15.75,8);
INSERT INTO role(title, salary, department_id) VALUES ("Recruiter", 15.75,8);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Kristin", "Evans",3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Shahan", "McClendon",4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Surcie", "McClendon",2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Travanti", "Robinson",5);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Ares", "Robinson",2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Makhyla", "Johnson",)6;
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Kahaleel", "Johnson",7);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Kameron", "Brooks",8);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Detrix", "Brooks",9);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Eyan", "Smith",10);