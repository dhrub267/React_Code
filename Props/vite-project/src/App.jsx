<<<<<<< HEAD
// // import {useState} from 'react';
// import User from './User';
// function App() {
//   return (
//     <div>
//     <User></User>
//     </div>
//   );
// }
// export default App;

import Other from './Othrer';
import User from './User';
function App(){
  let userDetail={
    name:"Dhrub Kumar Thakur",
    age:22,
    study:"b.tech"

  }
//array
  let collegeName=['ACET',"ACOE",'Aditya University']; 
  return(
      <div>
        <User name="Dhrub Kumar Thakur" userDetail={userDetail} collegeName={collegeName}/>
        <Other></Other>
      </div>
  );
}
export default App;
=======
import User from "./User";
function App() {
  // let name="Dhrub Kumar Thaur";
  // let age="20";
  // let study="btech";

  const userDetails = {
    name: "Dhrub Kumar Thaur",
    age: "20",
    study: "btech"
  };

  return (
    <div>
      <h1>Sharing components using props</h1>
      <User Details={userDetails} />
    </div>
  )
}

export default App;
>>>>>>> d2861d1425ed8ac9d453dfe0017235aabe593de8
