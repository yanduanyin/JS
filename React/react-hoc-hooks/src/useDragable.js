import React, {useState} from 'react';
// hooks
// 自定义 hooks 方法名 以 use 开头
function useDragable() {
  let [left, setLeft] = useState(0);
  let [top, setTop] = useState(0);
  // let startx = 0, starty = 0;
  const handleMouseMove = function (e) {
    let left = e.clientX;
    let top = e.clientY;
    setLeft(left); // left.value
    setTop(top); // top.value
  }
  const handleMouseup = function () {
    document.removeEventListener('mousemove', handleMouseMove)
  }
  const handleDown = function () {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseup)
  }
  return {
    style: {
      left,
      top
    },
    handleDown
  }
}
export default useDragable;