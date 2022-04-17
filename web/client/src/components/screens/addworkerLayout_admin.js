import React from 'react'
import "./styles/sidebar.css"
import Sidebar from './sidebar'
import Addworkerlist from './addworker'
import NavbarAdmin from './navbarAdmin'

function addworkerLayout_admin() {
  return (
    <div>
      <NavbarAdmin/>
    <div className='rowC' >


      <div className='sidebar-div'>
    <Sidebar/>
    </div>


    <div className='mx-auto content-div' >
    <Addworkerlist/>
    </div>


</div>
</div>
  )
}

export default addworkerLayout_admin