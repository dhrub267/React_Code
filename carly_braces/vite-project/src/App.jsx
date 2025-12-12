function App() {
  const add=(a, b)=> {
    return a + b;
  }

  const Fruit=(Name)=> {
    alert(Name);
  }

  
  return (
    <div>
      <h1>How to use components</h1>
      <h1>{(() =>add(5,5))()}</h1>
      {/* <h1>{(() => Fruit("Mango"))()}</h1> */}
      <button onClick={() => Fruit("Mango")}>Click me</button>
      <button onClick={() => console.log(add(25, 25))}>Click me</button>

    </div>
  );
}

export default App;
