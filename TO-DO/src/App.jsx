import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [userName, setuserName] = useState('')
  const [userImg, setuserImg] = useState('')
  const [userRole, setuserRole] = useState('')
  const [userDescrip, setuserDescrip] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    setAllUsers([...allUsers, { userName, userRole, userDescrip, userImg }])

    setuserName('')
    setuserImg('')
    setuserRole('')
    setuserDescrip('')
  }

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers]

    copyUsers.splice(idx, 1)

    setAllUsers(copyUsers)
  }


  return (
    <div className='h-auto bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-wrap p-2 justify-center'>

        <input
          value={userName}
          onChange={(e) => {
            setuserName(e.target.value)
          }}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='Enter Your Name' />

        <input
          value={userImg}
          onChange={(e) => {
            setuserImg(e.target.value)
          }}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='Image Url' />

        <input
          value={userRole}
          onChange={(e) => {
            setuserRole(e.target.value)
          }}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]'
          type="text "
          placeholder='Enter Role' />

        <input
          value={userDescrip}
          onChange={(e) => {
            setuserDescrip(e.target.value)
          }}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='Enter Descriprion' />

        <button className='bg-emerald-500 px-5 py-2 rounded m-2 w-[90%] active:scale-95'>Create User</button>
      </form>
      <div className='px-4 py-10 gap-4 flex flex-wrap'>

        {allUsers.map(function (elem, idx) {
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />
        })}

      </div>

    </div>
  )
}

export default App
