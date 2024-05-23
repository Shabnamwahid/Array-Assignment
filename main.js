//Assignment of Array
// Q:1 Create an array named fruits that contains the following string  elements: "apple", "banana", "mango", "orange".
var fruits = ['apple', 'banana', 'mango', 'orange'];
console.log(fruits);
// Q:2 Declare an array named numbers that can contain only number  elements and initialize it with the values 10, 20, 30, and 40.
var numbers = [10, 20, 30, 40];
console.log(numbers);
// Q:3 Access the third element of the fruits array and assign it to a  variable named thirdFruit.
var fruit = ['apple', 'banana', 'mango', 'orange'];
var thirdelement = fruit[2];
console.log(thirdelement);
//Q:4 Change the second element of the numbers array to 25.
var number = [10, 20, 30, 40];
number[1] = 25;
console.log(number);
//Q:5 Add the element "grape" to the end of the fruits array using the  method.
var fruits1 = ['apple', 'banana', 'mango', 'orange'];
fruits1.push('grapes');
console.log(fruits1);
//Q:6 Remove the last element from the fruits array using the  method and assign it to a variable named lastFruit.
var fruit2 = ['apple', 'banana', 'mango', 'orange'];
var lastFruit = fruit2.pop();
console.log(fruit2);
//Q:7 Remove the first element from the fruits array using the  method and assign it to a variable named firstFruit.
var fruit3 = ['apple', 'banana', 'mango', 'orange'];
var firstFruit = fruit3.shift();
console.log(fruit3);
//Q:8 Add the element "kiwi" to the beginning of the fruits array using the method.
var fruits4 = ["apple", "banana", "mango", "orange"];
fruits4.unshift("kiwi");
console.log(fruits4);
//Q:9 Remove 2 elements from the fruits array starting from index 1 using the method.
var fruits5 = ["apple", "banana", "mango", "orange"];
fruits5.splice(1, 2);
console.log(fruits5);
//Q:10 Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
var fruits6 = ["apple", "banana", "mango", "orange"];
fruits6.splice(2, 2, "pineapple", "pear");
console.log(fruits6);
//Q:11 Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
var fruit7 = ["apple", "banana", "mango", "orange"];
var citrusFruits = fruit7.slice(0, 2);
console.log(citrusFruits);
//Q:12 Create a new array named lastTwoFruits that contains the last  two elements of the fruits array using the method.
var fruit8 = ["apple", "banana", "mango", "orange"];
var lastTwoFruits = fruit8.slice(-2);
console.log(lastTwoFruits);
