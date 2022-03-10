
//Map,Reduce and Filter
//Array method function

//Map is used to perform some action on array
//The map() method is used for creating a new array from an existing one, 
//applying a function to each one of the elements of the first array.
const array = [true,"one", 2, 3, 4];
const some = array.map(item => item + 2);
console.log(some);


//Filter
/* The filter() method takes each element in an array and it applies a conditional statement against it. 
If this conditional returns true, the element gets pushed to the output array.
If the condition returns false, the element does not get pushed to the output array.  */

const numbers = [1, 2, 35, 7, 4, 8, 30, 12];
const even = numbers.filter(item => item % 2 === 0);
console.log("All even numbers are array");
console.log(even);

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

  const grade = students.filter(student => student.grade > 70);
  console.log(grade);

//Reduce
/* The callback argument is a function that will be called once for every item in the array.
This function takes four arguments, but often only the first two are used.

    accumulator - the returned value of the previous iteration
    currentValue - the current item in the array
    index - the index of the current item
    array - the original array on which reduce was called
    The initialValue argument is optional. If provided, it will be used as
     the initial accumulator value in the first call to the callback function. */

     const array1 = [ 1, 2, 4, 5, 0];
     const sum = array1.reduce(function (result,  item){
            return result + item ;
     }, 0);
     console.log(array1);
     console.log(sum);


     //Secoond Example
    var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
        var petCounts = pets.reduce(function(obj, pet){
            if (!obj[pet]) {
                obj[pet] = 1;
            } else {
                obj[pet]++;
            }
            return obj;
            }, {});

console.log(petCounts); 
