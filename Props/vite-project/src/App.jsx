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
