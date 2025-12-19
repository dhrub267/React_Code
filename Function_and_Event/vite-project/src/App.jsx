// function App(){
//   function name(){
//     return "Dhrub Kumar Thakur";
//   }
//   return(
//     <div>
//         <h1>Noraml function can call directly like function with parameter</h1>
//         <br/>
//         <h1>Welcome!{name}</h1>
//     </div>
//   )
// }
// export default App;

//how to pass parameter

// function App(){
//   function getName(YourName){
//     return YourName;
//   }

//   const name="Dhrub Kumar Thakur";
//   const name1="Aashish Kuamr Thakur";
//   const name2="Manish Kuamr Thakur";
//   return(
//     <div>
//         <h1>How to pass parameter in noraml function</h1>
//         <br/>
//         <h1>Welcome!{getName(name)}</h1>
//         <h1>Welcome!{getName(name1)}</h1>
//         <h1>Welcome!{getName(name2)}</h1>
//     </div>
//   )
// }
// export default App;

// // in case of event we call without paranthesis bracket ()
// function App(){
//   function getName(YourName){
//     return alert("Dhrub Kumar Thakur");
//   }
//   return(
//     <div>
//         <h1>In case of Event we have to call without this braces ()</h1>
//         <button onClick={getName}>Event means Button</button>
//     </div>
//   )
// }
// export default App;
// ---------------------------------------------------------------------

// We can directly pass the function defination also
// in case of event we call without paranthesis bracket ()
// function App(){

//   return(
//     <div>
//         <h1>We can directly pass the function defination in case of arrow function</h1>
//         <button onClick={()=>{alert("Dirctly pass the function defination")}}>Event means Button</button>
//     </div>
//   )
// }
// // export default App;
// ---------------------------------------------------------------

//how to pass parameter in case of arrow function

function App(){
  const add=(a,b)=>{
    return a+b;
  }
  return(
    <div>
      <h1>How to pass paremeter in case of arrow function </h1>
      <h1>{(()=>add(5,5))()}</h1>
    </div>
  )
}
export default App;