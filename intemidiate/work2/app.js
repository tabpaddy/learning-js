"use strict";
//                                  while loop

// let num = 0;
// while (num < 50) {
//     console.log(num);
//     num++;
// }

// while (true) {
//     let name = prompt("what is your name?")
//     if (name === "praise") {
//         break
//     }
//     console.log("wrong name, try again.");
// }

//                              date formatting

// let d = new Date(2023, 1, 15);

// d.getFullYear()
// d.getDate()
// d.getMonth()

// console.log(d);

//                              destructing array

// const month = ['january', 'february', 'december']
// const [jan, feb] = month;
// console.log(jan, feb);
// console.log(month);

//                              destructing object

// const person3 = {
//     'name': 'praise',
//     'instagram': '@praise_t',
//     'somethingElse': 'soemthingelse'
// }

// const {name, instagram} = person3

//                              deleting object properties

// const person4 = {
//     'name': 'emma',
//     'age': 18,
//     'occupation': 'student'
// }

// delete person4['occupation']
// console.log(person4['occupation']);

//                              javascript math

// Math.round(4.6)
// Math.pow(8, 4)
// Math.sqrt(9)
// Math.max(1, 4, 45, 35)
// Math.min(-23, 0, -46, 40)
// Math.floor(7.46)
// Math.ceil(23.1)

// Math.random()

// Math.random() * 100

// Math.floor(Math.random() * 83)

// console.log(Math.floor(Math.random() * 83));

//                              a random number guessing game

// while (true) {
//     let number = prompt("Guess the number!");
//         number = Number(number);
//     const randomNumber = Math.ceil(Math.random() * 10)
//         if (number == randomNumber) {
//             alert("You win")
//             break;
//         } else {
//             console.log(`you guessed ${number} But the right number was ${randomNumber}`);
//         }
// }

//                              gracefully catching errors with try and catch

// try {
//     throw "kalob custom error"
// } catch (error) {
//     console.warn("error loading:", error);
// }

// console.log("show me!!!");


// const num = 30

// try {
//     num.toLowerCase()
// } catch (error) {
//     console.warn("error loading:", error);
// } finally{
//     console.log(num);
// }

// console.log("show me!!!");


//                                  `this` keyword
// const person5 = {
//     'name': 'Praise',
//     speak(){
//         console.log(`my name is ${this.name}`);
//     }
// }

// person5.speak()



//  const counter = () => {
    
//     if (this.total === undefined) {
//         this.total = 1
//     }else {
//         this.total++
//     }
//     console.log("running counter. this is", this.total);
//  }

//  counter()

//                                    arrow function
// const hello = () => {
//     console.log("hello");
// }

// hello()

// //or

// const helo = () => "hello from one line function"

// helo()

const  myNewGreeting  = (name, secondname) => {
    console.log(`welcome. ${name} and my surname is ${secondname}`);
}

myNewGreeting("praise", "taborota")