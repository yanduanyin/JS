function Light() {
    this.state = 'off'; //状态
    this.button = null;
    this.init();
}
Light.prototype.init = function() {
    var button = document.createElement('button');
    button.innerHTML = '关';
    this.button = document.body.appendChild(button);
        this.button.onclick = () => {
            this.buttonPressed();
        }
        // this.buttonPressed()
}
Light.prototype.buttonPressed = function() {
    if(this.state == 'off') {
        console.log('开灯');
        this.state = 'on';
        this.button.innerHTML = '开';
    }else {
        console.log('关灯');
        this.state = 'off';
        this.button.innerHTML = '关';
    }
}