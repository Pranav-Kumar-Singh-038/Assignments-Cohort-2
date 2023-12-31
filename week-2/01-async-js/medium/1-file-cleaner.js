const fs = require('fs');
let str = [];

fs.readFile('text.txt', 'utf8', (err, data) => {
    let result = removeSpaces(data);
    fs.writeFile('text.txt', result.join(''), 'utf8', (err) => {
    });
});

function removeSpaces(ques) {
    let st1 = ques.split("");
    for (let i = 0; i < st1.length; i++) {
        if (st1[i] === st1[i + 1] && st1[i] == ' ') {
            continue;
        } else {
            str.push(st1[i]);
        }
    }
    return str;
}
