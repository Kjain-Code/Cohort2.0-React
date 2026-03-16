import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello Form App</h1>
      <p>yha pe app ka parent main hai aur main ka parent index.html</p>
      <p>jsx mein aap direct html likh sakte ho </p>
      <h4>humne ek deafult function app file se export kiya hai main.jsx mein aur main.jsx mein humne isko import kiya hai </h4>
      <h2>1. node_modules (⚠️ Touch nahi karna)</h2>
      <p>Isme kya hota hai? isme Saari installed libraries, React, Vite , Dependencies</p>
      <h2>2. public Folder</h2>
      <p>Static files yaha rakhte hain:✅ images ✅ icons ✅ fonts ✅ static file</p>
      <h2>3. src Folder (MOST IMPORTANT)</h2>
      <p>React ka actual kaam yahi hota hai</p>
      <p>main.jsx entry point  ,app.jsx index.css </p>
      <h2>4. index.html</h2>
      <p>React me sirf ONE HTML file hoti hai.</p>
      <h2>5. package.json</h2>
      <p>Project ka ID card. Contains : ✅ dependencies ✅ scripts ✅ versions</p>
    </div>
  )
}

export default App
