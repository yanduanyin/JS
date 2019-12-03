### 字符串方法总结
- 截取字符串
  - slice（start,end）;截取字符串时不包括下标为end的元素。
    String.slice与Array.slice区别：
    返回结果形式不一样，一个是一段字符串，一个是一段浅复制后的数组
  - substr（start，length）；substr() 的参数指定的是子串的开始位置和长度
  - substring（start，end）；
- 分割字符串
  - split（字符串/正则,length）；第一个参数是指定以什么为分割符。
- charAt（pos）返回指定位置（如上pos）的字符
- concat（string…） 用于连接两个或者多个字符串
- indexOf（searchString，position）在string内查找另一个字符串searchString   返回第1个匹配字符的位置，否则返回-1
- string.match(regexp)   match方法让字符串和一个正则表达式进行匹配。它依据g标识来决定如何进行匹配。
- replace（searchValue，replaceValue）  作用：replace方法对string进行查找和替换操作，并返回一个新的字符串。