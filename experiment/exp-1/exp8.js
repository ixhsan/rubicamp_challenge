// experimenting with ARRAY AT METHOD

import 'core-js/features/array/at.js'

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

index = -3;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
console.log(`Using an index of ${index} item returned is ${array1[array1.length - 3]}`);
// expected output: "Using an index of -2 item returned is 130"