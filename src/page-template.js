const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const formatName = require('../utils/names');

const addEmployee = employeeInfo => {
    let allCards = '';

    employeeInfo.forEach(employee => {

        const { firstName, lastName, id, role } = employee;
        let newEmployee = '';
        let extraInfo ='';

        switch (role) {
            case 'Manager':
                newEmployee = new Manager(formatName(firstName), formatName(lastName), id, employee.officeNumber);
                extraInfo = newEmployee.getOfficeNumber();
                break;
            case 'Engineer':
                newEmployee = new Engineer(formatName(firstName), formatName(lastName), id, employee.github);
                extraInfo = newEmployee.getGithub();
                break;
            case 'Intern':
                newEmployee = new Intern(formatName(firstName), formatName(lastName), id, employee.school);
                extraInfo = newEmployee.getSchool();
                break;
            default:
                newEmployee = new Employee(formatName(firstName), formatName(lastName), id);
        };

      // concatenates all employee cards
      allCards += `
      <div class="card shadow">
        <div class="card-header h3 text-white bg-info">
            ${newEmployee.getRole()} ${newEmployee.getIcon()}
        </div>
        <div class="card-body">
            <h5 class="card-title">${newEmployee.getName()}</h5>
            <p class="card-text">${newEmployee.getId()}<br />
            ${newEmployee.getEmail()}<br />
            ${extraInfo}</p>
        </div>
      </div>
      `  
    });
    return allCards;
};


const generatePage = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
        <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-primary">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="card-deck col-12 d-flex justify-content-center">
                    ${addEmployee(templateData)}
                </div>
            </div>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
    </html>
    `;
};

module.exports = generatePage;