
// function User({Details}){
//     return(
//         <div>
//         <h1>Name:{Details.name}</h1>
//          <h1>Age:{Details.age}</h1>
//           <h1>Study:{Details.study}</h1>
//         </div>
//     )
// }
// export default User


// User.jsx
function User({ Details }) {
  return (
    <div>
      <h1>Name: {Details.name}</h1>
      <h1>Age: {Details.age}</h1>
      <h1>Study: {Details.study}</h1>
    </div>
  )
}

export default User;
