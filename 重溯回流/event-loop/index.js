// setTimeout(function () {
//   console.log(1111);
// }, 0)

// console.time('test')
// for(let i = 0; i < 1000000; i++ ) {
//   i == (100000 - 1)
// }
// console.timeEnd('test')

// console.log(222);


// js引擎线程
// 2. GUI线程
// 3. http网络请求线程（处理用户的get， post等请求， 等到返回结果后将回调函数推到任务队列）
// 4. 定时触发器线程（seTimeout， 等待时间结束后把执行的函数推入到任务队列）
// 5. 浏览器事件处理线程

function test1() {
  test2()
  console.log('hello, i am ziyin1'); // 3
}
function test2() {
  console.log('hello, i am ziyin2'); // 2
}
function main() {
  console.log('hello, i am main'); // 1
  setTimeout(() => {
    console.log('hello, i am setTimeout'); // 4
  }, 0)
  test1()
}

main()

// step1: main() 先执行，进入线程，进入执行栈打印 'hello, i am main'
// step2: 遇见setTimeout， 将回调函数放入任务队列，
// step3: main() 调用test1， test1进入到stack中被执行
// step4: test1执行， test2执行（test2进入stack中被执行）
// step5: 调用test2，执行打印'hello, i am ziyin2'
// step6:  console.log('hello, i am ziyin1');执行
// step7： 主线程执行完毕， 进入任务队列当中执行
// step8: 任务队列执行  setTimeout