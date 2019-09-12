// <!-- promise  处理es5 回调地狱1. 洗菜做饭  2. 坐下来吃饭  3. 收拾吃饭的桌子 -->
let state = 1;
function step1(resolve, reject) {
    console.log('1. 洗菜做饭 ')
    if(state === 1) {
        resolve('洗菜做饭完成')
    }else {
        reject('洗菜做饭失败，err!')
    }
}
function step2(resolve, reject) {
    console.log('2. 坐下来吃饭 ')
    if(state === 1) {
        resolve('坐下来吃饭完成')
    }else {
        reject('坐下来吃饭完成失败，err!')
    }
}
function step3(resolve, reject) {
    console.log('3. 收拾吃饭的桌子 ')
    // state = 0
    if(state === 1) {
        resolve('收拾吃饭的桌子完成')
    }else {
        reject('收拾吃饭的桌子失败，err!')
    }
}
new Promise(step1).then(function(val) {
    console.log(val)
    return new Promise(step2)
}).then(function(val) {
    console.log(val)
    return new Promise(step3)
}).then(function(val) {
    console.log(val)
})