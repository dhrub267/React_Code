import { useState } from 'react';
function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1>Controlled Components</h1>
      <form>
        {/* <input type="text" placeholder="Enter your Name" onChange={(event)=>{console.log(event.target.value)}}></input><br></br><br></br>
        <input type="password" onChange={(event)=>console.log(event.target.value)} placeholder="Enter your Name"></input><br></br><br></br>
        <input type="email" onChange={(event)=>alert(event.target.value)} placeholder="Enter your Name"></input><br></br><br></br> */}

        <input type="text" placeholder="Enter your Name" onChange={(event) => { setName(event.target.value) }}></input><br></br><br></br>
        <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Enter your Name"></input><br></br><br></br>
        <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Name"></input><br></br><br></br>
      </form>
      <h1>{name}</h1>
      <h1>{password}</h1>
      <h1>{email}</h1>
    
    <button onClick={()=>{setName(""); setPassword(""); setEmail("")}}>Clear</button>

    </div>
  )
}
export default App
