import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard"

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
     <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
  )
  
  
}

export default AllRoutes;
