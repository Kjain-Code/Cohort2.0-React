import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Settings from "./pages/Setting"

function App(){

return(

<div>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>

<Route path="/dashboard" element={<Dashboard/>}>

<Route path="profile" element={<Profile/>}/>
<Route path="settings" element={<Settings/>}/>

</Route>

</Routes>

</div>

)

}

export default App