// 平时我们这样给一个对象添加属性
let obj = {str:"hello swr"}
obj.str = 'goodbye swr'
console.log(obj.str) // 'goodbye swr'

// 那么当我们想在给一个对象，读取值或写入值时，进行别的操作，该怎么做呢？
// 使用Object.defineProperty()
// 接收的第一个参数为对象，第二个参数为属性名，第三个参数为配置对象
let obj = {}
Object.defineProperty(obj,'name',{
    enumerable:true,// 是否可枚举，默认值 false
                    // 如果为false的话，打印这个obj对象，是看不到name这个属性
    writable:true,  // 是否可写，默认值 false
                    // 如果为false的话，给name赋值，不会生效
    configurable:true, // 是否可配置（是否可删除），默认值 false
                       // 如果为true，delete obj.name，再打印obj，则显示{}
                       // 如果为false，delete obj.name，再打印obj,则显示{name:undefined}
   value:'swr', // name对应的值
})

// 上面的写法其实和下面的写法是一样的
let obj = {}
obj.name = 'swr'


// 那么既然一样，我们有必要写这么大串的代码吗？
// 其实核心是get和set，我们继续往下看

// 需要注意的是，当使用get set时，则不能使用value和writable
let obj = {}
let str
Object.defineProperty(obj,'name',{
    enumerable:true,
    configurable:true, 
    get(){ // 读，当我们读取时，则会执行到get，比如obj.name
        // return 'swr' // 当我们obj.name进行读取时，会返回'swr'
        return str
    },
    set(newValue){ // 写，当我们写入时，则会执行到set，比如obj.name = 'swr'
                   // 并且会把newValue作为参数传进去
        str = newValue
    }
})

obj.name = 'swr' // 写入
console.log(obj.name) // 'swr'  // 读取
// 这样一来，我们可以在get set函数中，写出对应的业务逻辑，

// 一般不再选择这样的写法
// Fn.prototype.xxx = xxx

// 更多的是选择这样的写法
// 这样的好处就是当读取值的时候，可以做一系列我们想做的事情
// Object.defineProperty(Fn.prototype,'xxx',{...})

// 数据的双向绑定

// 这是将要被劫持的对象
const data = {
    name: '',
  };
  
  function say(name) {
    if (name === '古天乐') {
      console.log('给大家推荐一款超好玩的游戏');
    } else if (name === '渣渣辉') {
      console.log('戏我演过很多,可游戏我只玩贪玩懒月');
    } else {
      console.log('来做我的兄弟');
    }
  }
  
  // 遍历对象,对其属性值进行劫持
  Object.keys(data).forEach(function(key) {
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function() {
        console.log('get');
      },
      set: function(newVal) {
        // 当属性值发生变化时我们可以进行额外操作
        console.log(`大家好,我系${newVal}`);
        say(newVal);
      },
    });
  });
  
  data.name = '渣渣辉';
  //大家好,我系渣渣辉
  //戏我演过很多,可游戏我只玩贪玩懒月