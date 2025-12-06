// function App() {

//   const studentsData=[
//     {
//       id:1,
//       Name:"Dhrub Kumar Thakur",
//       Age:22,
//       Branch:"cse"

//     },

//      {
//       id:1,
//       Name:"Dhrub Kumar Thakur",
//       Age:22,
//       Branch:"cse"

//     },

//      {
//       id:2,
//       Name:"Aashish Thakur",
//       Age:222,
//       Branch:"mechanical"

//     },

//      {
//       id:3,
//       Name:"Rajesh Thakur",
//       Age:22,
//       Branch:"cse"

//     },
//   ]

//   return (
//     <div>
//     <h1>Reuse components in loop</h1>
//     <table border="1">
//     <thead>
//       <tbody>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Branch</th>
//         </tr>
    
//     {
//       studentsData.map((user)=>(
//         // <h3>Dhrub Kumar Thaur</h3>
//         <tr>
//           <td>{user.id}</td>
//           <td>{user.Name}</td>
//           <td>{user.Age}</td>
//           <td>{user.Branch}</td>
//         </tr>


//       ))
//     }
//     </tbody>
//     </thead>
//     </table>
//     </div>
//   )
// }
// export default App;

//using componets

import User from "./User";
function App(){
  const studentsData=[
    {
      id:1,
      Name:"Dhrub Kumar Thakur",
      Age:22,
      Branch:"cse"

    },

     {
      id:1,
      Name:"Dhrub Kumar Thakur",
      Age:22,
      Branch:"cse"

    },

     {
      id:2,
      Name:"Aashish Thakur",
      Age:222,
      Branch:"mechanical"

    },

     {
      id:3,
      Name:"Rajesh Thakur",
      Age:22,
      Branch:"cse"

    },
  ]
  return(
    <div>
      {
        studentsData.map((user)=>(
          <div key={user.id}>
          <User data={user}/>
          </div>

        ))
      }
    </div>
  )
}
export default App;