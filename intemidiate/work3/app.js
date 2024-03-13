//                 class object

// class MyClassName {
//     setName(name){
//         this.name = name
//     }
//     speak() {
//         console.log(`woof woof says the dog name ${this.name}`);
//     }
// }
// const thing = new MyClassName()
// thing.setName("deggo")
// thing.speak()

//               constructor class
// class person{
//     constructor(name){
//         this.name = name
//     }

//     greeting(){
//         console.log(`hello from ${this.name}`);

//     }

//     setName(name) {
//         this.name = name
//     }

// }

// const praise = new person("gully")
// praise.greeting()
// praise.setName("praise")
// praise.greeting()



//                          json

// {
//     'name': 'praise',
//     'favFoods': ['rice', 'beans', 'salmon'],
//     'age': 30,
//     'children':[ 
//         {
//             'name': 'emma',
//             'age': 5
//     },

//     {
//             'name': 'zerpher',
//             'age': 3
//     }
// ]
// }

//                          ajax
// ajax is a asynchronous javascript and xmls




//                      the fetch api
        fetch('https://swapi.dev/api/people/1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })