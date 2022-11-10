// experimenting with new Date class

const { time } = require("node:console");
const fs = require("node:fs");

// let array = []
// array.push(' ')
// console.log(array.length);
// console.log(array);
// array.splice(0, 1, 'X')
// console.log(array);
// console.log(dataSource[index].status.toString() === "X");

//TEST TIME
let dataSource = JSON.parse(fs.readFileSync("./c13_data.json", "utf-8"));
let index = 0;
let array = { task: "sample", status: [" "], time: ' ', date: ' ' }

let getTime = new Date();
let timeFormat = `${getTime.getHours()}:${getTime.getMinutes()}`;
let dateFormat = `${getTime.getDate()}-${getTime.getMonth()}-${getTime.getFullYear()}`;

console.log(`\nini time di array '${array.time}'`);
console.log(`ini timeFormat '${timeFormat}'`);
array.time = timeFormat
console.log(`ini time di array baru '${array.time}'\n`);

console.log(`ini date di array '${array.date}'`);
console.log(`ini dateFormat ${dateFormat}`);
array.date = dateFormat
console.log(`ini date di array baru '${array.date}'\n`);

//TEST DATA

var data = [
  { transportnumber: "45", time: "10:28:00", date: "2017-01-16" },
  { transportnumber: "45", time: "10:38:00", date: "2017-01-16" },
  { transportnumber: "45", time: "10:48:00", date: "2017-01-16" },
  { transportnumber: "14", time: "10:12:00", date: "2017-01-16" },
  { transportnumber: "14", time: "10:24:00", date: "2017-01-16" },
  { transportnumber: "14", time: "10:52:00", date: "2017-01-16" },
  { transportnumber: "14", time: "10:54:00", date: "2017-01-20" },
  { transportnumber: "14", time: "08:33:00", date: "2017-01-19" },
];

data.sort(function (a, b) {
  return a.time.localeCompare(b.time);
});

console.log(data);

// TEST MODIF FUNCTION
var obj = '{ firstName:"John", lastName:"Doe" }';

var jsonStr = obj.replace(/(\w+:)|(\w+ :)/g, function(matchedStr) {
  return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
});

obj = JSON.parse(jsonStr); //converts to a regular object

console.log(obj.firstName); // expected output: John
console.log(obj.lastName); // expected output: Doe

