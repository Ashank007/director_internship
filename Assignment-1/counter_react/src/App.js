import './App.css';
import { useState } from 'react';
function App() {
  const [clicked,setclicked] = useState(0);
  const onclickhandler = function(){
    setclicked((clicked+1));
  }
  return (
    <div className="App">
      <p>
          Welcome to React!
          <br />
          Click on the button below to count the number of times it's been clicked.
        </p>
        <button className="btn" onClick={onclickhandler}>Click Me!</button>
        <h2 id="click">I am Clicked {clicked} Times </h2>
    </div>
  );
}

export default App;
