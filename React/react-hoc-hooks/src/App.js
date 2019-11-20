import React, {useState} from 'react';
import logo from './logo.svg';
import Drag1 from './Drag1.jsx';
import './App.css';
import withDragAble from './withDragAble';
import useDrag from './useDragable';

// hooks
// react15 function 组件没有 state this 没有生命周期
// 只负责 单纯接受 props渲染

// react 16
// hooks 作用： 组件之间逻辑复用，  相比hoc 解决的那些问题
// 让 逻辑 扁平化了
// Promise -> async
function Header() {
  return (
    <h2>
      h22
    </h2>
  )
}
function Footer() {
  const [ count, setCount ] = useState(0); 
  const { style, handleDown } = useDrag();
  // state={ 0 }
  return (
    <div style={style} onMouseDown={handleDown} className="drag">
      foot: {count}
      <button onClick={() => {
        let count1 = count + 1
        setCount(count1)
      }}>+</button>
    </div>
  )
}
const DragH2 = withDragAble(Header);
function App() {
  return (
    <>
      <Drag1 />
      <DragH2 />
      <Footer />
    </>
  );
}

export default App;
