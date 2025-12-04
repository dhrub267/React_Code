function App() {
  var Name = "Dhrub Kumar Thakur";
  let x = 5;
  let y = 10;

  function Sum(a,b){
    return a+b;
  }

  function Operation(x,y,op){
    if(op=="+"){
      return x+y;
    }
    else if(op=="-"){
      return x-y;
    }
    else return x*y;
  }

  let UserDetail={
    Name:"Dhrub Kumar Thakur",
    age:22,
    study:"B.tech"
  }
  return (
    <div>
      <h1>JSX means use of carle bracket</h1>
      <h1>My name is {Name}</h1>
      //variable
      <h1>The value of x and y is {x} , {y}</h1>
      <h1>Sum of x and y={x + y}</h1>
      <button onClick={() => alert("Hi am Dhrub Kumar Thakur")}>click here</button>
      <a href="https://www.geeksforgeeks.org/batch/dsa
-to-development-java-live-12/track/frontend-basic-html/v
ideo/MTU2MTY%3D"> clik here</a>  //absolute url


      <a href="hyperlink.html">About</a>
      <a href="hyperlink2.html">History</a><br></br>
      {Sum(40,60)}
      <h1> {Sum(40,60)}</h1><br></br>
      <h1>From operation {Operation(5,5,"+")}</h1>
      <h1>From operation {Operation(5,5,"-")}</h1>
      <h1>From operation {Operation(5,5,"")}</h1><br></br>
      <h1>{Name?Name:"is not found"}</h1><br></br>
      <h1>UserAge{UserDetail.age}</h1>
      {/* <input type="text">value={Name}</input> */} 
      <input type="text" value={Name} />

    </div>
  );
}

export default App;