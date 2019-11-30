// # call()、apply()、bind()
//     - 三者都能改变this的指向
//     - bind() 返回的是一个新的函数，你必须调用它才会执行，所以必须使用的时候加上()
//     - call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：
//         1. call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string' )。
//         2. apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,['成都', ..., 'string' ])。
//         3. bind 除了返回是函数以外，它 的参数和 call 一样。

// # this 的指向
// - this 并不是由定义函数时决定的 ，是由它最后的运行方式决定的
//     - 函数是普通函数，运行方式  this指向window
//     - 函数作为对象方法调用， this指向对象本身
var name = '小王', age = 17;
var obj = {
    name: '小严',
    objAge: this.age,
    myFun: function(fm, t) {
        console.log(this.name + '年龄' + this.age, '来自' + fm + '去往' + t);
    }
}
var db = {
    name: '王小宝贝',
    age: 18
}

//使用call()、apply()、bind()调用  参数不限定类型 string、函数、object...
obj.myFun.call(db, '青岛' , '贵溪');
obj.myFun.apply(db, ['青岛' , '贵溪'])
obj.myFun.bind(db, '青岛' , '贵溪')();
obj.myFun.bind(db, ['青岛' , '贵溪'])();

// 总结
// call()使用，参数以arg1，arg2，arg3，，，，的形式传参
// apply() 使用， 参数以数组的形式传入，[arg1,arg2,arg3,...]
// bind() 使用 ,参数也是以arg1，arg2，arg3，，，，的形式传参，注意，bind()方法返回了一个不会立即执行的函数，需要手动执行

