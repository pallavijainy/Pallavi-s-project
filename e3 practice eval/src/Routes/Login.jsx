import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";


function Login() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const navigate=useNavigate()

  const {loginUser}=useContext(AppContext)

const handleSubmit=(e)=>{
e.preventDefault()
fetch("https://reqres.in/api/login",{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify({email,password})
}).then((res)=>res.json()).then((res)=>{
  if(res.token){
    console.log(res.token)
    loginUser(res.token)
    navigate("/dashboard")
  }
}).catch((err)=>{
  console.log(err)
})
}


  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
         
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
