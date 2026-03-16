import React , {createContext, userContext} from 'react'

export const UserDataContext = createContext()

const UserContext = (props) => {
    const user="Kritika"
  return (
    

    <UserDataContext.Provider value={user}>
      {props.children}
    </UserDataContext.Provider>
  )
}

export default UserContext
