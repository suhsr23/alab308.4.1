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

result.pop();

result.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

let totalAge = 0;
for (let i = 0; i < result.length; i++) {
    totalAge += parseInt(result[i].age, 10);
}

let averageAge = totalAge / result.length;

console.log(result);
console.log("Average age:", averageAge);
