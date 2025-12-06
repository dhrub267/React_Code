// import { useState } from "react";

// function App() {
//   const [gender,setGender]=useState();
//   const [city,setCity]=useState();
//   return (
//     <div>
//       <h1>Handling the Radio Button</h1>
//       <h1>Select Gender</h1>
//       <input type="radio" onChange={(event)=>{setGender(event.target.value)}} id="male" value="male" name="gender"/>
//       <label htmlFor="male">Male</label>

//       <input type="radio" onChange={(event)=>{setGender(event.target.value)}} id="female" value="female" name="gender"/>
//       <label htmlFor="female">Female</label>
//       <h1>Selected Gender:{gender}</h1>
//       <br/>
//       <br/>

//       <h1>Selected City</h1>
//       <select default value={"Delhi"} onClick={(event)=>{setCity(event.target.value)}}>
//         <option value="noida" >Noida</option>
//         <option value="delhi">Delhi</option>
//         <option value="kathmandu">Kathmandu</option>
//       </select>
//       <h1>Selected city:{city}</h1>
//     </div>
//   )
// }
// export default App;






import { useState } from "react";

function App() {
  const [gender, setGender] = useState();
  const [city, setCity] = useState("Delhi"); // default value set kar di

  return (
    <div>
      <h1>Handling the Radio Button</h1>
      <h1>Select Gender</h1>

      <input type="radio" onChange={(event)=>{setGender(event.target.value)}} id="male" value="male" name="gender"/>
      <label htmlFor="male">Male</label>

      <input type="radio" onChange={(event)=>{setGender(event.target.value)}} id="female" value="female" name="gender"/>
      <label htmlFor="female">Female</label>

      <h1>Selected Gender: {gender}</h1>
      <br/><br/>

      <h1>Select City</h1>
      <select defaultValue="Delhi" onChange={(event)=>{setCity(event.target.value)}}>
        <option value="noida">Noida</option>
        <option value="delhi">Delhi</option>
        <option value="kathmandu">Kathmandu</option>
      </select>

      <h1>Selected City: {city}</h1>
    </div>
  )
}
export default App;
