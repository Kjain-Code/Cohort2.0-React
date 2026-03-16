import {useNavigate} from "react-router-dom"

function Profile(){

const navigate = useNavigate()

return(

<div>

<h3>Profile Page</h3>

<button onClick={()=>navigate("/")}>
Go to Home
</button>

</div>

)

}

export default Profile