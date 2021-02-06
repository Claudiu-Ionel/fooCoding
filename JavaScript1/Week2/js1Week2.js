// Ex 1
console.log("Salut");
console.log("Hello");
console.log("Hej");

// Ex 2
console.log(`==================Ex 2=======================`);
console.log(`I'm awesome`);

// Ex 3
console.log(`==================Ex 3=======================`);
let x;
console.log(`The value of my variable x will be: undefined`);
console.log(x);
x = 30;
console.log(`The value of x will be 30`);
console.log(x);


// Ex 4
console.log(`==================Ex 4=======================`);
let y = "Test";
console.log(`I think the value of the string is: Test`);
console.log(y);
y = "Test2";
console.log(`Now y will have the value of: Test2`);
console.log(y);

//Ex 5
console.log(`==================Ex 5=======================`);
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let highest;
if (a > z) {
  highest = a;
} else if (z < a) {
  highest = z;
} else {
  highest = "They are Equal"
}
console.log(highest);

//  (a > z) ? highest = a : (z < a) ? highest = z : highest = "They are Equal" 
//   console.log(highest)  

/* Note that if we would use Math.ceil, that would round up the number to 8 , and then our variable "highest" would have the value of 8 */

// EX 6
console.log(`==================Ex 6=======================`);
let fruits = [];
console.log(`the value will be an empty array : "[]"`);
console.log(fruits);

let myFavoriteAnimals = ["dogs", "cats", "penguins", "chickens"];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push("baby pig");
console.log(myFavoriteAnimals);


// EX 7
console.log(`==================Ex 7=======================`);
let myString = "this is a test";
console.log(myString);
console.log(`The length of the variable is: ${myString.length}`);

// EX 8
console.log(`==================Ex 8=======================`);
function checkTypeOf(var1, var2) {
  if (typeof var1 === typeof var2) {
    return "SAME TYPE";
  } else {
    return "Not the same type"
  }
}

let array = ["random", "array"];
let num = 34;
let aString = "string";
let bool = true;
let anotherArray = ["big", "brain", "time"];

console.log(`The value of array is: ${array}`);
console.log(`The value of num is: ${num}`);
console.log(`The value of aString is: ${aString}`);
console.log(`The value of bool is: ${bool}`);

console.log(`I think the type of array is: object`);
console.log(`I think the type of num is: number`);
console.log(`I think the type of aString is: string`);
console.log(`I think the type of bool is: boolean`);
console.log(typeof array);
console.log(typeof num);
console.log(typeof aString);
console.log(typeof bool);

console.log(checkTypeOf(array, num));
console.log(checkTypeOf(array, aString));
console.log(checkTypeOf(array, bool));
console.log(checkTypeOf(array, anotherArray));

// EX 9
console.log(`==================Ex 9=======================`);
console.log(`the value of x = x % 3 is : 1`)
let i = 7;
i = i % 3;
console.log(i);
// I changed the name of x into i , because it was declared in another Exercise;

// EX 10 
console.log(`==================Ex 10=======================`);

let multipleTypes = [];

function addToArray(array, var1) {
  array.push(var1);
  return array;
}
let whatever;
let nullVar = null;
addToArray(multipleTypes, 33);
addToArray(multipleTypes, "WOW");
addToArray(multipleTypes, true);
addToArray(multipleTypes, { firstName: "Claudiu", secondName: "Ionel", adress: "Not your business" });
addToArray(multipleTypes, ["This", "Is", "Incredible"]);
addToArray(multipleTypes, whatever);
addToArray(multipleTypes, nullVar);
console.log(multipleTypes);

console.log(`As seen in the Above example, I created a function that adds different types of variables into an array and as we could expect, the answer is : Yes , an array can store multiple types of variables`);

let posInfinity1 = 6 / 0;
let posInfinity2 = 10 / -0;
console.log(posInfinity1);
console.log(posInfinity2);

if (posInfinity1 === posInfinity2) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

console.log(`Surely infinities can be compared, or at least try to. Just keep in mind that in JavaScript there are two types of infinities: Positive Infinity and Negative infinity. Both types are non writable, non enumerable and non configurable. In the above case we see that negative and positive infinity are not equal , which means that they are different. But when it comes to comparing infinities to themselves : as in infinity === infinity (or the negative counterparts) we will always get "True"`);
