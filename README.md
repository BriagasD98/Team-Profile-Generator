# Team-Profile-Generator
## Description
The Team Profile Generator is an application used to generate a web page of a user's team and team member details. The application
is run through the command line by prompting the user with a series of questions for them to answer about their team. The team consists
of 3 types of roles: Manager, Engineer and Intern. A user can select an employee's role through the command line 
when prompted by a list of role selections. Once a role has been chosen, more question prompts about the employee will follow
such as first name, last name, ID number, email, github, office number and school. Once all questions have been answered, a styled and ready webpage
will be generated for the user made to their specifications.

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
To use the application, you must first clone the github repo to your local machine. You will then need to install the node dependencies by running
the following commands in your terminal:
```
npm install
```
```
npm i inquirer
```
Once you have installed the necessary dependencies, the application is ready to be used!
## Usage
To use the application, go to your terminal and enter the following command:
```
node index.js
```
Once entered, you'll be prompted with a series of questions to answer about your team.

## Tests
To run tests on the application to ensure there are no potential bugs, enter the following command in your terminal:
```
npm run test
```

## Questions
