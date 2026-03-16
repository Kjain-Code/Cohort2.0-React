import React from 'react'
import Card from './Card.jsx'

const App = () => {
  const users = ["jahanvi", "mansi", "saloni", "mehak", "indu"]
  return (
    <div>
      <h1 className='text-4xl' >App</h1>
      <div className='' >kjsfiu</div>
      <Card user="Kritika" age="21" />
      <Card user="Deepanshi" age="20" />
      <br /><br />
      <h1>Lets now use array for props drilling</h1>
     {users.map(function(){
        return <Card/>
     })}

    </div>
  )
}

export default App
