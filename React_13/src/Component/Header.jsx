import React, { useContext } from 'react'
import { UserDataContext } from '../Context/UserContext'

const Header = () => {
    const data = useContext(UserDataContext)

    return (
        <div className='header'>
            <h1>This is the header</h1>
            <h2>My name is {data}</h2>
        </div>
    )
}

export default Header
