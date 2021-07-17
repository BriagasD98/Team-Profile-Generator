const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'role',
        message: "What is the employee's role?",
        choices: // limits application to assign ONE manager
            () => {
                if (allEmployees.some(employee => employee.role === "Manager")) {
                    return ["Engineer", "Intern"]
                } else {
                    return ["Manager", "Engineer", "Intern"]
                }
            }
    },
    {
        type: 'input',
        name: 'firstName',
        message: ({ role }) => "What is the ${role.toLowerCase()}'s first name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid first name!");
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'lastName',
        message: ({ firstName }) => "What is ${formatName(firstName)}'s last name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid last name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: ({ firstName }) => "What is ${formatName(firstName)}'s office number?",
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if(!isNaN(parseInt(officeNumberInput))) {
                return true;
            } else {
                console.log("Please enter a valid phone number!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: ({ firstName }) => "What is ${formatName(firstName)}'s Github username?",
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter a valid Github username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: ({ firstName }) => "What school does ${formatName(firstName)} go to?",
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter a valid school name!");
                return false;
            }
        }
    }
];