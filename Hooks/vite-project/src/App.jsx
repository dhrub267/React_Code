// function App() {
//   return (
//     <div>
//      <h1>{fruit}</h1>
//      <button onClick={Apple}>Change the fruit name</button>

//     </div>
//   );
// }

// export default App

// let fruit="Apple";
// function Apple(){
//  fruit="Banaana";
//  console.log(fruit);
// }

// by using normal funciton


// import { useState } from "react";

// function App() {
//   const [fruit, setFruit] = useState("Apple");

//   function changeFruit() {
//     setFruit("Banana");
//   }
//   return (
//     <div>
//       <h1>Use of State and Hooks</h1>
//       <h1>{fruit}</h1>
//       <button onClick={changeFruit}>Change the name of the fruit</button>
//     </div>
//   );
// }

// export default App;


// by using arrow function
import { useState } from "react";
function App(){
const [fruit,setFruit]=useState("Apple");
let ChangeFruit=()=>{
  setFruit("Banana");
}

  return(
    <div>
     <h1>Understanding state and Hooks</h1>
     <h1>{fruit}</h1>
     <button onClick={ChangeFruit}>Chage the fruit name</button>
    </div>
  )
}

export default App