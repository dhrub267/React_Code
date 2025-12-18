import Color from "./Color";
import File1 from './File1';
import File2 from './File2';
function App(){
  return(
    <div>
      <h1>It is working</h1>
      < Components1/>
      < Components2></Components2>
      <File1/>
       <File2/>
       <Color/>
    </div>
  )
}
export default App;

function Components1(){
  return(
    <div>
      <h1>From componets 1</h1>
    </div>
  )
}

function Components2(){
  return(
    <div>
      <h1>From components 2</h1>
    </div>
  )
}

