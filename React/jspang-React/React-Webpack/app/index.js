function component() {
  var element = document.createElement('div');
  element.innerHTML = ('hello yanduanyin');
  return element;
}
document.body.appendChild(component());