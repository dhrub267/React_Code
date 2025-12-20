// function App(){
//   const fruits=['Apple','Manngo','Banana','Grapes','Pomogranate'];
//   return(
//     <div>
//         <h1>Array and Object</h1>
//         <h1>{fruits[0]}</h1>
//         <h1>{fruits[1]}</h1>
//         <h1>{fruits[2]}</h1>
//         <h1>{fruits[3]}</h1>
//     </div>
//   )
// }
// export default App;

// //but how to itterate it
// function App(){
//   const fruits=['Apple','Manngo','Banana','Grapes','Pomogranate'];
//   return(
//     <div>
//         <h1>Array and Object</h1>
//         <h1>How to itterate it</h1>
//         {/* <h1>{fruits[0]}</h1>
//         <h1>{fruits[1]}</h1>
//         <h1>{fruits[2]}</h1>
//         <h1>{fruits[3]}</h1> */}
//         {
//           fruits.map((element,index)=>(
//             <h1>Element {element},Index {index}</h1>
//           ))
//         }

//     </div>
//   )
// }
// export default App;

//but how to itterate it
// ----------------------------------

//Object
// function App(){
//   const myDetail={
//         Name : "Dhrub Kumar Thakur",
//         Roll : 16,
//         Study:"B.tech"
//       }
//   return(
//     <div>
//       <h1>Object</h1>
//       <h1>Name:{myDetail.Name}</h1>
//        <h1>Roll:{myDetail.Roll}</h1>
//         <h1>Study:{myDetail.Study}</h1>  
//     </div>
//   )
// }

// export default App;
// ---------------------------------------------------------

//Array of object(object under arrray)

function App(){
  const userDetail=[
    {
        Name : "Dhrub Kumar Thakur",
        Age : 24,
        Study:"B.tech"
      },
      {
        Name : "AAshish Kumar Thakur",
        Age :16,
        Study:"B.tech"
      },
      {
        Name : "Rupan Kumar Thakur",
        Age : 20,
        Study:"B.tech"
      },
      {
        Name : "Manish Kumar Thakur",
        Age : 16,
        Study:"B.tech"
      }
    ]
  return(
    <div>
      <h1>Array of Object</h1>
      <ul>
        {userDetail.map((element,index)=>(
          // <li key={index}>{element.Name} is years {element.Age} old and study at {element.Study} </li>
          <li key={index}>{element.Name} is at {index} </li>
        ))}
      </ul> 
    </div>
  )
}
export default App;
