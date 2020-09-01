import React, { useState, useEffect } from "react";
import "./App.css";


const randomColor = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

function useDocumentBg(){
  useEffect(() =>{
    function hanldeBGColor(){
        document.body.style.background = randomColor();
    }
    hanldeBGColor();
    window.addEventListener('mousedown', hanldeBGColor);
  });
}

function useCount(){
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => (c > 0 ? c - 1 : c));
  }

  return{
    count, increment, decrement
  }
}

function App() {

  useDocumentBg();

  
 

  const {count, increment, decrement} = useCount();

  return (
    <div>
      Count: {count}
      <br />
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
