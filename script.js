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








