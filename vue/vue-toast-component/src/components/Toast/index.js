import ToastComponent  from './index.vue';
import vue from 'vue';
// console.log(ToastComponent);
// this.$message('这是一条消息提示');
// visiable = true props
// .msg = 'xx'
// .visiable = 'true
// 返回一个构造函数
// function Person (name, age) {
//   this.name = '';
//   this.age = '';
// }
// new Person('李华',19);
// EditInPlace
// new EditInPlace()
const toastConstruct = vue.extend(ToastComponent);
function showMessage(msg, duration = 2000) {
  const instance = new toastConstruct({
    el: document.createElement('div'),
    propsData: {
      msg: msg,
      visiable: true
    }
  })
  document.body.appendChild(instance.$el);
  setTimeout(() => {
    instance.visiable = false;
  }, duration)
}

// export default ToastComponent;
export default showMessage;