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

    <div className='sidebar-div'>
    <Sidebar/>
    </div>

    <div className='mx-auto content-div' style={{width: "100%", marginTop: "5%"}}>
    <Addservices/>
    </div>
</div>
</div>
  )
}

export default sidebarTEMP
