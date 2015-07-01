function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

//Generators are subtypes of iterators which include additional next and throw. 
//These enable values to flow back into the generator, so yield is an expression 
//form which returns a value (or throws).

var it = foo();
console.log( it.next() ); // { value:2, done:false }
console.log( it.next() ); // { value:3, done:false }
console.log( it.next() ); // { value:4, done:false }
console.log( it.next() ); // { value:5, done:false }
console.log( it.next() ); // { value:6, done:false }

// you use the new yield keyword to pause the function from inside itself. 
// Nothing can pause a generator from the outside; it pauses itself when it comes across a yield.

//for..of
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (var v of foo()) {
    console.log( v );
}

// 1 2 3 4 5
console.log( v ); // still `5`, not `6` :(