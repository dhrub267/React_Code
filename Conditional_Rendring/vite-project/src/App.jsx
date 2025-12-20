// function App(){
//   const isLoggedIn=true;
//   if(isLoggedIn){
//      console.log("Welcome");
//   }
//   else {
//     return <h1>Plz login</h1>
//   }
//   return(
//     <div>
//       <h1>Conditional Rendring</h1>
//     </div>
//   )
// }
// export default App;
// ------------------------------------------

//if you dont want to write return frequently then we can store in anotehr variable also
// function App(){
//   const isLoggedIn=false;
//   let message1="Welcome";
//   let message2="plz login";
//   if(isLoggedIn){
//      return <h1>{message1}</h1>
//   }
//   else {
//     return <h1>{message2}</h1>
//   }
//   return(
//     <div>
//       <h1>Conditional Rendring</h1>
//     </div>
//   )
// }
// export default App;

//same thing we can do with ternary operator also
//if you dont want to write return frequently then we can store in anotehr variable also
// function App(){
//   const isLoggedIn=false;
//   let message1="Welcome";
//   let message2="plz login";
  // if(isLoggedIn){
  //    return <h1>{message1}</h1>
  // }
  // else {
  //   return <h1>{message2}</h1>
  // }

//   const result=isLoggedIn ? message1: message2;
//   return(
//     <div>
//       <h1>Conditional Rendring</h1>
//       <h1>{},result</h1>
//     </div>
//   )
// }
// export default App;
// --------------------------------------------------------------

// //for conditional rendring
// function App(){
//   const isLoggedIn=true;
//   return(
//     <div>
//       <h1>Conditional Rendring</h1>
//       {isLoggedIn && <h1>Welcome user!</h1>}
//     </div>
//   )
// }
// export default App;

// --------------------------------------------------

// //for conditional rendring we can also do using css
// import "./App.css";
// function App(){
//   const isLoggedIn=false;
//   isLoggedIn? "visible":"inVisible"
//   return(
//     <div>
//       {/* <h1>Conditional Rendring</h1> */}
//       <h1 className={isLoggedIn}>Conditional Rendring</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque iusto voluptates consectetur. Quae officiis nisi, tenetur exercitationem deserunt neque sit?</p>
//     </div>
//   )
// }
// export default App;

//components rendring

// import True from "./True";
// import False from "./False";
// function App(){
//   const isLoggedIn=false;
  
//   return(
//     <div>
//     {isLoggedIn? <True/>:<False/>}
//     </div>
//   )
// }
// export default App;



