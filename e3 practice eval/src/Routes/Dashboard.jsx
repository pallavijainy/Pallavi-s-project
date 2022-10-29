import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import RestaurantTable from "../Components/RestaurantTable";
import { AppContext } from "../Context/AppContext";
import Pagination from "../Components/Pagination"

function Dashboard() {

  const {logOut,authState}=useContext(AppContext)

  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(1)

useEffect(()=>{
  setLoading(true)
  getData();

},[page])

  const getData = () => {
    fetch(
     ` https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        console.log(res)
        setLoading(false)
      })
    
      .catch((err) => {
        console.log(err)
        setLoading(false)
      });
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logOut}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box">
          <option value="">All</option>
          <option value="fine_dining">Fine Dining</option>
          <option value="ethnic">Ethnic</option>
          <option value="fast_food"> Fast Food</option>
          <option value="cafe"> Cafe</option>
          <option value="casual_dining">Casual Dining</option>
          
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {
          loading?    ( <Loader />):(  <RestaurantTable data={data}/>)
        }
   
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      
      </div>
      <br />
      <div data-testid="pagination-container">{/* Pagination */}
    
      <Pagination totalPages={data.totalPages} currentPage={page} handlePageChange={(value)=>setPage(value)}/>
      
      </div>
    </div>
  );
}

export default Dashboard;
