
/*  
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

ages.push(42); 
console.log(ages[ages.length - 1] - ages[0]);
/*
inserted the extra age programmatically here to ensure I maintained a DRY code while checking if my code was dynamic
sent the answer for the calculation to the console, utilizing the .length method, and accounting for the [0] start. 
*/
let agesTally = (tally, currentTotal) => tally + currentTotal;
const agesSum = ages.reduce(agesTally, 0);
console.log(Math.round(agesSum/ages.length));

/*
 I originally was trying to use a 'for' loop, but as I looked into various array methods, I realized that the .reduce() method is an iterator, 
 which is essentially a loop. So, I used that instead, since it 'loops' through the provided integers. 
 I originally had a function for the agesTally, because I was going off of different research materials when I was looking at different ways 
 to get the sum of the numbers. I then edited the function into an arrow function to trim it up a bit. I also added the method Math.round to 
 round it to the nearest whole number (the average was 30.2222). 
*/

// ------------------

/*    
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/ 

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

let namesTally = (tally, currentTotal) => tally + currentTotal.length;
const namesCount = names.reduce(namesTally, 0)
console.log((namesCount/names.length).toFixed(1));

/*
So I utilized the same .reduce() method, and paired it with the .length property on the returned 'currentValue' parameter of the function 
within the reduce method. I also utilized the toFixed() method to round up the number to 1 place after the decimal, for easier reading and 
reviewing. 
*/

//const string = names.join(' ');

let result = ' ';
for (let i=0; i < names.length; i++) {
    result = result.concat(names[i]);
    if (i < names.length - 1) {
        result = result.concat(', ');
    }
} 
console.log(result.trim());

/*
This one is pretty self explanatory, I could have used the .join() method, and console logged the const from it, but I figured ya'll wanted an 
actual loop this time around. I used the .concat method and created an if statement to ensure that the code wasn't applying the delimiter to 
tail end of the results, and I also included the .trim() to remove the space that was trailing at the beginnging otherwise. 
*/

// ------------------

/*
3. How do you access the last element of any array?
Answer:  The last element of an array is accessed through the .length property, and is defined by the - 1 signifier, to account for the start 
of an array always being at [0].
*/

// ------------------

/*
4. How do you access the first element of any array?
Answer: The first element of an array is signified by a [0], because the array values start at 0. 
*/

// ------------------

/*
//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the 
length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/

let nameLengths = []

for (i = 0; i < names.length; i++) {
    let nameResult = names[i]
    nameLengths.push(nameResult.length)
}
console.log(nameLengths)
/*
Well, since I didn't do an actual loop for the first question, i had some difficulties with joining the previous questions
in this answer. I got it, though. I was severely overcomplicating it all, and because of that, I had no idea where to put the 
.length property. I think I had to redo this one like, 8 times. I feel good about the fact that I knew what was wrong and how 
it was wrong, but just not being able to make it right and having to start over with it. I feel ike I learned a lot on this one, 
to be honest. 
*/

// ------------------

/*
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/

const namesSum = nameLengths.reduce(agesTally, 0);
console.log(namesSum)

let nameSum = 0
for (i = 0; i< names.length; i++) {
    nameSum += nameLengths[i]
}
console.log(nameSum)
/*
So, for ya'll's convenience, I expressed both the *actual* loop and the .reduce() version so that you know I understand both
methods of operation. I also utilized the previous agesTally .reduce() function parameter formula from the earlier question. 
*/
// ------------------

/*
//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself 
n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
*/

let myFunction = (word, n) => {
    console.log(word.repeat(n))
}
myFunction('Hello', 3)

/*
I utilized the repeate method attached tot he word parameter in order to concatenate it by the n amount. Then I called the 
function with the provided variables. 
*/
// ------------------

/*
//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should 
be the first and the last name separated by a space.
*/

let thisFunction = (firstName, lastName) => console.log(`${firstName}, ${lastName}`);
thisFunction('Alyssa', 'Sabaj');

/*
This one took so little time. I utilized interpolation in the return of the arrow function and then called the function with my own name.
*/

// ------------------

/*
//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array 
is greater than 100.
*/

let numArray = [14, 68, 42];
let numSum = numArray.reduce((a, b) => a + b)
console.log(numSum > 100 ? true : false)

/*
I used the reduce() method, which executes a callback function. I also started with an if/else statement, but remembered that there
was a shorthand version, and so did the Ternary operator wrapped in the console.log to print the boolean expressions. 
*/

// ------------------

/*
//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/

let numAverage = numSum/numArray.length
console.log(Math.round(numAverage))

/*
I took the formulations and variables from the previous question as a basis to go off for this question. 
Again, I used the math.round to round the average to the nearest integer. 
pretty self explanatory otherwise
*/


// ------------------

/*
//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first 
array is greater than the average of the elements in the second array. 
*/

let array1 = [18, 56, 22, 84]
let array2 = [73, 24, 49, 36]
let arrayFun = (array1Sum, array2Sum) => {
    array1Sum = array1.reduce((a, b) => a + b)
    array2Sum = array2.reduce((a, b) => a + b)
    console.log(array1Sum > array2Sum ? true : false)
}
arrayFun()


/*
Created the arrays, made a function that included parameters that were essentially placeholders for the arraySums, 
and then console.logged the ternary operator. 
*/
// ------------------

/*
//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns 
true if it is hot outside and if moneyInPocket is greater than 10.50.
*/

let willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside == true && moneyInPocket > 10.50 ? true : false

console.log(willBuyDrink(true, 9))


/*
An arrow function worked well for this, and I included the ternary operator in the function itself this time instead of within 
a console.log expression. 
*/
// ------------------

