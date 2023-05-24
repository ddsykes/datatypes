//variables are containers that hold data value/

/*
Single-line: ctrl +/ or cmd+/
Multi-line:
Quick key Alt+shift+A - Windows
            opt+shift+A - mac

 */

    /*
    variable keywords:
    - var
    -let
    -const

    */

            

        let a = 2;

        let    b      =      1     ;

//     (1)    (2)   (3)      (4)   (5)

         /* 
         1. JS keyword to denote the creation of a variable
         2.  The name of the variable. Tpically named for what it should be holding.
            example: let streetAddress ="123 Main Street";
         3. Assignment operator  
         4. The inital value 
         5. Closing statement  
         
        */


         //! Variable Initilization
         // Initialization is the RIGHT side of the assignment operator (=)
        let x = 10;  // <-- 10 has been initialized to the variable "x".

        //! Assigning to Other Variables
        let first = "John";
        let last =  "Smith";

        let full = first + last; // return = "John Smith"

    //! Additional Examples
        let c; // < -- Declaration of a variable
        console.log("Declaration", c);

    c = 10; // Assigning our variable
    console.log("Initializaiton 1:", c);

    c = 33; // reassigning the value of our variable
    console.log("Reassigning:", c);

    let y = 'Hello'
    //emmet for console.log() - clg
    console.log("Both", c , y);

    //! Const
    // "new" is ES6: declares variables meant to remain unchanged
    let today = "Great!";
    const javascript ="Wonderful";
    console.log(today, javascript);

    today = "Lovely!";
    console.log(today, javascript);

    //javascript = "Super!";
    console.log(today, javascript); // TypError
    


         /* 
         
         */