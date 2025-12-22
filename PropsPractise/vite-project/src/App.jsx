// function App(){
//   return(
//     <div>
//       <h1>Props</h1>
//       <Components name="Dhrub Kumar Thakur" />
//     </div>
//   )
// }
// export default App;

// function Components({ name }){
//   return(
//     <div>
//       <h1>HI! {name}</h1>
//     </div>
//   )
// }

// import Components from "./Components";
// function App(){
//   return(
//     <div>
//       <h1>Props</h1>
//       <Components name="Dhrub Kumar Thakur" />
//     </div>
//   )
// }
// export default App;

//We can transefer more data as a props also

//  function Components({ name }){
//   return(
//     <div>
//       <h1>HI! {name}</h1>
//     </div>
//   )
// }

import Components from "./Components";
function App(){
  return(
    <div>
      <h1>Props</h1>
      <h3>first time when we call</h3>
      <Components name="Dhrub Kumar Thakur" Age="22" Study="B.tech"/>
       <h3>second time when we call</h3>
      <Components name="AAshish Thakur" Age="12" Study="see"/>
       <h3>third time when we call</h3>
      <Components name="Manish Kumar Thakur" Age="22" Study="B.tech"/>
    </div>
  )
}
export default App;

