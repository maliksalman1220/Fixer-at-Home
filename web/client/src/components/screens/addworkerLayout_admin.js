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
    <Sidebar/>
    <div className='mx-auto' style={{width: "100%"}}>
    <Addworkerlist/>
    </div>
</div>
</div>
  )
}

export default addworkerLayout_admin