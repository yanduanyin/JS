// calss 类操作  类里面写方法  
class Coder {
    name(val) {
        console.log(val)//方法里面注意写return
        return val
    }

    skill(val) {
        console.log(this.name('子银')+ ':' +'Skill-' + val)
        //此处this是在Coder作用域里
    }
    constructor(a, b) {  //类里面用constructor接受传进来的参数
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a+this.b;
    }
}
// let ziyin = new Coder(1,2);  //ziyin是类的实例
// ziyin.name('子银')
// ziyin.skill('游泳')
// console.log(ziyin.add());

class htmler extends Coder {
  //htmler新类 继承 extends 父类Coder
}

let yin = new htmler;
yin.name('yanduanyin')