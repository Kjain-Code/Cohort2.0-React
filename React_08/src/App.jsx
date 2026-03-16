import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [allUsers, setAllUsers] = useState([])
  async function getData(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setAllUsers(response.data);
  }
  return (
    <div>
      <button onClick={getData} >Get Data </button>
      <ul>
        {
          allUsers.map((user) => {
            return <li key={user.id}>{user.title}</li>
          })
        }
      </ul>
    </div>

  )
}

export default App