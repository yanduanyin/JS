// 这里可以看出，左侧的name和右侧的name，是互相匹配的key值
// 而左侧的name匹配完成后，再赋值给真正需要赋值的Name
let { name:Name,age } = { name:'swr',age:28 }
console.log(Name) // 'swr'
console.log(age) // 28

let name,age
// 需要用圆括号，包裹起来
({name,age} = {name:"swr",age:28})
console.log(name) // 'swr'
console.log(age) // 28

let {name="swr",age} = {age:28}
console.log(name) // 'swr'
console.log(age) // 28
// 这里规则和数组的解构赋值一样，当name = undefined时，则会使用默认值

let [a] = [{name:"swr",age:28}]
console.log(a) // {name:"swr",age:28}

let { length } = "hello swr"
console.log(length) // 9

function ajax({method,url,type='params'}){
  console.log(method) // 'get'
  console.log(url) // '/'
  console.log(type) // 'params'
}

ajax({method:"get",url:"/"})