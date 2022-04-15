import React from 'react'
import "./styles/sidebar.css"
import Sidebar from './sidebar'
import Addworkerlist from './addworker'

function addworkerLayout_admin() {
  return (
    <div className='rowC' >
    <Sidebar/>
    <div className='mx-auto' style={{width: "70%"}}>
    <Addworkerlist/>
    </div>
</div>
  )
}

export default addworkerLayout_admin