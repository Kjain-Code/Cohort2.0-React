import React from 'react'
import Card from './Components/Card.jsx'

const App = () => {

  const data = [
  {
    name: "Kritika Jain",
    position: "Frontend Developer",
    profileImg: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
    likes: 120,
    posts: 15,
    views: 3400
  },
  {
    name: "Ritika Sharma",
    position: "UI/UX Designer",
    profileImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    likes: 95,
    posts: 10,
    views: 2100
  },
  {
    name: "Aman Verma",
    position: "Backend Developer",
    profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    likes: 150,
    posts: 22,
    views: 5000
  }
];

  return (
    <div className='box'>
      {data.map(function(item,index){
              return <Card key={index} data={item} />
           })}
    </div>
  )
}

export default App
