self.onmessage = function(e) {
  var messages = e.data;  // e.data为{message: 'hello worker!'}
  var workerResult = {name: ziyin, age: 18};
  // do something
  // ...
  postMessage(workerResult);
}