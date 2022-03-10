function print(){
  console.log("Learning call back function");
}
setTimeout(print, 5000);


setTimeout(function(){
  console.log("This is new message");
},5000);

//Callback function with arrow function
setTimeout(() => {
  console.log("Never use var,instead use let and cons");    
})


//Arrow Functions
let  sum1 = (a, b) => a + b;
console.log(sum(10, 2));

let multipy = (a, b) => a * b;
console.log(multipy(15, 10));

hello = () => "Hey, JavaScript is interesting";
console.log(hello());

//Arrow function with parameter
let message = (value)  => console.log(" Turn down for what"+ value);
console.log(message());

//----------------------------------------
//Manipulating Array
var myArray = [true,0,1,2,3,4,5,6,7,8,9,"What is the meaning of life?"];
// TODO: write your code here:
//Pushing code to end 
myArray.push(42); 

//Removing from array from end
myArray.pop();

//Removing  element from first
myArray.shift();

//Adding element at first
myArray.unshift(883);
myArray.unshift(true);

//Removing elements from specific index position
myArray.splice(2, 5);

console.log(myArray);



//-------------------------------------------------------------------
//Special operators

Math.abs calculates the absolute value of a number
Math.exp calculates e to the power of a number
Math.pow(x,y) calculates the result of x to the power of y
Math.floor removes the fraction part from a number
Math.random() will give a random number x where 0<=x<1 



//----------------------------------------------
//Code Camp Exercises
In this exercise, you do the following:

  Connect the firstName and lastName to construct the variable fullName, but with a space (" ") in between the first and last name.
  Multiply the variable myNumber by 2 and put the result in meaningOfLife.


Code:
var firstName = "John";
var lastName = "Smith";
var myNumber = 21;

// TODO: change the following code
var fullName = null;
var meaningOfLife = null;

fullName = firstName +" "+  lastName;
meaningOfLife = 2 * myNumber

console.log("The name is " + fullName);
console.log("The meaning of life is " + meaningOfLife);