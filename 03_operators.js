/*
! Operators
- Plus        +
 - time       *
- power       **
- dot         .
- assignment   =
- comparison    ==


used for:
- assign
- compare
- arithmetic
- logival 
- conditionals


Expression & Statements

keyword name (expression){
    code block
}

Statements are a collection of a keyword, an expression and a code block.
*/

//! Comparsion Operators
// Equal to
"3" == 3;
console.log("3"== 3);
//Stritch Equal to
console.log("Stritchly Equal to ", "3" === 3);
// Not Equal To
console.log("Not Equal to:", "3"  != 3);
console.log("Strict Not Equal to:", "3" !==3); // strict


let aName ="Bob";
aName == "Bob";
console.log("Check Name", aName == "Bob"); // false

//Greater Than
3 > 2;

//less Than
2 < 3;

//Greater Than or Equal to

3 >= 2;

// Less thank or equal to
2 <= 3;

//! AND
2 && 3;

//! OR
2 || 3 ;

//! Logical Operators
let x =1;
console.log(x); // 1
x = x + 1;
console.log(x); // 2

//Addition
let r =10;
r += 1; // r=r+1;
console.log(r);

//Subtraction

r -=2;  // r = r-2
console.log(r);

//mulptication
r *=2;
console.log(r);

//Reset Value
r = 10;
console.log(r);


//Divison
r /=2; // r =r /2
console.log(r);


//Remainder (Modulus)
r%= 3; //r =r % 3;
console.log(r);


//Exponential 
r **=3; // r = r ** 3;
console.log(r);

/*
*/ 

/* 
!   Challenge:
    Create 6 different variables. Each one will hold different data types.
        - variable will be detail:
            - First Name - holds a string
            - Last Name - holds a string
            - Birth Year - holds an integer
            - Needs Coffee - holds a boolean
            - The Current Year - holds an integer
            - Age - holds an integer.
                - This should reflect the difference between the current year and birth year. Not a literal.

        These values can be fictional.

            - Console Log Age.
        
*/


let firstName = "David";
let lastName = "Sykes";
let birthYear = 1976;
let needsCoffee = true;
let currentYear = 2023;
let currentAge = 47;
let age = currentYear - birthYear;
console.log('Age:', age);


