import React from 'react'
import "./styles/sidebar.css"
import Sidebar from './sidebar'
import Addcategories from './Addcategories'

function AddcatagoriesLayout() {
  return (
    <div className='rowC' >
    <Sidebar/>
    <div className='mx-auto' style={{width: "100%", marginTop: "5%"}}>
    <Addcategories/>
    </div>
</div>
  )
}

export default AddcatagoriesLayout