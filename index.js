// Packages and modules needed for execution //
const inquirer = require("inquirer");
const fs = require("fs");
const renderLicenseBadge = require("./utils/generateMarkdown");

// New README.md contents //
const newFile = (answers) =>
`# ${answers.Title}

${strBadge}


## Description
~~~
${answers.Description}
~~~

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Collaborators](#collaborators)
- [Tests](#tests)
- [Questions?](#questions)


## Installation
~~~
${answers.Installation}
~~~

## Usage
~~~
${answers.Usage}
~~~

## License
~~~
${licDescr}
~~~

## Collaborators
~~~
${answers.Collaborators}
~~~

## Tests
~~~
${answers.Tests}
~~~

## Questions
~~~
Have a question or comment?  Please contact me at:
${answers.Name}
GitHub Username: ${answers.GitHubUserName}
GitHub Profile: ${answers.GitHubLink}
${answers.Email}
~~~
`
// End of new README.md file contents //

// Prompts users with questions to create an array called answers.  .then calls function to create badge and write new README.file //
// const answers = {Title, License, Description, Installation, Usage, Collaborators, Tests, Name, GitHubUsername, GitHubLink, Email} //    
function init(){
    inquirer
        .prompt([

            {
                type: 'input',
                name: 'Title',
                message: 'What is the Project Title?',
            },

            {
                type: 'list',
                message: 'Which license applies to this work?',
                name: 'License',
                choices: ['GNU General Public License v3.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Unilicense', 'No License'],
            },

            {
                type: 'input',
                name: 'Description',
                message: 'Please provide a description of the project?',
            },

            {
                type: 'input',
                name: 'Installation',
                message: 'How is this project installed?',
            },

            {
                type: 'input',
                name: 'Usage',
                message: 'Please provide instructions for use.',
            },

            {
                type: 'input',
                name: 'Collaborators',
                message: 'Who collaborated with you on this project?  Please provide their name and email.',
            },

            {
                type: 'input',
                name: 'Tests',
                message: 'Describe what tests that have been to verify the functioning of the code and those others might want to use, as well.',
            },

            {
                type: 'input',
                name: 'Name',
                message: 'What is your name?',
            },
            
            {
                type: 'input',
                name: 'GitHubUserName',
                message: 'What is your GitHub username?',
            },
            
            {
                type: 'input',
                name: 'GitHubLink',
                message: 'What is your GitHub profile address?',
            },

            {
                type: 'input',
                name: 'Email',
                message: 'What is your email?',
            },


            ]).then(function(answers){

                // Create badge and its active link //
                renderLicenseBadge(answers);

                // Creates the README.md file //
                const readMeContent = newFile(answers);

                // Writes the README.md file //
                fs.writeFile("README.md", readMeContent, (err) => err? console.log(err) : console.log("success!"));
        })
    // End of inquirer //
}; 
// End of init //

// Function call to initialize app //
init();
