

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

const questions = [
    {
        type: 'input',
        name: 'URL',
        message: 'Enter your URL: '
    },
]

// inquirer
inquirer.prompt(questions)
    .then(answers => {
        const url = answers.URL;
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_code.png'));
     
        fs.writeFile("input.txt", url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
     });

    })



 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });