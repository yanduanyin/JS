var myAjax = function (url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();  // new 一个XHTML 的请求   XMLHttpRequest 对象用于和服务器交换数据。
    xhr.open('GET', url); //  去使用get 方式请求这个url
    xhr.send(data); // 将请求发送到服务器。
    xhr.onreadystatechange = function () {  // 每当 readyState 改变时，就会触发 onreadystatechange 事件。
      if (xhr.status === 200 && xhr.readyState === 4) {
        var json = JSON.parse(xhr.responseText); //JSON.parse 将JSON 数据对象化、  responseText 获得字符串形式的响应数据。
        resolve(json)
      } else if (xhr.status !== 200 && xhr.readyState === 4) {  // xhr.readyState === 4  请求已完成，且响应已就绪
        reject(err)
      }
    }
  })
}