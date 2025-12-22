// function Components({ name }){
//   return(
//     <div>
//       <h1>HI! {name}</h1>
//     </div>
//   )
// }
// export default Components;

// function Components({name,Age,Study}) {
//     return (
//         <div>
//             <h1>Name:{name}</h1>
//             <h1>Age:{Age}</h1>
//             <h1>Stydy:{Study}</h1>
//         </div>
//     )
// }
// export default Components;

//using props

function Components(props) {
    return (
        <div>
            <h1>Name:{props.name}</h1>
            <h1>Age:{props.Age}</h1>
            <h1>Stydy:{props.Study}</h1>
        </div>
    )
}
export default Components;