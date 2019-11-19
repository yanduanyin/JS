(function () {
  var o = {a: 1}
  Object.defineProperty(o, 'b', {
    get: function() {
      return this.a
    },
    set: function(val) {
      this.a = val
    },
    configurable: true
  })
  console.log(o.b);
  o.b = 2
  console.log(o.b);
  
})()