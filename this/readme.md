# call()、apply()、bind()
    - 三者都能改变this的指向
    - bind() 返回的是一个新的函数，你必须调用它才会执行，所以必须使用的时候加上()
    - call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：
        1. call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string' )。
        2. apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,['成都', ..., 'string' ])。
        3. bind 除了返回是函数以外，它 的参数和 call 一样。
# this 的指向
- this 并不是由定义函数时决定的 ，是由它最后的运行方式决定的
    - 函数是普通函数，运行方式  this指向window
    - 函数作为对象方法调用， this指向对象本身