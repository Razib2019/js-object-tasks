/***
Question: Count the "number of properties".

Input:
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

Output:
4
 */

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

const numberOfProperty = Object.keys(student).length;
console.log(numberOfProperty);
