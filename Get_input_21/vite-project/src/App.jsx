import {useState} from 'react';
function App() {
  const[val,setVal]=useState("Dhrub Kumar Thakur");
  return (
    <div>
      <h1>Get Input field Value</h1>
      {/* <input type="text" onChange={(event)=>{alert(event.target.value)}} placeholder="Enter your name"></input>
      <input type="text" onChange={(event)=>{console.log(event.target.value)}} placeholder="Enter your name"></input> */}
      <input type="text" value={val} onChange={(event)=>{setVal(event.target.value)}} placeholder="Enter your name"></input>
      <h1>{val}</h1> 
      <button onClick={()=>{setVal("")}}>Clear value</button>  
    </div>

  )
}

export default App
