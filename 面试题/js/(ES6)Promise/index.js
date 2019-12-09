// <!-- new Promise(请求1)
//     .then(请求2(请求结果1))
//     .then(请求3(请求结果2))
//     .then(请求4(请求结果3))
//     .then(请求5(请求结果4))
//     .catch(处理异常(异常信息)) -->

// Promise 的常用 API 如下：
                          // 1. Promise.resolve(value)

                          // 2. Promise.reject

                          // 3. Promise.race
                          //   类方法，多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。 。

                          // 4. Promise.all
                          //   类方法，多个 Promise 任务同时执行。
                          //   如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。 
                          //   如果有一个 Promise 任务 rejected，则只返回 rejected 任务的结果。
// Promise 对象存在以下三种状态：

// 定义Promise的三种状态常量
//  Pending(进行中)
// Fulfilled(已成功)
// Rejected(已失败)

// 1.v1.0 初始版本myPromise
// （3）"value"是promise状态成功时的值
// "reason"是promise状态失败时的值
function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    function resolve(value){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
       }
    }
    function reject(reason){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}
// 同时，需要在myPromise的原型上定义链式调用的then方法：
// Promise 对象的 then 方法接受两个参数：// promise.then(onFulfilled, onRejected)
myPromise.prototype.then=function(onFullfilled,onRejected){
   let self=this;
   switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:       
   }
}
// 上述就是一个初始版本的myPromise，在myPromise里发生状态改变，然后在相应的then方法里面根据不同的状态可以执行不同的操作

