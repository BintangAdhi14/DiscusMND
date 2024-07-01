import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from '../components/admin/Sidebar'
import HomeAdmin from '../components/admin/HomeAdmin'
import { useNavigate } from 'react-router-dom'




function Dashboard() {
    const [toggle, setToggle] = useState(true)
    const Toggle = () => {
      setToggle(!toggle)
    }
    const Navigate = useNavigate();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (!isAuthenticated) {
        Navigate('/admin')
      }
    })
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
           { toggle && <div className='col-4 col-md-2 bg-primary bg-gradient vh-100 position-fixed'>
               <Sidebar/>
            </div>}
            {toggle && <div className='col-4 col-md-2'></div>}
            <div className='col'>
                <HomeAdmin Toggle={Toggle}/>
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard