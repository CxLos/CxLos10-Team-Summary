// variables
const inquirer = require('inquirer');
const fs = require('fs');

// Welcome message
console.log( 'Welcome to the CxLos10 Team Generator! Please answer the questions below to fill out the form.');

// Prompts
inquirer.prompt(
    [
        {
            type: 'input',
            name: 'file',
            message: "Please name this file",
            validate: (value)=>{ if(value){return true} else {return 'Please enter a file name.'}}
        },
        {
            type: 'input',
            name: 'doc',
            message: "What is the title of this document?",
            validate: (value)=>{ if(value){return true} else {return 'Please enter document name.'}}
        },
        {
            type: 'input',
            name: 'internName',
            message: "What is the employee's name?",
            validate: (value)=>{ if(value){return true} else {return 'Please enter employee name.'}}
        },
        {
            type: 'list',
            name: 'position',
            message: "What is the employee's position?",
            choices: ['Manager', 'Intern', 'Engineer', 'Employee'],
            validate: (value)=>{ if(value){return true} else {return 'Please enter employee position.'}}
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's ID?",
            validate: (value)=>{ if(value){return true} else {return 'Please enter Intern ID.'}}
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's e-mail?",
            validate: (value)=>{ if(value){return true} else {return 'Please enter Intern e-mail.'}}
        },
        {
            type: 'input',
            name: 'internGit',
            message: "What is the intern's GitHub?",
            validate: (value)=>{ if(value){return true} else {return 'Please enter Intern GitHub.'}}
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's School?",
            validate: (value)=>{ if(value){return true} else {return 'Please enter Intern School.'}}
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the intern's Office#?",
            validate: (value)=>{ if(value){return true} else {return 'Please enter Office#.'}}
        },
    
    ]
    
).then(({
    file,
    doc,
    position,
    internName,
    internEmail,
    internGit,
    internId,
    school,
    office,

}) => {
    // HTML Template
    const template =

`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${doc}</title>
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <div>
        <header>CxLos10-Team-Summary</header>
    </div>

    <mian>
        <div id="line1">
            
            <div id="ebox">
                <div id="top">
                    <h1>${internName}</h1>
                    <h2>${position}</h2>
                </div>
                <div id="bottom">
                    <div id="info">
                        <p>ID: ${internId}</p>
                    </div>
                    <div id="info">
                        <p>E-Mail: <a href="mailto:${internEmail}">${internEmail}</a></p>
                    </div>
                    <div id="info">
                        <p>GitHub: <a href="https://github.com/${internGit}">${internGit}</a></p>
                    </div>
                    <div id="info">
                    <p>School: ${school}</p>
                </div>
                <div id="info">
                    <p>Office#: ${office}</p>
                </div>
                </div>
            </div>
            <div id="ebox">
                <div id="top">
                    <h1>Name</h1>
                    <h2>Position</h2>
                </div>
                <div id="bottom">
                    <div id="info">
                        <p>ID:</p>
                    </div>
                    <div id="info">
                        <p>E-Mail:</p>
                    </div>
                    <div id="info">
                        <p>GitHub:</p>
                    </div>
                </div>
            </div>
            <div id="ebox">
                <div id="top">
                    <h1>Name</h1>
                    <h2>Position</h2>
                </div>
                <div id="bottom">
                    <div id="info">
                        <p>ID:</p>
                    </div>
                    <div id="info">
                        <p>E-Mail:</p>
                    </div>
                    <div id="info">
                        <p>GitHub:</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div id="line1">
            <div id="ebox">
                <div id="top">
                    <h1>Name</h1>
                    <h2>Position</h2>
                </div>
                <div id="bottom">
                    <div id="info">
                        <p>ID:</p>
                    </div>
                    <div id="info">
                        <p>E-Mail:</p>
                    </div>
                    <div id="info">
                        <p>GitHub:</p>
                    </div>
                </div>
            </div>
            <div id="ebox">
                <div id="top">
                    <h1>Name</h1>
                    <h2>Position</h2>
                </div>
                <div id="bottom">
                    <div id="info">
                        <p>ID:</p>
                    </div>
                    <div id="info">
                        <p>E-Mail:</p>
                    </div>
                    <div id="info">
                        <p>GitHub:</p>
                    </div>
                </div>
            </div>
        </div>
    </mian>
</body>
</html>`;

    nuFile(file, template);
});

// Generate HTML
function nuFile(fileName, data){
    fs.writeFile(`./${fileName}.html`,data,(err)=>{
        if (err){
            console.log(err)
        }
        console.log('Team Summary successfully generated!');
    })
}

// // Testing
// function Index() {}

// Index.prototype.testing = function() {
//     const test = 'this works';
//     return test;
// };

// module.exports = Index;