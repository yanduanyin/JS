let s1 = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // false

// 因为Symbol生成的是一个独一无二的值，为常量，一般是作为对象的属性
let obj = {
  [s1]:1,
  [s2]:2
}

console.log(obj) // { [Symbol()]: 1, [Symbol()]: 2 }

// 复制代码Symbol.for与Symbol差不多，但是Symbol.for会生成一个唯一的标识
let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')
console.log(s1 === s2) // true

// 也可以通过Symbol.keyFor把标识找出来
console.log(Symbol.keyFor(s1)) // foo


// Symbol 不可new