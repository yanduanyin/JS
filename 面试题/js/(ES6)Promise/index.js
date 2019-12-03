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

// Pending(进行中)

// Fulfilled(已成功)

// Rejected(已失败)


// 定义Promise的三种状态常量
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }
    this._status = PENDING   // 添加状态
    this.value = undefined // 添加状态

    // 执行handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this))
    } catch (err) {
      this._reject(err)
    }
  }
  // 添加resovle时执行的函数
  _resolve (val) {
    if (this._status !== PENDING) return
    this._status = FULFILLED
    this._value = val
  }
  // 添加reject时执行的函数
  _reject (err) {
    if (this._status !== PENDING) return
    this._status = REJECTED
    this._value = err
  }
  // Promise 对象的 then 方法接受两个参数：
  // promise.then(onFulfilled, onRejected)
  

}
