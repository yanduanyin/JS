let a = {
  name: 'wn',
  book: {
    title: 'js',
    price: '45'
  }
}
let b = JSON.parse(JSON.stringify(a)) // JSON.parse 将字符串对象化
// let b = JSON.stringify(a) // JSON.stringify 将对象字符串化
console.log(b)