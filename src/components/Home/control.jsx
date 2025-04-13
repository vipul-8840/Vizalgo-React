import React from 'react'

const Control = ({handleNewArray}) => {
  return (
    <div>
         <button  onClick={handleNewArray}
         className='px-3 py-3 rounded-md border cursor-pointer'>Genearte New Array</button>
         
    </div>
  )
}

export default Control
