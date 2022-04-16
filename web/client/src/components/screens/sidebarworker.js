import React from 'react'
import "./styles/sidebar.css"
import { sidebardataworker } from './sidebardataWorker'
//import {BsArrowLeftSquare} from "react-icons/bs";
function SidebarWorker() {
  return (
    <div className='side'>
      <div className='sidebar'>
        <ul className='SidebarList'>
        {sidebardataworker.map((value,key) =>{
            return(
                <li  
                 key = {key} 
                 className='roww'  
                 id = {window.location.pathname == value.link ? "active" : ""}
                 onClick = {()=> {window.location.pathname = value.link;
                }}
                  > 
                        <div id='icon'> {value.icon} </div>
                        <div id ='stitle'> {value.title} </div>
                </li>
            )
        })}
        </ul>
    </div>
    </div>
  )
}

export default SidebarWorker