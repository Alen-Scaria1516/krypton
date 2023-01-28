import React, { useState } from 'react'
import { Assignment } from './Assignment';
import Button from './Button'
import { Para } from './Para';




export const AssignmentList = () => {
    const [text,setText] = useState("");
    const [deadline,setDeadline] = useState("");


    const [assignments, setAssignments] = useState([{
        title: "DAA Assignment",
        deadline:"2023/01/31",
    },
    {
        title: "DSA Assignment",
        deadline:"2023/02/22",
    },
    {
        title: "COA Assignment",
        deadline:"2023/02/21",
    }]);
    const Added=(props)=>{
        (props.title && props.deadline)
            ? setAssignments([...assignments,props])
            : alert("Empty Field Invalid!");

    }
    const Done = (key) => {
        setAssignments(assignments.filter(assignment => assignments.indexOf(assignment) !== key))
    }
  
    return (
    <div>
        <form className='form' onSubmit={(event) => event.preventDefault()}>
            <input type="text"  className='text-input' placeholder='Type your assignment' onChange={
                (e)=>setText(e.target.value)

                }/>
            <input type="text"  className='date-input' placeholder='YYYY/MM/DD' onChange={
                (e)=>setDeadline(e.target.value)
                }/>

            <Button onAdd={()=>Added({title:text,deadline:deadline})}/>
        
        </form>
        <ul>
            {assignments.length>0 ? assignments.sort((a,b) => (a.deadline > b.deadline) ? 1 : ((b.deadline > a.deadline) ? -1 : 0)).map(assignment => <Assignment key={assignments.indexOf(assignment)} props={assignment} onDone={() => Done(assignments.indexOf(assignment))}/>): <Para/>}
        </ul>
    </div>
  )
}
