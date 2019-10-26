// typeof exports ?
console.log(exports === module.exports);
var counter = 3;
// typeof exports === 'object'
module.exports = {
  counter
}
module.exports.counter = counter;
exports.counter = counter;
exports = module.exports = {
  counter
}