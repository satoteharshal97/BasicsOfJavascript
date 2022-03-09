/*
z = 10;
p = z + 15;
console.log(p);
var z;
var p;
//Hoisting states that we can declare var after intializing variables


//Arrow Function

let myFunction = (a, b) => a * b;
console.log(myFunction(10, 2));

hello = () => "Using Arrow Function";
console.log(hello());


//CallBack Function
function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
console.log(myFirst());
console.log(mySecond()); 

*/
//Asynchronous
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall()