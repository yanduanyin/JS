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


