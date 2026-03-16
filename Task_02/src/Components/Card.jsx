import React from 'react'

const Card = (props) => {
  return (
    <div className='main-box'>
      <div className="inner">
        <div className="profile">
            <img src={props.data.profileImg} alt="" />
        </div>
      </div>
      <br />
      <h2>{props.data.name}</h2>
        <h4>{props.data.position}</h4>
        <div className="bottom">
            <button>Likes: <br />{props.data.likes}</button>
            <button>Posts: <br />{props.data.posts}</button>
            <button>Views: <br />{props.data.views}</button>
        </div>
    </div>
  )
}

export default Card
