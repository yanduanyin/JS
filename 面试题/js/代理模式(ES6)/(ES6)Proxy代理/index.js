// Proxy代理也可以进行数据劫持，但是和Object.defineProperty不同的是，
// Proxy是在数据外层套了个壳，然后通过这层壳访问内部的数据，

let dog = {
  name:"小黄",
  firends:[{
    name:"小红"
  }]
}

// 1.首先new一个Proxy对象
let proxy = new Proxy(dog,{ // 2.参数一为需要代理的数据，参数二为上图可以代理的13种的配置对象
    get(target,property){ // 3.参数1为上面dog对象，参数2为dog的属性
        console.log('get被监控到了')
        return target[property]
    },
    set(target,property,value){ // 4.参数1为上面dog对象，参数2为dog的属性，参数3为设置的新值
                                // 有点类似Object.defineProperty
        console.log('set被监控到了')
        target[property] = value
        // 这里的target[property] = value 可以用下面的写法
        Reflect.set(target,property,value)
    }
})

// 那么接下来我们设置一下这个属性
// dog.name = '小红'  // set值时，发现不会打印 'set被监控到了'
// dog.name // get值时，发现不会打印 'get被监控到了'

// 思考：为什么在set/get值的时候不会打印出来我们需要的东西呢？

// 上面说得很明白了，proxy相当于是一个壳，代理我们需要监控的数据，也就是我们要通过proxy来访问内部数据才会被监控到

proxy.name = '小红' // 打印输出 'set被监控到了'
proxy.name // 打印输出 'get被监控到了'





// 那么我们该怎样实现深度的数据劫持呢？
let dog = {
  name:"小黄",
  firend:{
    name:"小红"
  }
}

// 我们首先写一个set方法，希望是通过这样来调用
set(dog.firend,funtion(obj){
    console.log(obj) // { name:"小红" }  回调函数中的obj代表的是dog.firend的对象
})
// 实现
let dog = {
  name:"小黄",
  firend:{
    name:"小红"
  }
}

function set(obj,callback){
    let proxy = new Proxy(obj,{
        set(target,property,value){
            target[property] = value
        }
    })
    // 最后把proxy传给我们的回调函数
    callback(proxy)
}

set(dog.firend,function(obj){
    console.log(obj) // { name:"小红" } 实际就是从set函数中传出来的proxy对象
})