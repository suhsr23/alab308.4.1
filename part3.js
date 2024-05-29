let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let lines = csv.split('\n');

let headings = lines[0].split(',');
for (let i = 0; i < headings.length; i++) {
    headings[i] = headings[i].toLowerCase();
}

let result = [];

for (let i = 1; i < lines.length; i++) {
    let columns = lines[i].split(',');
    let obj = {};


    for (let j = 0; j < headings.length; j++) {
        obj[headings[j]] = columns[j];
    }

   
    result.push(obj);
}


console.log(result);
