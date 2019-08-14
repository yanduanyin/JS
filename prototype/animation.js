function Animal(planet) {
    this.planet = planet;
}
//constructor  函数是js的一等对象
//原型对象 return {planet:}
Animal.prototype.getPlanet = function() {
    return this.planet;
}
function Person(name) {
    this.name = name;
}
// 人类也正在地球
//构造函数的原型对象可以被赋值的   
//原型链跑  Animal => Animal.Prototype => Object
Person.prototype =  new Animal('earth');

Person.prototype.getName = function() {
    return this.name;
}

const person = new Person('sanshuiq');

console.log(person.getPlanet());
console.log(person.getName());
console.log(Person.prototype.__proto__ === Animal.prototype );
