// import {useState} from 'react';
// function User(){
//     const [count,setCount]=useState(0);

//     // const countHandler=()=>{
//     //     setCount(count+1);
//     // }
//     return(
//       <div>
//         <h1>Props</h1>
//         <h1>Count{count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>click Here</button>
//       </div>
//     );
// }

// export default User;



function User({name,userDetail,collegeName}){
    return(
      <div>
       <h1>User Componetnts</h1>
       <h1>{name}</h1>
       <h1>{userDetail.name}</h1>
       <h1>{userDetail.age}</h1>
       <h1>{userDetail.study}</h1>
{/* 
       for accessing the array components */}
       <h1>Array components</h1>
       <h1>{collegeName[0]}</h1>;
       <h1>{collegeName[1]}</h1>;
       <h1>{collegeName[2]}</h1>;
      </div>
    );
}

export default User;