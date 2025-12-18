
// function Color2() {
//   return (
//     <div>
//       <h1 className="Main">I am from Color2.jsx file and in Color2.jsx we not apply any Css styling</h1>
//       <h1 className="Main">Althogh css styling work in content in the Color2.jsx </h1>
//       <h1 className="Main"><strong>Without importing in App.js or main file</strong></h1>
//     </div>
//   );
// }

// export default Color2;

// for css module
import styles from "./Color2.module.css";

function Color2() {
  return (
    <div>
      <h1 className={styles.main}>Color2 Main</h1>
    </div>
  );
}

export default Color2;
