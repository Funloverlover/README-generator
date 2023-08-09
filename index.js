const inquirer = require('inquirer')
const fs = require('fs')
//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        name: 'derp',
        type: 'input',
        message: 'What is the title?'
    },
    {
        name: 'herpaflerp',
        type: 'input',
        message: 'What is the description'
    },
    {
        name: 'shlurpaderp',
        type: 'input',
        message: 'What are the installations'
    },
    {
        name: 'herpaderp',
        type: 'input',
        message: 'What is the usage'
    },
    {
        name: 'flerpaderp',
        type: 'input',
        message: 'What is the license'
    },
    {
        name: 'floopadoop',
        type: 'input',
        message: 'Who are the contributors'
    },
    {
        name: 'doopapoop',
        type: 'input',
        message: 'What are the tests'
    },
    {
        name: 'poopadoop',
        type: 'input',
        message: 'What are the questions'
    },
]

async function main() {
    let x = await inquirer.prompt(questions).then(function (responses) {
        return [
            responses.derp,
            responses.herpaflerp,
            responses.shlurpaderp,
            responses.herpaderp,
            responses.flerpaderp,
            responses.floopadoop,
            responses.doopapoop,
            responses.poopadoop,
        ]
    })
    let data = convertToMarkDown(x);
    fs.writeFile('./output/README.md', data, function () {
        console.log(arguments)
    })
}
function convertToMarkDown(data){
    return `#${data[0]}

## Description
${data[1]}

## Installations
${data[2]}

## Usages
${data[3]}

## License
${data[4]}

## Contributors
${data[5]}

## Tests
${data[6]}

## Questions
${data[7]}

## Table of Contents
[Description](#description)

[Installations](#installations)

[Usages](#usages)

[License](#license)

[Contributors](#contributors)

[Tests](#tests)

[Questions](#questions)`
}
main()