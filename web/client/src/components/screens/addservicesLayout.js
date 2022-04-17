import React from 'react'
import "./styles/sidebar.css"
import Sidebar from './sidebar'
import Addservices from './Addservices'
import NavbarAdmin from './navbarAdmin'

function sidebarTEMP() {
  return (
    <div>
      <NavbarAdmin/>
    <div className='rowC' >
    <Sidebar/>
    <div className='mx-auto' style={{width: "100%", marginTop: "5%"}}>
    <Addservices/>
    </div>
</div>
</div>
  )
}

export default sidebarTEMP
