// a
let a = 123;
(function() {
  function Waterfall(option) {
    this.container = option.container;
    this.number = option.number   // 一次性 渲染多少张图片
    this.width = document.body.clientWidth;  // 获取屏幕可视宽度
    this.init();
  }
  Waterfall.prototype.init = function () {
    const imgList = document.getElementsByTagName('img');
    const perNum = this.getPerNum();
    let heights = [];
    for (let i = 0; i < perNum; i++) {
      heights.push(imgList[i].offsetHeight)
    }
    let minIndex = this.getMinIndex(heights)
    // float  
    // position
    for (let i = perNum; i < imgList.length; i++) {
      imgList[i].style.position = 'absolute';
      imgList[i].style.left = `${imgList[minIndex].offsetLeft}px`;
      imgList[i].style.top = `${heights[minIndex]}px`;
      // 更新高度
      heights[minIndex] = heights[minIndex] + imgList[i].offsetHeight;
      minIndex = this.getMinIndex(heights);
    }
    this.heights = heights;
  }
  Waterfall.prototype.append = function (frag) {
    const $waterfall = document.getElementById(this.container);
    $waterfall.appendChild(frag)
    const imgList = document.getElementsByTagName('img');
    const imgFromFrag = Array.prototype.slice.call(imgList, -20);

    let heights = this.heights;
    let  minIndex = this.getMinIndex(heights)
    for (let i = 0; i < 20; i++) {
      imgFromFrag[i].style.position = 'absolute';
      imgFromFrag[i].style.left = `${imgFromFrag[minIndex].offsetLeft}px`;
      imgFromFrag[i].style.top = `${heights[minIndex]}px`;
      // 更新高度
      heights[minIndex] = heights[minIndex] + imgFromFrag[i].offsetHeight;
      minIndex = this.getMinIndex(heights);
    }
  }
  Waterfall.prototype.getPerNum = function () {
    const imgList = document.getElementsByTagName('img');
    const singleWidth = imgList[0].offsetWidth;
    return Math.floor(this.width/singleWidth);
  }
  Waterfall.prototype.getMinIndex = function (heights) {
    const min = Math.min(...heights);
    return heights.findIndex(e => e === min);
  }
  window.Waterfall = Waterfall
})()
console.log(Waterfall)

// b
var b = 456;