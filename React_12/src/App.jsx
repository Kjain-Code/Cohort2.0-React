import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Context API </h1>
      <p>React mein data flow hota hai parent to child bich wale conpents ko bhale hi data ki jarurat na ho but app.jsx se line wise parent to child data pass karna hi padta hai jisko hum props drilling khate hai </p>
      <p>Props drilling means passing props through multiple components even when intermediate components do not need them.jisse code messy ho jata hai , maintain karne mein difficulty  </p>
      <p>CReact Context API ek built-in mechanism hai jo data ko global level par share karne deta hai bina props drilling ke.</p>
      <p>Context API allows you to share data between components without passing props manually through every level of the component tree.</p>
      <h4>Context ek global storage jaisa behave karta hai.</h4>
      <h4>Context API ke 3 main parts == React Context API mein 3 important cheezein hoti hain:1️⃣ createContext() : Context object banata hai.2️⃣ Provider : Data provide karta hai. 3️⃣ useContext() : Data consume karta hai.</h4>
      <h3>Context API ka use kaise karein?</h3>
      <p></p>
    </div>
  )
}

export default App
