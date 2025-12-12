// import { useState } from "react";

// function App(){
//   const [count,setCount]=useState(0);
//   const [name,setName]=useState("1")
//   return(
//     <div>
//     <h1>How to Handle mutltiple conditon in react</h1>
//     {
//       count==0?<h1>i will work when conditon is o only</h1>:null
//     }

//      {
//       name==1?<h1>Dhrub Kuamr Thakur</h1>:null
//     }
//     </div>
//   )
// }
// export default App;

//we can  directly use  if(conditon ),else if(conditon) only in Jsx part
//but we cannnot use in jsx return part

// import { useState } from "react";
// function App(){
//   const [count,setCount]=useState(0);
//   const [name,setName]=useState("1")

//   let message1 = null;
//   let message2 = null;

//   if(count == 0){
//     message1 = <h1>i will work when condition is 0 only</h1>;
//   }

//   if(name == "1"){
//     message2 = <h1>Dhrub Kumar Thakur</h1>
//   }

//   return(
//     <div>
//       <h1>How to Handle multiple condition in react</h1>
//       {message1}
//       {message2}
//     </div>
//   )
// }
// export default App;

import { useState } from "react";

function App(){
  const [count,setCount] = useState(0);

  return(
    <div>
      <h1>How to Handle multiple condition in React</h1>
      <h1>count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Click here</button>

      {
        count == 0 ? <h1>Condition 1</h1> :
        count == 1 ? <h1>Condition 2</h1> :
        count == 2 ? <h1>Condition 3</h1> :
        count == 3 ? <h1>Condition 4</h1> :
        count == 4 ? <h1>Condition 5</h1> :
        count == 5 ? <h1>Condition 6</h1> :<h1>No More Condition</h1> // Default case
        
      }
    </div>
  );
}

export default App;
