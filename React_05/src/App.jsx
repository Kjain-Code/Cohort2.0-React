import React, { useState } from 'react'

const App = () => {

  const [marks, setmarks] = useState([25, 30, 35, 40, 45])

  function graceMarks() {
    const newMarks = marks.map(function(elem){
      return elem+5;
    })
    setmarks(newMarks)
  } 
  
  return (
    <div>
      {marks.map((mark, index) => {
        return <p key={index}>Student {index + 1}: {mark}</p>
      })}
      <button onClick={graceMarks} className='bg-amber-500 p-2 rounded-2xl active:scale-90' >Grace de do </button>
    </div>
  )
}

export default App
