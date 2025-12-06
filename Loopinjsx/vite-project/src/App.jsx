// function App() {
//   //here in this part we can use normal loop like for,while loop etc

//   //if we have multiple data and that data having multiple features then we can make
//   //array of object(object inside the array)
//   //making array of object

//   const studentData = [
//     {
//       Name: "Dhrub Kumar Thakur",
//       age: 22,
//       Branch: "Cse"
//     },

//     {
//       Name: 'Anish Yadav',
//       age: 23,
//       Branch: "civil"
//     },

//     {
//       Name: "Raj shah",
//       age: 22,
//       Branch: "Aiml"
//     },

//     {
//       Name: "Rupam Singh",
//       age: 22,
//       Branch: "Cse"
//     }
//   ]

//   return (
//     <div>
//       <h1>Loop in JSX</h1>
//       {/* here we cannot use normal loop 
//       her we can use Map Function */}
//       {/* how to display above data or dummy data */}
//       <h3>This is dummy data and it is known as static data </h3>
//       <h3>it takes many time and it is not possible if lagge data is there  </h3>
//       <h1>now by using array of object method to do same work </h1>
//       <table border="1">
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Branch</th>
//         </tr>

//         <tr>
//           <td>Name</td>
//           <td>Age</td>
//           <td>Branch</td>
//         </tr>

//         <tr>
//           <td>Name</td>
//           <td>Age</td>
//           <td>Branch</td>
//         </tr>

//         <tr>
//           <td>Name</td>
//           <td>Age</td>
//           <td>Branch</td>
//         </tr>
//       </table>

//       {/* using loop i.e array of object */}

//       <table  border="1">
//         <tbody>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Branch</th>
//           </tr>

//        {
//         studentData.map((user)=>{
          
//         <tr key={user.Id}>
//           <td>user.Name</td>
//           <td>user.Age</td>
//           <td>user.Branch</td>
//         </tr>

//         })
//        }


//         </tbody>
//       </table>
//     </div>
//   )
// }
// export default App;


function App() {

  //==================== Dummy Data - 1 (Normal Static Data) ====================
  //yaha hum direct table ma likh rahe hai (bada data ho to muskil hota hai likhna)
  const studentData = [
    {
      Name: "Dhrub Kumar Thakur",
      age: 22,
      Branch: "Cse"
    },

    {
      Name: "Anish Yadav",
      age: 23,
      Branch: "Civil"
    },

    {
      Name: "Raj Shah",
      age: 22,
      Branch: "Aiml"
    },

    {
      Name: "Rupam Singh",
      age: 22,
      Branch: "Cse"
    }
  ];


  //==================== Dummy Data - 2 (For Map Function Example) =====================
  //agar hamare pass bohot sara data ho to ham map use karege loop ki tarah
  //ye array of object hai jisme multiple student ka data hai

  const studentList = [
    { Name: "Amit Kumar", age: 21, Branch: "ECE" },
    { Name: "Suman Raj", age: 22, Branch: "EEE" },
    { Name: "Priya Sharma", age: 23, Branch: "IT" },
    { Name: "Pawan Patel", age: 22, Branch: "Mechanical" }
  ];


  return (
    <div>
      <h1>Loop in JSX</h1>
      <h3>👇 Ye static data hai (bada data ho to likhna mushkil)</h3>
      
      {/* ==================== Static Table Without Map ==================== */}
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Branch</th>
        </tr>

        <tr>
          <td>{studentData[0].Name}</td>
          <td>{studentData[0].age}</td>
          <td>{studentData[0].Branch}</td>
        </tr>

        <tr>
          <td>{studentData[1].Name}</td>
          <td>{studentData[1].age}</td>
          <td>{studentData[1].Branch}</td>
        </tr>

        <tr>
          <td>{studentData[2].Name}</td>
          <td>{studentData[2].age}</td>
          <td>{studentData[2].Branch}</td>
        </tr>

        <tr>
          <td>{studentData[3].Name}</td>
          <td>{studentData[3].age}</td>
          <td>{studentData[3].Branch}</td>
        </tr>
      </table>



      <h1>👇 Now Using Map Function (Easy and Smart Method)</h1>

      {/* ==================== Table Using Map Function ==================== */}
      <table border="1">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Branch</th>
          </tr>

          {/* yaha loop ki tarah map use ho raha hai */}
          {
            studentList.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.age}</td>
                <td>{user.Branch}</td>
              </tr>
            ))
          }

        </tbody>
      </table>

    </div>
  )
}

export default App;
