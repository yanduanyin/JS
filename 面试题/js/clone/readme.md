- 浅拷贝  返回的对象并不是独立的新的对象  跟直观理解有差异   
- 深拷贝  返回了一个新的对象

- 浅拷贝  深拷贝  规避内存指向同一地址问题

- 简单版深拷贝  JSON.parse(JSON.stringify())
  JSON.parse(JSON.stringify())  
  // JSON.parse 将字符串对象化  
  // JSON.stringify 将对象字符串化
  会返回一个对象,复杂的,function() {},解决大部分问题

- 简单类型的拷贝是拷贝值    
- 复杂数据类型，拷贝是引用式赋值  

- Array.slice() 和 对象的解构 和 Object.assign 会让将源对象（source）的所有可枚举属性，复制（浅拷贝）到目标对象（target）。