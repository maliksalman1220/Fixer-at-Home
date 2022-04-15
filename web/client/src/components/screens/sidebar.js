import React from 'react'
import "./styles/sidebar.css"
import { sidebardata } from './sidebardata'
import {BsArrowLeftSquare} from "react-icons/bs";
function Sidebar() {
  return (
      <div className='sidebar'>
        <ul className='SidebarList'>
        {sidebardata.map((value,key) =>{
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
  )
}

export default Sidebar