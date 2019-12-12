# 一次完整的HTTP事务 （在浏览器输入地址，按下回车之后， 到看到完整页面之前，发生了什么？）
## DNS 解析
1. 检查操作系统 DNS 缓存
2. 本机 hosts 文件
3. 向 DNS 服务器请求解析域名  www.baidu.com
    1. .com  1级      root server
    2. baidu.com      TLD server
    3. www.baidu.com   xx.xx.xx.xx(0~255)

## 发起 TCP 连接
1. 客户端向服务端请求建立连接
2. 服务器响应给客户端
3. 客户端准备发送数据

## http 报文格式
请求报文
响应报文

1. 请求行
2. 请求头
3. 空行
4. 请求体