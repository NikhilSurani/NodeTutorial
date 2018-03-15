console.log("json.js calling.");
//  obj to string(json) example
// var obj = {
//     name : "Nikhil",
//     age : 22,
//     bdate : "3/9/1995"
// };
// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

//  string to obj example

// var personString = '{"name" : "Nikhil", "Age" : 24}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var origionalNote = {
    title : "Robin Sharma",
    body : "The Monk who sold his farrari"
};

var originalNoteString = JSON.stringify(origionalNote);
fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);
