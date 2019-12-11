class myPromise {
  constructor(fn) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    let resolve = value => {
      if (this.state === 'pending') {
        this.value = value
        this.state = 'fulfilled'
      }
    }
    let reject = reason => {
      if (this.state === 'pending') {
        this.reason = reason
        this.state = 'Rejected'
      }
    }
    try {
      fn (resolve, reject)
    } catch(error) {
      reject(error)
    }
  }
  then (onresolve, onreject) {
    var self = this
    switch(this.state) {
      case 'fulfilled': 
        onresolve(self.value)
        break;
      case 'Rejected': 
        onreject(self.reason)
        break;
      default:    
    }
  }
}
