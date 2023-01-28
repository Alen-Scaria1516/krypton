import React from 'react'

export default function Button({onAdd}) {
  return (
    <button onClick={()=>onAdd()} type="submit" className='button' >Add Assignment</button>
  )
}
