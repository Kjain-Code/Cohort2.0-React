import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'


const App = () => {
  return (
    <div>
      <h1>Routing in React</h1>
      <p>Routing ka matlab hai URL ke basis par different components render karna.React applications mein routing implement karne ke liye React Router library use ki jati hai.</p>
      <p>React Router ek library hai jo React applications mein navigation aur routing manage karti hai.</p>
      <h2>Main Components </h2>
      <h3>BrowserRouter </h3>
      <p>BrowserRouter ek component hai jo React applications mein routing enable karta hai.</p>
      <h3>Routes</h3>
      <p>Routes ek component hai jo different routes ko manage karta hai.</p>
      <h3>Route</h3>
      <p>Route ek component hai jo specific URL ke liye specific component render karta hai.</p>
      <h3>Link</h3>
      <p>Link ek component hai jo navigation ke liye use kiya jata hai.</p>

      <h2>Routing kaise implement karein?</h2>
      <p>Routing implement karne ke liye pehle React Router library ko install karna hota hai. Uske baad BrowserRouter component se application ko wrap karna hota hai. Phir Route component ka use karke different paths ke liye different components render kar sakte hain.</p>

    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
