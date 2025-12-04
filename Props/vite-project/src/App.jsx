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