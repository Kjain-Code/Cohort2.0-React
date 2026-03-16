import React from 'react'

const Card = (props) => {
   
  return (
    <div className=' bg-amber-400'>
      Name : {props.user} and Age : {props.age} 
    </div>
  )
}

export default Card
