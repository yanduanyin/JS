// 普世  
const curry = require('./b.js');
function checkByRegExp(reg, string) {
    return reg.test(string);
}

let checkCellphone = curry(checkByRegExp)('/^1[3-9]\d{9}$/');
let checkEmail = curry(checkByRegExp)('/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/');
console.log(checkCellphone('13579870431'))
console.log(checkEmail('1097720997@qq.com'))

