// function App() {
//   const inlineStyling = {
//     color: "red",
//     textAlign: "center",
//     backgroundColor: "pink"
//   };

//   return (
//     <div>
//       <h1 style={inlineStyling}>
//         React Css styling
//       </h1>
//     </div>
//   );
// }

// export default App;


// //we can write direct also
// function App() {
//   const name="Dhrub Kumar Thakur";
//   // const inlineStyling = {
//   //   color: "red",
//   //   textAlign: "center",
//   //   backgroundColor: "pink"
//   // };

//   return (
//     <div>
//       <h1 style={ {
//     color: "red",
//     textAlign: "center",
//     backgroundColor: "pink"
//   }
// }>
//         Hello!{name}
//       </h1>
//     </div>
//   );
// }

// export default App;


// ----------------------------------------------


// //Enternal Stylesheet
// import './App.css';//we have to import to use CSS code
// function App() {
//   const name="Dhrub Kumar Thakur";
//   return (
//     <div>
//       <div className="Main">Hi {name}</div>
//     </div>
//   );
// }

// export default App;
// ----------------------------------------------

// //Enternal Stylesheet
// import './App.css';//we have to import to use CSS code
// import Color from './Color';
// function App() {
//   const name="Dhrub Kumar Thakur";
//   return (
//     <div>
//       <div className="Main">Hi {name}</div>
//       <Color/>
//     </div>
//   );
// }

// export default App;

//Enternal Stylesheet
// import './App.css';//we have to import to use CSS code
// import Color from './Color';
// import Color2 from './Color2';
// function App() {
//   const name="Dhrub Kumar Thakur";
//   return (
//     <div>
//       <Color/>
//       <Color2/>
//     </div>
//   );
// }

// export default App;

//for css module
import Color2 from "./Color2";

function App() {
  return (
    <div>
      <Color2 />
    </div>
  );
}

export default App;





