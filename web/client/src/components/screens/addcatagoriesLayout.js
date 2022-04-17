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
    <Sidebar/>
    <div className='mx-auto' style={{width: "100%", marginTop: "5%"}}>
    <Addcategories/>
    </div>
</div>
</div>
  )
}

export default AddcatagoriesLayout