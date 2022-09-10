import React from 'react'
import{useNavigate} from 'react-router-dom'
function NavBar() {
    const nav = useNavigate();
  return (
    <div>
        <button onClick={()=>{nav('/controlpannel')}}>flightList</button>
        <button onClick={()=>{nav('/controlpannel/sort')}}>fligthSort</button>
        <button onClick={()=>{nav('/controlpannel/add')}}>Addflight</button>
        <button onClick={()=>{nav('/controlpannel/delete')}}>DeleteFlight</button>
    </div>
  )
}

export default NavBar