// 'let' attaches the variable declaration to the scope of ANY block's scope.
// block scope refers to the idea that variables and functions can belong to an arbitrary block (any { .. } pair),
// rather than only to the enclosing function.
var foo = true
if (foo) {
  // let bar = 3; // ReferenceError - bar is not defined.
  var bar = 3; // 3
}
console.log(bar);


// 'var' attaches the variable declaration of the scope to the enclosing function's scope
function tryMe() {
  // var b = 20; // ReferenceError - bar is not defined.
  let b = 20; // ReferenceError - bar is not defined.
};

console.log(b);