// import { useState } from "react";

// function App() {
//   const [fruit, setFruit] = useState("Banana");

//   const handleChangeFruit = () => {
//     setFruit("Apple");
//   };

//   return (
//     <div>
//       <h1>{fruit}</h1>
//       <button onClick={handleChangeFruit}>Change Fruit</button>
//     </div>
//   );
// }

// export default App;

//program for Toggling and hiding 
import {useState} from 'react';
import User from './User';
function App() {
const [display, setDisplay]=useState(true);

  return (
    <div>
      <h1>Toggling and Hiding</h1>
      <button onClick={()=>{setDisplay(!display)}}>Toggle</button>
      {
        display?<h1>Dhrub Kumar Thakur</h1>:null
      }
      <User/>
    </div>
  );
}

export default App;
