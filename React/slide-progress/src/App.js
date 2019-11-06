import React from 'react';
import './App.css';
import SlideProgress from './slideProgress'


function App() {
  return (
    <div className="App">
      <SlideProgress value={.5} 
      onChange={(p) => {
        console.log('p', p)
      }}/>
    </div>
  );
}

export default App;
