// function getters(person: string): Function{
  // return 'hello,' + person
//   return function getters(person: string) {
    
//   }
// }
// const user = 'wn'

// getters(user)

// Ts 是 js的升级版
// TS 的数据类型（八种） 基础数据类型
// string number boolean null undefind symbol void bigint 

// const isLoading: boolean = false

// 二进制、八进制、十进制、十六进制都可以以number来定义
// const a: number = 6
// const b: number = 0xf00d

// const book: string = 'ts'

// function warnUser():void {
//   alert('test')
// }

// const c: void = undefined

// let u: undefined = undefined
// let n: null = null

// const sym1 = Symbol('key1')
// const sym2 = Symbol('key2')
// sym1 === sym2 // false

// js 可以表示的值的上限(最大安全范围)
// const max = Number.MAX_SAFE_INTEGER; // 9007199254740991  === 2^53 - 1
// const max1 = max + 1
// const max2 = max + 2
// max1 = max2 // true

// ts 用BigInt 包装一下
// const max = BigInt(Number.MAX_SAFE_INTEGER)
// const max1 = max + 1
// const max2 = max + 2
// max1 === max2  // false

// declare let foo: number
// declare let bar: bigint
// foo === bar // false

// any 
// unknow   // 和any一样， 但是unknow更加严格，
// nerver
// object

// unknown可以被赋值给其他数据类型
// let notSure: any = 4
// notSure = '4'
// notSure.foo.bar = 1
// new notSure()
// notSure[0][1]

// let value: unknown = 4
// value = '4'
// value = {}
// value = []
// // unknown可以被赋值给其他数据类型，但是不能进行深层赋值，也不能作为函数
// value.foo.bar = 1
// value()
// new value()
// value[0][1]

// never表示这个值永远不存在的
// function error(message: string): never {
//   throw new Error(message)
// }

// const empty: never[] = []
// empty.push(1)

// const list: Array<number> = [1, 2, 3] // 泛型
// const list2: number[] = [1, 2, 3]

// 元组
// let x: [string, number]
// x = ['hello', 10, false]
// x = ['hello']

// object  
// enum Direction {
//   Center = 1
// }
// let val: object

// val = Direction
// val = [1]
// val = [1, 'hello']
// val = {}


// 枚举
// 都没赋值的话，就从零开始
// 如果第一个赋值的话，其他的往下递增
enum Direction {
  up = 'up',
  down = 'down',
  right = 'right',
  left = 'left'
}

console.log(Direction.up, Direction['right']);


// 接口 interface 
interface User {
  name: string
  age?: number
  readonly isMale: boolean
  say: (words: string) => string
}
const getUserName = (user: User) => user.name 
// user.say = function(words: string) {}

// 属性检查
interface Config {
  width?: number
  [propName: string]: any // 添加字符串索引签名  // 推荐
}

function CalculateAreas(config: Config): {area: number} {
  let square = 100
  if (config.width) {
    square = config.width * config.width
  }
  return {area: square} 
}

// let mySquare = CalculateAreas({widdth: 5}) 

// 类型断言  // 推荐
// let mySquare = CalculateAreas({widdth: 5} as Config)

// 将字面量赋值给另一个变量       // 推荐
let options = {widdth: 5}
let mySquare = CalculateAreas(options)


// 抽象类 class   //  1
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('ao ao ao ao ao!!!!!');
  }
}

// const animal = new Animal() 
 
 // 实例化抽象， 需要创建子类来继承基类， 然后可以实例化子类
 class Cat extends Animal {
   makeSound() {
     console.log('ha ha ha ha ha !!!!');
     
   }
 }

 const cat = new Cat()
 cat.makeSound()
cat.move()

// pubilc private protected // 2
class Car {
  public run() { // 被public修饰的成员是可以被外部访问的 private私有的  protected被保护的可以被内部和子类访问， new出来的实例不能访问
    console.log('启动');
  }
}
// const car = new Car()
// car.run()

class GTR extends Car {
  init () {
    this.run()
  }
}