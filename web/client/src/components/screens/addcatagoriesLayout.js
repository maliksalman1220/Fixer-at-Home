import React from 'react'
import "./styles/sidebar.css"
import Sidebar from './sidebar'
import Addcategories from './Addcategories'
import NavbarAdmin from './navbarAdmin'

function AddcatagoriesLayout() {
  return (
    <div>
   <NavbarAdmin/>
    <div className='rowC' >

    <div className='sidebar-div'>
    <Sidebar/>
    </div>


    <div className='mx-auto content-div' style={{width: "100%", marginTop: "5%"}}>
    <Addcategories/>
    </div>
</div>
</div>
  )
}

export default AddcatagoriesLayout