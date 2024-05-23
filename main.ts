//Assignment of Array

// Q:1 Create an array named fruits that contains the following string  elements: "apple", "banana", "mango", "orange".

let fruits: string[] = ['apple', 'banana', 'mango', 'orange'];
console.log(fruits);

// Q:2 Declare an array named numbers that can contain only number  elements and initialize it with the values 10, 20, 30, and 40.

let numbers: number[] = [10, 20, 30, 40];
console.log(numbers);

// Q:3 Access the third element of the fruits array and assign it to a  variable named thirdFruit.
let fruit: string[] = ['apple', 'banana','mango', 'orange'];
let thirdelement = fruit[2]
console.log(thirdelement);

//Q:4 Change the second element of the numbers array to 25.
let number: number[] = [10,20,30,40];
number[1]=25;
console.log(number);

//Q:5 Add the element "grape" to the end of the fruits array using the  method.
let fruits1: string[] = ['apple', 'banana', 'mango', 'orange'];
fruits1.push('grapes');
console.log(fruits1);

//Q:6 Remove the last element from the fruits array using the  method and assign it to a variable named lastFruit.
let fruit2 = ['apple', 'banana', 'mango', 'orange'];
let lastFruit = fruit2.pop();
console.log(fruit2);

//Q:7 Remove the first element from the fruits array using the  method and assign it to a variable named firstFruit.
let fruit3 = ['apple','banana', 'mango','orange'];
let firstFruit = fruit3.shift();
console.log(fruit3);

//Q:8 Add the element "kiwi" to the beginning of the fruits array using the method.
let fruits4: string[] = ["apple", "banana", "mango", "orange"];
fruits4.unshift("kiwi");
console.log(fruits4);

//Q:9 Remove 2 elements from the fruits array starting from index 1 using the method.
let fruits5: string[] = ["apple", "banana", "mango", "orange"];
fruits5.splice(1,2)
console.log(fruits5);

//Q:10 Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
let fruits6: string[] = ["apple", "banana", "mango", "orange"];
fruits6.splice(2,2,"pineapple","pear");
console.log(fruits6);

//Q:11 Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
let fruit7: string[] = ["apple", "banana", "mango", "orange"];
let citrusFruits: string[] = fruit7.slice(0, 2);
console.log(citrusFruits);

//Q:12 Create a new array named lastTwoFruits that contains the last  two elements of the fruits array using the method.
let fruit8: string[] = ["apple", "banana", "mango", "orange"];
let lastTwoFruits: string[] = fruit8.slice(-2);
console.log(lastTwoFruits);
