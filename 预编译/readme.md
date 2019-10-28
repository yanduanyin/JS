# 预编译 四部曲  发生在函数执行之前
1. 创建AO对象
2. 找形参和变量声明，将变量声明和形参作为AO属性名， 值为undefined
3. 将实参值和形参值统一
4. 在函数体里找函数声明，将函数声明作为AO对象属性名，值赋予函数体

  test(1)
// // 预编译后
//   AO {
//     a: undefined 1 3
//     b: undefined function () {} 2
//     c: undefined 0
//     d: function () {}
//   }

#  预编译也发生在全局
1. 创建GO对象 // Global Object
2. 找形参和变量声明，将变量声明和形参作为AO属性名， 值为undefined
3. 在全局里找函数声明，将函数声明作为AO对象属性名，值赋予函数体



#  函数体内代码执行，先找AO 再找 GO