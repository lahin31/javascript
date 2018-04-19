let myArray = ["John", "Mark", "John", "Alfred", "Mark"];

let mySet = new Set(myArray);

// traverse the mySet as an array
Array.from(mySet).forEach((i) => console.log(i));
