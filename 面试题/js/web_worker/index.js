// Web Worker 是为了解决 JavaScript 在浏览器环境中没有多线程的问题。正常形况下
// ，浏览器执行某段程序的时候会阻塞直到运行结束后在恢复到正常状态，而HTML5的Web Worker就是为了解决这个问题，提升程序的执行效率。
//  所以Web Worker  的最佳使用场景是执行一些开销较大的数据处理或计算任务

// 目前除了IE，其他主流浏览器都已经支持Web Worker。在创建 web worker 之前，我们一般需要检测用户的浏览器是否支持它，方法如下：
// if(typeof(Worker)!=="undefined"){
//   //支持
// }else{
//   //浏览器不支持
// }

//worker是一个对象，通过构造函数Worker创建，参数就是一个js文件的路径；文件中的js代码将运行在主线程之外的worker线程； 创建worker很简单，如下：

var worker = new Worker('./worker.js');
worker.onmessage = function (e) {
    var data = e.data;
}
var messageData = {
    message: 'hello worker!'
};
worker.postMessage(messageData);

// （1）使用多少个worker？

// 遇到复杂的计算，需要开启多少worker才合适呢？一般的做法是参考navigator.hardwareConcurrency 这个属性，它表示机器支持的并行最大任务数。

// （2）优化woker与主线程通信开销

// Worker 与“主线程”之间的数据传递默认是通过结构化克隆（Structured Clone）完成的。数据量较大时，克隆过程会比较耗时，这会影响 postMessage 和 onmessage 函数的执行时间。

// 解决的办法一是先通过 JSON.stringify 将对象序列化，接收之后再用 JSON.parse 还原。因为：stringfiy + 传递字符串的耗时 < 传递对象的耗时 

// 操作像素
var imageData = context.createImageData(img.width, img.height);
var work = new Worker('./cal.js');
var data = {
     data: imageData.data,
     width: imageData.width,
     height: imageData.height
};
// 将传递的参数转换成字符串
work.postMessage(JSON.stringify(data));

// 还有一种避开克隆传值的方法，就是使用Transferable Objects，主要是采用二进制的存储方式，采用地址引用，解决数据交换的实时性问题；
// Transferable Objects支持的常用数据类型有ArrayBuffer和ImageBitmap；

// 操作像素
var imageData = context.createImageData(img.width, img.height);
var work = new Worker('./cal.js');
// 转化为类型数组进行传递
var int8s = new Int8Array(imageData.data);
var data = {
     data: int8s,
     width: imageData.width,
    height: imageData.height
};
// 在postMessage方法的第二个参数中指定transferList
work.postMessage(data, [data.data.buffer]);

// 经测试，使用arrayBuffer之后，传递数据所需的时间为1ms，极大地提高了数据传输的效率。