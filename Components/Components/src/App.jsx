function App() {
  return (
    <div>
      <h1>This is Root components</h1>
      <h1>From here we can we use other components</h1>
      <Fruits></Fruits>
      <Animals/>
    </div>

  );
}
export default App;

function Fruits(){

  return(
  <div>
  <h1>Apple </h1>
  <h1>Mango </h1>
  <h1>Banana </h1>
  </div>
  );
}


function Animals(){

  return(
  <div>
  <h1>Cow</h1>
  <h1>Buffaloo</h1>
  <h1>Ox</h1>
  </div>
  );
}