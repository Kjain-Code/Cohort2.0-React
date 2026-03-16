import React, { useState } from 'react'

const App = () => {
  const [name, setname] = useState("")

  const [allUser, setallUser] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
    const newAllUser=[...allUser]
    newAllUser.push(name)
    console.log(newAllUser)
    setallUser(newAllUser)
    setname("")
  }

// yha pe humne ek form banaya hai aur usme onSubmit event handler diya hai jisme humne submitHandler function call kiya hai aur submitHandler function ke andar humne e.preventDefault() use kiya hai taki form submit hone ke baad page reload na ho aur hum console me "Form Submitted" print kar sake.
// uske baad humne ek newAllUser array banaya hai jisme humne allUser array ko spread operator ke through copy kiya hai aur usme name ko push kiya hai aur phir usko console me print kiya hai aur finally setallUser function ke through allUser state ko update kiya hai aur name state ko khali string se reset kar diya hai taki form submit hone ke baad input field khali ho jaye.


  return (
    <div className='container'>
      <h1>Form Handling and 2 way binding </h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' />
        <button type="submit">Submit</button>
      </form>
      <p>but yha pe hum directly dom se interact kar rhe hai jo hume react mein nhi karna to ab hum kuch asa karege ki hum react ko bole ke ye likh do aur vo jake input mein likh do inn chijo ke lia hum use karte hau 2 way binding </p>
      <form onSubmit={submitHandler}>
        <input
          type="text" placeholder='Enter your name'
          value={name}
          required
          onChange={(e) => {
            setname(e.target.value)
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <p>basically yha hum kya kar rhe hai hum name ko update kar rhe hai by using React mtlb humne useState use kiya initially khali string di phir humne setname use kiya aur change hone pe value change ho rhi hai </p>
      <p>yha hum directly dom se interact nahi kar rhe hai, react ke through hi hum input ko update kar rhe hai</p>

    </div>
  )
}

export default App