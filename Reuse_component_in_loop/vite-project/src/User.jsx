function User({data}){

    //yaha direct {data.Name} se access kar rahe hai object ke value ko
    return(
        <div style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
            <h1>{data.Name}</h1>
              <h1>{data.id}</h1>
            <h3>Age: {data.Age}</h3>
            <h3>Branch: {data.Branch}</h3>
        </div>
    )
}

export default User;
