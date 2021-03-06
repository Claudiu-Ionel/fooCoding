// EX 1
console.log(`==================Ex 1=======================`);
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(`The length of myString is : ${myString.length}`);
// newString = myString.replace(/,/g, " ");
// newString = myString.split(',').join(' ');
newString = myString.replaceAll(",", " ");
console.log(newString);

// EX 2
console.log(`==================Ex 2=======================`);

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log(`Using the ".splice()" method, it allows us to add to a specified index in our array. "meerkat" will be added at Index 1`);
console.log(favoriteAnimals);
console.log(`The array has a length of: ${favoriteAnimals.length}`);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
let meerkatIndex = favoriteAnimals.indexOf("meerkat");
console.log(`The item you are looking for is at index: ${meerkatIndex}`);

// MORE JAVASCRIPT

console.log(`==================More JavaScript=======================`)
console.log(`==================Ex 1=======================`)

function sum(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum;
}


const sum2 = (x1, x2, x3) => x1 + x2 + x3;

console.log(sum2(1, 2, 3));
console.log(sum(1, 2, 3));
console.log(`==================Ex 2=======================`);


function colorCar(color) {
  console.log(`a ${color} car`);
}

colorCar("green");

console.log(`==================Ex 3=======================`);

let awesomeObj = {
  name: "awesomeness",
  height: 168,
  married: false
}

function logObject(obj) {
  console.log(obj);
}

function printObject(obj){
  let output = [];
  for (const key in obj) {
    output.push(`key ${key} value ${obj[key]}`) ;
  }
  return output.join(`\n`);
}
console.log(printObject(awesomeObj));
logObject(awesomeObj);

console.log(`==================Ex 4=======================`);

function vehicleType(color, type) {
  if (type === 1) {
    type = "car";
  } else if (type === 2) {
    type = "motorbike";
  } else {
    return "invalid code"
  }
  return `a ${color} ${type}`
}
console.log(vehicleType("black", 1));

console.log(`==================Ex 5=======================`);

let yesOrNo = (3 === 3) ? "yes" : "no";
console.log(yesOrNo);

console.log(`==================Ex 6=======================`);

// function vehicle(color, type, age) {
  
//   if (type === 1){
//     type = "car";
//   } else if(type === 2) {
//     type = "motorbike";
//   };

//   if (age === 5){
//     age = "used";
//   } else if(age === 1){
//     age = "new";
//   };

//   console.log(`a ${color} ${age} ${type}`); 

// }

// vehicle("blue", 1, 5);
console.log(`The result is comented out by me. The reason for that is that I had to use the same function and modify it according to EX 9`);

console.log(`==================Ex 7=======================`);

let vehicles = ["motorbike", "caravan", "bike", "car"];
console.log(vehicles);

console.log(`==================Ex 8=======================`);

console.log(vehicles[2]);

console.log(`==================Ex 9=======================`);

// This function will not handle all the cases. Ex : if we don't have an index in the array : 
// Ex : console.log(vehicle("green", 5, 1)); - This will return "a green new undefined";
// function vehicle(color, type, age) {

//   if (age > 1){
//     age = "used";
//   } else if(age <= 1){
//     age = "new";
//   } else {
//     console.log("we don't have that type of vehicle");
//   };

//   console.log(`a ${color} ${age} ${vehicles[type]}`); 

// }
// vehicle("green", 5, 1);


function vehicle(color, type, age) {
  for (let i = 0; i < vehicles.length; i++){
    if (type === i) {
      age > 0 ? console.log(`a ${color} used ${vehicles[i]}`) : console.log(`a ${color} new ${vehicles[i]}`);
    }
  }
} 
vehicle("red", 2, 1);
console.log(`==================Ex 10=======================`);

function makeAdvertisement(){
  let message = "Amazing Joe's Garage, we service ";
  for (let i = 0; i < vehicles.length; i++) {
    if (i === (vehicles.length - 2)) {
      message += `${vehicles[i]}s and `
    } else if (i === (vehicles.length - 1)) {
      message += `${vehicles[i]}s.`
    } else {
      message += `${vehicles[i]}s, `
    }
  }

  console.log(message);
}
makeAdvertisement();

console.log(`==================Ex 11=======================`);

vehicles.push("F1 car");

makeAdvertisement();

console.log(`==================Ex 12=======================`);

let emptyObject = {};

console.log(`==================Ex 13=======================`);

let fooCoding = {
  teachers: ["Seif", "Joseph", "Baraa"]
}

console.log(`==================Ex 14=======================`);

fooCoding["languages"] = ["HTML","CSS","JavaScript"];
console.log(fooCoding);

console.log(`==================Ex 15=======================`);

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(`I thik that: In case of x == y , they will be equal, as they have the same values in the array. In case of x === y they will be strictly Equal because they are the same type of variable/data. z == y will be true because z has been assigned the value of y. z == x will be also true because x == y == z`);
(x == y) ? console.log(`x and y are Equal`) : console.log(`x and y are not Equal`);
(x === y) ? console.log(`x and y are Strictly Equal`) : console.log(`x and y are not Stricly Equal`);

(z == y) ? console.log(`z and y are Equal`) : console.log(`z and y are not Equal`);
(z == x) ? console.log(`z and x are Strictly Equal`) : console.log(`z and x are not Stricly Equal`);

console.log(`Well I was so Wrong! T_T`);

/* 
value types :
numbers 
strings
boolean
null
undefined

reference types
arrays
objects
functions

*/

console.log(`==================Ex 16=======================`);

let o1 = { foo: "bar" };
let o2 = { foo: "bars" };
let o3 = o2;
console.log(o3);
console.log(o2);
console.log(`changing o2 will change o3`);
console.log(`the order of assigning does matter. for o3 = o2 it does not return an error , because it is the right order or assignment but for o2 = o3 that will return an error because o2 was already declared`);
(o3 == o2) ? console.log(`true`) : console.log(`false`);
(o2 == o3) ? console.log(`true`) : console.log(`false`);

console.log(`==================Ex 17=======================`);

let bar = 42;
typeof typeof bar;
console.log(`the output of this will be string. first we will get the typeof 42 which will return a string "number" then we will get the typeof "number" which is a string`);
console.log(typeof typeof bar);


// Work at Home

