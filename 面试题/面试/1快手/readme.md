## 面试总结
- 等待面试官状态好了再开始聊，不要太紧张，也不要一直和面试官说我很 紧张，这样会让面试官认为你基础掌握不扎实
- 太紧张了。 自己缺乏引导面试官的能力
- 每次面试官提问都是为了考察你某个知识点的理解，如果你在题目上找不到你理解的知识点，那你可以回想一下你和面试官之前聊过什么，
   一般都是考察你自己之前提过的知识点。不要紧张，即使你真的不会，你可以就说自己不会，或者没有理解题意，留着待会再回答，先进行下去。


任务
面试官提出的问题将出现在这里。

1. 复选框的联动效果  ，全选， 单选
  input 有三个属性 type name value 
   1、type:
   当 type="text" 时， 控件为文本框
   当 type="password" 时， 控件为文本框
   当 type="radio" 时，控件为单选框
   当 type="checkbox" 时，控件为复选框， 复选框如果要实现单选框作用需要使name属性值相等
      复选框的属性  checked：当设置 checked="checked" 时，该选项被默认选中
      注意:同一组的单选按钮，name 取值一定要一致
   当 type：只有当type值设置为submit时，控件为按钮才有提交作用  value：按钮上显示的文字
   当 type：只有当type值设置为reset时，控件为按钮才有重置作用
2. 'abc'  = indexof('b')
   indexof的实现。
   总结： indexof 这种常见的API 的实现，你要考虑循环，一些算法，具体还是碰到了再说
   
3. first + last  = fullname

input [    first    ]
input [    last     ]

显示 $fullname

// 总结：  vue 的双向数据绑定  v-model  在input绑定一个值，可以在computed里面改变


======================
4. var a = {
    name: 'a',
   say: function () {
      console.log(this.name)
   }
} 

var b = a.say

b()

// 总结： 此题问的是this的指向， 每次面试官问问题一定是考察你某个知识点，你要先理解这个知识点，再去解题。
         此题是在一个对象里定义一个函数，函数使用console.log(this.name)打印this.    
         能打印什么要看调用这个函数的对象是谁，现在是在window下调用，所以打印 undefined  (window下没有这个属性)