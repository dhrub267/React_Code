// import {useState,useEffect} from 'react'

// function Components() {
//     const[count,setCount]=useState(0);
//     const callAtOnce=()=>{
//         console.log("Dhrub Kumar Thakur");
//     }
//      callAtOnce();
//   return (
//     <div>
//       <h1>use State</h1>
//       <button onClick={()=>setCount(count+1)}>click</button>
//     </div>
//   )
// }
// export default Components

// import {useState,useEffect} from 'react'
// function Components() {
//     const[count,setCount]=useState(0);
//     const callAtOnce=()=>{
//         console.log("Dhrub Kumar Thakur");
//     }
//     // callAtOnce();
//     useEffect(()=>{
//         callAtOnce()
//     },[]);// if we want to call at once
//   return (
//     <div>
//       <h1>use State</h1>
//       <button onClick={()=>setCount(count+1)}>click {count}</button>
//     </div>
//   )
// }
// export default Components


// //for specific condition

// import {useState,useEffect} from 'react'
// function Components() {
//     const[count,setCount]=useState(0);
//     const[name,setName]=useState(0);
//     const callAtOnce=()=>{
//         console.log("Dhrub Kumar Thakur");
//     }
//     useEffect(()=>{
//         callAtOnce()
//     },[count]);

//     useEffect(()=>{
//         callAtOnce()
//     },[]);
//   return (
//     <div>
//       <h1>use State</h1>
//       <button onClick={()=>setCount(count+1)}>specific {count}</button>
//       <button onClick={()=>setName(name+1)}>without specififc {name}</button>
//     </div>
//   )
// }
// export default Components

//by uing useEfeect we can do DOM Manupulation
//for specific condition

// import {useState,useEffect} from 'react'
// function Components() {
//     const[count,setCount]=useState(0);
//     const[name,setName]=useState(0);
//     const callAtOnce=()=>{
//         document.title=`count: ${count}`
//         console.log("Dhrub Kumar Thakur");
//     }
//     useEffect(()=>{
//         callAtOnce()
//     },[count]);

//     useEffect(()=>{
//         callAtOnce()
//     },[]);
//   return (
//     <div>
//       <h1>use State</h1>
//       <button onClick={()=>setCount(count+1)}>specific {count}</button>
//       <button onClick={()=>setName(name+1)}>without specififc {name}</button>
//     </div>
//   )
// }
// export default Components





import { useState, useEffect } from "react";

function Components() {

  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  // ⏱️ Runs once (specific – [])
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // ✅ cleanup
      console.log("Time is cleande at every 1 second");
    };
  }, []);

  return (
    <div>
      <h1>Timer: {seconds}</h1>

      <button onClick={() => setCount(count + 1)}>
        specific {count}
      </button>

      <button onClick={() => setName(name + 1)}>
        without specific {name}
      </button>
    </div>
  );
}

export default Components;
