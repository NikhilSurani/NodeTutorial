console.log("starting app.js");
// import moduls
const notes = require("./notes");
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

var argv = yargs.argv;

var command = process.argv[2];
console.log("Command: " + command);

// console.log("Process: ", process.argv);
console.log("YARG:", argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);

} else if (command === 'list') {
    notes.getList();

} else if (command == 'read') {
    notes.readNote(argv.title);

} else if (command === 'remove') {
    notes.removeNote(argv.title);

} else {
    console.log('Command not recognized');
}

// console.log(_.uniq([2, 1, 2, "Nikhil ", "Jill", "Rutu"]));

// console.log(_.isString('true'));
// console.log(_.isString(1));


// var user = os.userInfo();
// var result = notes.hollywood();
// var addition = notes.add(9, -2); console.log(addition);

// fs.appendFile("greetings.txt", `Hello ${user.username} you are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log("Unable to write to file.");
//     }
// });

// console.log(user);


// movies.hollywood();

// function User(){
//     this.name = "";    
//     this.life = 100;
//     this.giveLife  = function giveLifeTo(targetPlayer){
//         targetPlayer.life += 1;
//         console.log(this.name + " gave 1 life to "+ targetPlayer.name);
//     }

// }

// var Bucky = new User();
// var Wendy = new User();

// Bucky.name = "Bucky";
// Wendy.name = "Wendy";

// Bucky.giveLife(Wendy);

// console.log("Bucky:" + Bucky.life);
// console.log("Wendy:" + Wendy.life);

// User.prototype.upperCut  = function upperCut(targetPlayer){
//     targetPlayer.life -= 3;
//     console.log(this.name + " just uppercutted " + targetPlayer.name);
// }

// Wendy.upperCut(Bucky);
// console.log("Bucky:" + Bucky.life);
// console.log("Wendy:" + Wendy.life);

// function plaseAnOrder(orderNumber) {

//     console.log("Your order number " + orderNumber + " placed.")

//     cookAndDeliverFood(function () {
//         console.log("You order number " + orderNumber + " serverd.");
//     });
// }
// // simulate code afer 5 second
// function cookAndDeliverFood(callback){
//     setTimeout(callback, 5000)
// }

// // simulate user request 
// plaseAnOrder(1);
// plaseAnOrder(12);
// plaseAnOrder(3);
// plaseAnOrder(5);
// plaseAnOrder(78);
// plaseAnOrder(09);