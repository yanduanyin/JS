## 强缓存和协商缓存
(优先级都是从上往下的)
### 强缓存
响应头 cache-control expires
- http1.1 cache-control：相对的  相对于当前时间加一段时间

- http1.0 expires： 固定的时间 

状态码200： from memory / from disk
请求： 不发请求， 直接走缓存

### 协商缓存

1. a.js
- 服务： etag： '123'
- 后续请求： if-none-match: '123'
4. 服务端处理 判断  
    1. req.headers[if-none-match] ?== md5(a.js)
    2. 如果相等返回状态码304, 如果不相等返回状态码 200 a.js
    
文件的hash值：md5
hash : 同样的输入有同样的输出

- 服务： last-modified:2018: 12:11
- 请求： if-modified-since: 2018:12:11
文件最后修改时间



console.log(123);  -> 456
7:30

