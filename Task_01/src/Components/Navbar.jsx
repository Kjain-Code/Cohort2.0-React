import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Horizon Courts</h1>
        <div className="menu">
            <button className='upper'>About Us</button>
            <button className='upper'>Services</button>
            <button className='upper'>Coaches</button>
            <button className='upper'>Event</button>
            <button className='upper'>Contacts</button>
        </div>
        <div className="book">  Book Now</div>
    </div>
  )
}

export default Navbar
