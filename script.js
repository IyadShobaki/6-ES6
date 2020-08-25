/*
// let and const  //ES6

//Decalre variables in ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5)

//The new decalring variables in ES6
const name6= 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller'; // Error because its const
console.log(name6)

// ES5
function driverLicence5(passedTest){
    if(passedTest){
        console.log(firstName); // this will return undefined with no error
        var firstName = 'John';
        var yearOfBirth = 1990;

    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to driver a car.');
}

driverLicence5(true);

// ES6

function driverLicence6Error(passedTest){
    if(passedTest){
        // let scope is just between this 2 curly brackets (block scoped variable)
        let firstName = 'John';
        const yearOfBirth = 1990;
     
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to driver a car.'); //we don't have access to let variables(firstName is not defined)
}

function driverLicence6(passedTest){
    //console.log(firstName); // this will return error (firstName is not defined)

    let firstName;
    const yearOfBirth = 1990;

    if(passedTest){
  
        firstName = 'John';
       
     
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to driver a car.'); 
}

driverLicence6(true);


//let i = 23;
//for (let i = 0; i < 5; i++){ // i here is different variable inside the block
//    console.log(i); // 0 1 2 3 4
//}
//console.log(i); // 23


var i = 23;
for (var i = 0; i < 5; i++){ // i here is the same i oustide the if block
    console.log(i); // 0 1 2 3 4
}
console.log(i); // 5

*/

/*
// Blocks and IIEFs

//ES5 to make a block we have to use IIEF
(function () {
    var c = 3;
})();
//console.log(c); //error c is not defiend 

// ES6 a block is just a curly brackets
{
    const a = 1;
    let b = 2;
    var c = 3; 
}
console.log(c);// var is not block-scoped, they are function scoped

//console.log(a + b); // error a is not defined

*/

/*
// Strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calculateAge(year) {
    return 2020 - year;
}

// ES5 
console.log('This is ' + firstName + ' ' + lastName + '. He was born in '+ yearOfBirth + '. Today, he is ' + calculateAge(yearOfBirth) + ' years old.');

// ES6  using template literals (backticks  ``)
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calculateAge(yearOfBirth)} years old.`);

const fullName = `${firstName} ${lastName}`;
console.log(fullName.startsWith('j'));
console.log(fullName.endsWith('sm'));
console.log(fullName.includes('p'));

console.log(`${firstName} `.repeat(5));
*/

/*
// Arrow functions: Basics

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
    return 2020 - el;
});
console.log(ages5);

// ES6
//arrow function with 1 line of code
let ages6 = years.map(el => 2020 - el);  
console.log(ages6);

//arrow function with 1 line of code and more parameters
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 -el}.`);
console.log(ages6);

//arrow function with multiple lines of code
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
*/

/*
// Arrow functions: Lexical 'this' keyword

// ES5 version
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
           var str = 'This is box number ' + self.position + ' and it is ' + self.color;
           alert(str); 
        });
    }
}

//box5.clickMe();

// ES6 version
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
           var str = 'This is box number ' + this.position + ' and it is ' + this.color;
           alert(str); 
        });
    }
}

box6.clickMe();

// ES6 version not working version 
const box62 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
           var str = 'This is box number ' + this.position + ' and it is ' + this.color;
           alert(str); 
        });
    }
}

//box62.clickMe();  // this is undefiend


//Another example of arrow function usinf class (function constructor)
function Person(name) {
    this.name = name;
}
// ES5 version
Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function (friend) {
       return this.name + ' is friend with '+ friend; 
    }.bind(this));
    console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

//ES6 version
Person.prototype.myFriends6 = function (friends) {
    const arr = friends.map(friend => `${this.name} is friend with ${friend}`);

    console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/

/*
// Destructuring
//ES5 
var john = ['John', 26];
var name1 = john[0];
var age1 = john[1];


// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// In ES5 when we need to return multiple values from a function, we create an object and 
// return that object. But wi ES6 destructuring is easier

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

*/

/*
///////////////////////
// ES6 Arrays
const boxes = document.querySelectorAll('.box'); // this will return a node list (not an array)

// To change boxes to an array in  - ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
//console.log(boxesArr5);
//Change all boxes to blue color
boxesArr5.forEach(function (current) {
    //current.style.backgroundColor = 'dodgerblue';
});

// To change boxes to an array in  - ES6

const boxesArr6 = Array.from(boxes);
//boxesArr6.forEach(current => current.style.backgroundColor = 'dodgerblue');
// simpler way
Array.from(boxes).forEach(current => current.style.backgroundColor = 'dodgerblue');

// Using loop in ES5 to change the box texts (exept the blue box)
for(var i =0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }

    //boxesArr5[i].textContent = 'I changed to blue!';
}

// Using loop in ES6 to change the box texts (exept the blue box)
for (const current of boxesArr6){
    if(current.className.includes('blue')){
        continue;
    }
    current.textContent = 'I changed to blue!';
}


//ES5 working with arrays
var ages = [12,17,8,21,14,11];
var fullAge = ages.map(function(current){
    return current >= 18;
});
console.log(fullAge);

console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

//ES6 working with arrays
console.log(ages.findIndex(current => current >= 18)); // to find the index
console.log(ages.find(current => current >= 18)); // to find the value
*/

///////////////////////
// The Spread Operator   -> to expand elements of an array

function addFourAges (a,b,c,d){
    return a + b + c + d; 
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6 
const sum3 = addFourAges(...ages);
console.log(sum3);

//combine arrays
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamliy = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamliy);


// another example ES6
const header = document.querySelector('h1') //by element name
const boxes = document.querySelectorAll('.box');
const all = [header, ...boxes]; //node list
Array.from(all).forEach(current => current.style.color = 'purple');








