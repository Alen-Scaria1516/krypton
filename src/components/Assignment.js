import React from 'react'

export const Assignment = ({props, onDone}) => {
  return (
    <li className='assignment'>
        <h3>{props.title}</h3>
        <h3>{props.deadline}</h3>
        <button className='done' type="submit" onClick={() => onDone()}>Done</button>
    </li>
  )
}
