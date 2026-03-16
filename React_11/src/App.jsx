import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Types of Routers</h1>
      <h2>BrowserRouter</h2>
      <p>BrowserRouter ek component hai jo React applications mein routing enable karta hai.</p>
      <h3>Features</h3>
      <ul>
        <li>URL ko manage karta hai</li>
        <li>History API ka use karta hai</li>
        <li>Server-side rendering support karta hai</li>
      </ul>
      <h3>Drawback</h3>
      <ul>
        <li>Server-side rendering support karta hai</li>
      </ul>
      <h2>HashRouter</h2>
      <p>HashRouter ek component hai jo URL ke hash portion ko manage karta hai.</p>
      <h3>Features</h3>
      <ul>
        <li>URL ke hash portion ko manage karta hai</li>
        <li>Browser history API ka use nahi karta</li>
        <li>Server-side rendering support nahi karta</li>
      </ul>
      <h3>Drawback</h3>
      <ul>
        <li>URL ke hash portion ko manage karta hai</li>
        <li>Browser history API ka use nahi karta</li>
        <li>Server-side rendering support nahi karta</li>
      </ul>
      <h2>MemoryRouter</h2>
      <p>MemoryRouter ek component hai jo in-memory history ko manage karta hai.</p>
      <h3>Features</h3>
      <ul>
        <li>In-memory history ko manage karta hai</li>
        <li>Server-side rendering support nahi karta</li>
      </ul>
      <h3>Drawback</h3>
      <ul>
        <li>In-memory history ko manage karta hai</li>
        <li>Server-side rendering support nahi karta</li>
      </ul>
      <h3>Static Router </h3>
      <p>StaticRouter ek component hai jo static routing ke liye use hota hai.</p>
      <h3>Features</h3>
      <ul>
        <li>Static routing ke liye use hota hai</li>
        <li>Server-side rendering support karta hai</li>
      </ul>
      <h3>Drawback</h3>
      <ul>
        <li>Static routing ke liye use hota hai</li>
        <li>Server-side rendering support karta hai</li>
      </ul>
      <h3>Majority time hum browser router ko hi use karte hain in react </h3>
      <h1>Outlet</h1>
      <p>Outlet ek component hai jo child routes ko display karta hai.</p>
      <p>for ex hume navbar , side bar , footer same rakhna hai sirf andar ka content change karna hai to vha hum use karte hain </p>
      <p>outlet ek placeholder hai jo child routes ko render karta hai. jha hum outlet use karte hain vha child routes display hote hain.</p>
      <h1>useNavigate </h1>
      <p>useNavigate ek hook hai jo navigation ke liye use hota hai.</p>
    </div>
  )
}

export default App
