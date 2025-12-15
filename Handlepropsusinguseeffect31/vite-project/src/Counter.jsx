// import { useEffect } from "react";

// function Counter({counter}){
//     function counterHandling(){
//         console.log("Counter is called",counter);
//     }

//     // counterHandling(); for handling this we are using useEffect
//     useEffect(()=>{
//       counterHandling();  
//     })
//     return(
//         <div>
//             <h1>Handling props using useEffect</h1>
//             <h1>{counter}</h1>
//         </div>
//     )
// }
// export default Counter;


//we can use more than one useEffect according to our needs

import { useEffect } from "react";

function Counter({ counter, data }) {

  function counterHandling() {
    console.log("Counter changed:", counter);
  }

  function dataHandling() {
    console.log("Data changed:", data);
  }

  function bothHandling() {
    console.log("Counter & Data both changed");
  }

  // 🔹 Counter change
  useEffect(() => {
    counterHandling();
  }, [counter]);

  // 🔹 Data change
  useEffect(() => {
    dataHandling();
  }, [data]);

  // 🔹 Both change
  useEffect(() => {
    bothHandling();
  }, [counter, data]);

  return (
    <div>
      <h1>Multiple condition handling</h1>
      <h2>Counter: {counter}</h2>
      <h2>Data: {data}</h2>
    </div>
  );
}

export default Counter;
