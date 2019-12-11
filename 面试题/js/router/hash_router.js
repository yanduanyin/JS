// hash 路由
class Routers {
  constructor() {
    // 路由存储对象
    this.routes = {};
    // 当前的hash
    this.currentUrl = '';
    //更新路由
    this.refresh = this.refresh.bind(this);
    // 监听
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('hashchange', this.refresh, false);
  }
  // 存储
  route(path, callback) {
    this.routes[path] = callback || function() {};
  }
  // 更新路由
  refresh() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
  }
}

window.Router = new Routers();
var content = document.querySelector('body');
// change Page anything
function changeBgColor(color) {
  content.style.backgroundColor = color;
}
Router.route('/', function() {
  changeBgColor('yellow');
});
Router.route('/blue', function() {
  changeBgColor('blue');
});
Router.route('/green', function() {
  changeBgColor('green');
});