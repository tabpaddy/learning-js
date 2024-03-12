// let num = 123;
// let num2 = "456.7"
// num + num2
// num2 = Number(num2);
// num + num2

// ***** data type ****
//array
// let lst = ["praise", 22, "developer", "palntain", {}, []]
// lst.push("new item")
// const newItem = lst.pop()

//**** array iteration */
// const arr = ["zero", "one", "two", "three"]
// for(i = 0; i < arr.length; i++){
//     // console.log(i);
//     console.log(i, arr[i]);
// }

// arr.forEach(num =>{
//     console.log(num)
// })

// ****** selecting multiple dom *******
// const elems = document.querySelectorAll(".this-class");

// console.log(elems)

// const elements = document.querySelectorAll("li");
// console.log(elements);

// // elements.forEach(node =>{
// //     node.innerText = "this is change"
// // })

// elements.forEach((node, index) =>{
//     node.innerText = `hello this item is ${index}`
// })

// elements.forEach((node, index) =>{
//     node.innerText = `hello this item is ${index+1}`
// })

// elements.forEach(node =>{
//     node.classList.add("custom-class", "second-class")
// })


// ****** function ******
//  function addNumber(num1, num2){
//     const total = Number(num1) + Number(num2);
//     return total
//  }

//  const addedTotal = addNumber("1", "9.123");

//  function greeting(name){
//     return `hello ${name}`
//  }

//  const human = greeting("praise")

//  function times(num1, num2) {
//     const total = Number(num1) + Number(num2);
//     return total
//  }

//  const timesTotal = times(12.3, "8")


//  ***** rest operator *****

function addNumbers(greetingName, ...numbers) {
    let total = 0
    for (index in numbers) {
        total = total + numbers[index];
        
    }
    return `${greetingName}: the total is ${total}`;
};

const newTotal = addNumbers("mina", 1, 4, 7, 13);
console.log(newTotal)


// ***** object function ****

const person = {
    'name': 'emma',
    'age': 20,
    'height': 6.4,
    'speak': function(want = "cookies"){
        console.log(`meow, i want ${want}`);
    },
    talk(to= "karen"){
        console.log(`i am talking to ${to}`);
    }
}

// person.speak()
person.talk("amanda")