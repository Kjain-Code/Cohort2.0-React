import React, { useEffect } from 'react'

const App = () => {

  useEffect(function(){
    console.log("useeffect run hua")
  },[])

  return (
    <div>
      <h1>Useeffect </h1>
      <p>useeffect react ka ek hook hai jo side effects ko handle karta hai</p>
      <p>side effects kya hote hain? example: fetching data, setting timers, etc.</p>
      <p>useeffect ko 2 tariko se use kiya jata hai: 1. with dependencies 2. without dependencies </p>
      <p>1️⃣ No dependency array : Effect har render par run hota hai.</p>
      <p>2️⃣ With dependency array : Effect sirf tab run hota hai jab dependency array mein koi value change hoti hai.  </p>
      <p>1️⃣ Mount
Component first time render

2️⃣ Update
State ya props change

3️⃣ Unmount
Component remove ho gaya</p>

      <p></p>
    </div>
  )
}

export default App
