// import { useState } from 'react';
// function Skill() {
//     const [skills,setSkills]=useState([]);
//     const skillHandle=(event)=>{
//         console.log(event.target.value,event.target.checked);
//         if(event.target.checked){
//             // setSkills(event.target.value)
//              setSkills(...skills,event.target.value)
//         }
//         else setSkills(skills.filter(item)=>{item!=event.target.value})
//     }
//     return (
//         <div>
//             <h1>Check box handling</h1>
//             <h1>Making skill selection and retrevie data from check box</h1>
//             <input onClick={skillHandle} type="checkbox" id="html" value="html"></input>
//             <label for="html">HTML</label><br></br><br></br>

//             <input onClick={skillHandle} type="checkbox" id="java" value="java"></input>
//             <label onClick={skillHandle} for="java">JAVA</label><br></br><br></br>

//             <input onClick={skillHandle} type="checkbox" id="react" value="react"></input>
//             <label for="react">REACTJS</label><br></br><br></br>

//             <input onClick={skillHandle} type="checkbox" id="node" value="node"></input>
//             <label for="node">NODESJS</label><br></br><br></br>
//             <h1>{skills}</h1>
//         </div>
//     )
// }
// export default Skill;


import { useState } from 'react';

function Skill() {
    const [skills, setSkills] = useState([]);

    const skillHandle = (event) => {
        console.log(event.target.value, event.target.checked);

        if (event.target.checked) {
            setSkills([...skills, event.target.value]); // ADD value
        } 
        else {
            setSkills(skills.filter(item => item !== event.target.value)); // REMOVE value
        }
    }

    return (
        <div>
            <h1>Check box handling</h1>
            <h1>Making skill selection and retrevie data from check box</h1>

            <input onClick={skillHandle} type="checkbox" id="html" value="html" />
            <label htmlFor="html">HTML</label><br /><br />

            <input onClick={skillHandle} type="checkbox" id="java" value="java" />
            <label htmlFor="java">JAVA</label><br /><br />

            <input onClick={skillHandle} type="checkbox" id="react" value="react" />
            <label htmlFor="react">REACTJS</label><br /><br />

            <input onClick={skillHandle} type="checkbox" id="node" value="node" />
            <label htmlFor="node">NODEJS</label><br /><br />

            <h1>{skills.join(", ")}</h1>
            {/* <h1>{skills}</h1> */}
        </div>
    )
}

export default Skill;
