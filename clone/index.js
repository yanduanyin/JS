// let a = {
//   name: 'won',
//   book: {
//     title: 'YOU dont know js',
//     price: '45'
//   }
// }
// let b = a
// // console.log(b)

// a.name = '班族';
// a.book.price = '55'
// console.log(a)
// console.log(b)


// let a = {
//   name: 'won',
//   book: {
//     title: 'YOU dont know js',
//     price: '45'
//   }
// }

// let b = {...a}
// let b = Object.assign({}, a)
// console.log(b)

// a.name = '班族'
// a.book.price = '55'
// console.log(a)
// console.log(b)


let a = [0, '1', [2, 3]]
let b = a.slice(1)
// b ['1', [2, 3]]
a[1] = '22'
a[2][0] = '4'
console.log(a) //
console.log(b)