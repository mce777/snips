var b = ['yo', 'whadup', '?'];

// Arrays inherit from Array.prototype (which has methods indexOf, forEach, etc.)
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Functions inherit from Function.prototype (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null

// with Object.create

var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null
