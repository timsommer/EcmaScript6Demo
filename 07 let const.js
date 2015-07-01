//var is scoped to the nearest function block (or global if outside a function block),
//and let is scoped to the nearest enclosing block (or global if outside any block), 
//which can be smaller than a function block. 

//Identical:
let me = 'go'; //globally scoped
var i = 'able'; //globally scoped

function eenvariableFuncion() {
    let terOfRecommendation = 'awesome worker!'; //function block scoped
    var sityCheerleading = 'go!'; //function block scoped
};

//let is only visible in the for() loop and var is visible to the whole function.

function someFunction() {
    //a is *not* visible out here

    for( let a = 0; a < 5; a ++ ) {
        //a is only visible in here (and in the for() parentheses)
    };

    //a is *not* visible out here
};

function someFunction() {
    //b *is* visible out here

    for( var b = 0; b < 5; b++ ) {
        //b is visible to the whole function
    };

    //b *is* visible out here
};


function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      x = "foo";
    }
    // error, already declared in block
    let x = "inner";
  }
}