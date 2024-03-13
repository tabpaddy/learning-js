//                                  ***** window onload ****
// window.onload = function() {
//     alert("this site is loaded");
// }

//when the page is refreshed
// window.onbeforeunload = function (){
//     // alert("you are about leaving the page!")
//     console.log("before unload");
//     return ("you are about leaving the page")
// }

//                                      strict comparison

// let num = "0";
// console.log(num === 0)
// console.log(num == 0);

//                                      variable scoping

// const num = 1234;
// if (num === 1234){
//     const greeting = "hello 1234"
// }

// console.log(greeting);

//                                          variable hoisting

// console.log("first", name2);
// var name2 = "praiset";
// console.log("second", name2);

//                                      javascript closure

// let person1 = "praise T"

// function greeting(){
//     console.log(`hello ${person1}`);
//     var person2 = "john"
// }

// greeting()
// console.log(`${person2} is the second person`);

//                                      callback function
// console.log("waiting for 2.5 seconds");
// setTimeout(function(){
//     console.log("do this thing in here");
// },2500)
// console.log("the last line");

//                                     strict mode = makes d code strict to avoid typos
// "use strict";
// let x = "thing"
// x = "something else"

// console.log(x);

//                                      timed events with timeout and interval

// console.log("starting script...");

// setTimeout(() => {
//     console.log("waited 2 seconds");
// }, 3000);

//set interval

let count = 0

const myInterval = setInterval(() => {
   console.log("checking something..."); 
   count++;

   if (count === 3) {
    //unset the interval
    clearInterval(myInterval)
    console.log("this was the last one.");
   }
}, 3000);
