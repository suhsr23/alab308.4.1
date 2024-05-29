let csv='ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let rows=[];


let lines= csv.split('\n');

console.log(lines);

for(let i= 0 ; i < lines.length; i++ )
{
    let col= lines[i].split(',');

    rows.push(col);
}

console.log(rows);