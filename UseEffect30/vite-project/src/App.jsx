// import { useState,useEffect } from "react";

// function App(){
//   const callOnce=()=>{
//     console.log("call once")
//   }
//   // callOnce();//to handle this call we make useEffect and call form there

//   const [count,setCount]=useState(0);
//   const [data,setData]=useState(0);

//   useEffect(()=>{
//      callOnce();
//   },[]);
//   return(
// <div>
//   <h1>It is working </h1>
//   <h1>Count:{count}</h1>
//    <h1>Data:{data}</h1>
//   <button onClick={()=>{setCount(count+1)}}>Update1</button>
//   <button onClick={()=>{setData(data+1)}}>Update 2</button>
// </div>
//   );
// }
// export default App;


import { useState,useEffect} from "react";

function App(){
  const callOnce=()=>{
    console.log("call once")
  }
  // callOnce();//to handle this call we make useEffect and call form there

  const [count,setCount]=useState(0);
  const [data,setData]=useState(0);

  useEffect(()=>{
    // if you want to call count is updated
    //  callOnce();
    haddleCount();
  },[count]);

  function haddleCount(){
    console.log("Counter is called",count);
  }

  return(
<div>
  <h1>It is working </h1>
  <h1>Count:{count}</h1>
   <h1>Data:{data}</h1>
  <button onClick={()=>{setCount(count+1)}}>Update1</button>
  <button onClick={()=>{setData(data+1)}}>Update 2</button>
</div>
  );
}
export default App;