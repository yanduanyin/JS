//一个字符
// let phoneReg = /^1[3-9][0-9]{9}$/;//正则表达式 以^开头，以$结尾,以括号()分组匹配,
// console.log(phoneReg.test("15888888888"));
let phoneReg = /(1[3-9][0-9])[0-9]{8}/;
let str = "我的号码是138888888888，收下吧";
// 得到手机号，判断服务商
console.log(str.match(phoneReg)[1]);
// 754211506@qq.com  邮箱服务商
let emailReg = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;//+表示匹配一次或者多次
console.log(emailReg.test('1097720997@qq.com'));