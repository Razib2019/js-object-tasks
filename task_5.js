/***
Question: Loop through an object and print the key-value pairs with their "types"

Input:
let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
 */

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (prop in myObject) {
  const propKeys = prop;
  const propValues = myObject[prop];
  const propValueTypes = typeof propValues;
  console.log(propKeys, ":", propValues, " | ", "Type: ", propValueTypes);
}
