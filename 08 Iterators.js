let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next();
//{ value: 'a', done: false }
iter.next();
//{ value: 'b', done: false }
iter.next();
//{ value: 'c', done: false }
iter.next();
//{ value: undefined, done: true }


for (let x of ['a', 'b']) {
   console.log(x);
}
// Output:
// 'a'
// 'b'

// Maps are iterables over their entries. 
// Each entry is encoded as a [key, value] pair, an array with two elements.
let map = new Map().set('a', 1).set('b', 2);
for (let pair of map) {
    console.log(pair);
}
// Output:
// ['a', 1]
// ['b', 2]

//Sets are iterables over their elements.
let set = new Set().add('a').add('b');
for (let x of set) {
    console.log(x);
}
// Output:
// 'a'
// 'b'