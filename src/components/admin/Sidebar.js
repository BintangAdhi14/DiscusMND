import React from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
    const Navigate = useNavigate ();
  return (
    <div className='bg-white sidebar p-2'>
        <div>
            <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
            <span className='brand-name fs-4'>DisucsMND</span>
        </div>
        <hr className='text-dark' />

        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
                <i className='bi bi-speedometer2 fs-5 me-3'></i>
                <span className='fs-5 'onClick={() => Navigate("/admin/dashboard")}>Dashboard</span>
            </a>

            <a className='list-group-item py-2'>
                <i className='bi bi-archive fs-4 me-3'></i>
                <span className='fs-5' onClick={() => Navigate("/admin/table")}>Stok ikan</span>
            </a>

            <a className='list-group-item py-2'>
                <i className='bi bi-power fs-5 me-3'></i>
                <span className='fs-5' onClick={() => Navigate("/admin")}>Logout</span>
            </a>
        </div>
    </div>
  )
}

export default Sidebar