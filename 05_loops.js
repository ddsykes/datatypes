//! For 
/*
 Three parameters
 1 intial expression
 2 condition
 3 increment expression

*/ 

let i = 7;
//   (1)    (2)  (3)
for(i = 0; i  < 10; i++){
console.log(i);
}


console.log('global variable:', i);
/*
keyword (initial expression; condition; increment){
    code block
}
*/


/**/ 

// for (let i = 10; i <= 100; i +=10){
//     console.log(i);
// }

// //* Challenge: using a for loop, count to 20 by 2's . Starting at -10.
//let x = v * 2 ;
console.log(x);

for (let i=-10; i <= 20; i += 2){
    console.log(i);
}

for (let i=-10; i >= 0; i -=2){
    console.log(i);
}

for (let i=-10; i >= 0; i-- ){
    console.log(i);
}

for (let i = 0; i != -25; i--){
    console.log(i);
}


let firstName = "Steve";
firstName = "Joe";

//! Challenge using a for loop go through a name and display each letter individually

for (let i = 0; i < firstName.length; i++) {
    const element = firstName[i];
    console.log(element);
}

//! Challenge :Make a for loop wherre you add up all the number from 1 to 50. This should equal to 1275.

for (let i = 0; i < 50; i++){
    
    let y = i+= 0; 
    // let total = i +i;
    console.log(y);
}



let sum = 0;

for (let i = 1; i <= 50; i+= 1){
    console.log(i);
    sum += i
}
console.log(sum);

//! For In Loops 

let student ={
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 3
}
for(key in student){
    console.log(key); // name awesome degree week
    console.log(student[key]);
}

let first ='erIC'
let capName;

for (let i in first){
// console.log(typeof i);
    if(i == 0){
        capName = first[i].toLocaleUpperCase();
        // console.log(capName)
    }else{
        capName += first[i].toLocaleLowerCase();
    }
}
console.log(capName);

//! For of Loops
// for(value of student){
//     console.log(value)
// } // doesn't work -- object properties at NOT 'iterable', They are enuemrable.

let cats = ['tabby', 'british shorthair','business', 'maine coon', 'rag doll' ];
for(cat of cats){
    console.log(`${cat} cat says "meow.`);
}

//! While Loops

/*
Structure:

while(conditon){
    code block..
}

*/

let city = [
    'building', 'building', 'light pole', 'bridge', 'building', 'light pole', 'tree', 'light pole', 'empty street'
];

let structure = city[0];
let pos = 0;

while(structure != 'empty street'){
    console.log(`Spider-Man swings from the ${structure}!`);
    pos++;
    structure = city[pos];
}
console.log(`Spider-Man Lands in the ${structure}.`);


//! Do While Loops



/* 
Structure:
do {
    code block...
    while (condition)
}
*/

let spidyHp = 20;
let badguys = [
{
    baddie: "Green Goblin", 
    hp: 15
},
{
    baddie: "Venom", 
    hp: 25
},
{
    baddie: "Stilt-Man", 
    hp: 5
},
{
    baddie: "Thug", 
    hp: 0
},
];
let rand = Math.floor(Math.random() * badguys.length);
let villain = badguys[rand];
console.log(`${villain.baddie} has appeared`);

do{

  console.log(`${villain.baddie}hit Spider-Main`);
  spidyHp--;
  console.log(`Spider-Man HP:${spidyHp}`); 

  if (villain.baddie == "Thug"){
    console.log(`Spider-Man web ${villain.baddie}`)
    break;  // breaks us out of the loop based on if hte condition is met.
  }
  
  let spidyHit = Math.floor(Math.random() * 3);
  console.log(`Spider-Man hits ${villain.baddie} for ${spidyHit} damage!!`);
  villain.hp -= spidyHp;
  console.log(`Villain Hp: ${villain.hp}`);



  if (spidyHp === 0){
    break; // breaks us out of the loop based on if hte condition is met.
  }

}while (villain.hp > 0 )

villain.hp <= 0 ? console.log(`Spider-Man captures${villain.baddie}`):
console.log(`${villain.baddie} has taken down Spider-Man.`);


