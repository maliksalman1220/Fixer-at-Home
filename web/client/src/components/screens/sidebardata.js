import React from 'react';
import {IoAddCircleSharp} from "react-icons/io5";
import {AiFillDelete} from "react-icons/ai";
import {IoPersonAdd} from  "react-icons/io5";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {CgExtensionRemove} from "react-icons/cg";
export const sidebardata = [
{
    title: "Add Service",
    icon: <IoAddCircleSharp/>,
    link: './Addservices'
},
{
    title: "Delete Service",
    icon: <AiFillDelete/>,
    link: './Addservices'
}, 
{
    title: "Approve Worker",
    icon: <IoPersonAdd/>,
    link: './addworker'
} ,
{
    title: "Add Category",
    icon: <AiOutlineAppstoreAdd/>,
    link: './Addcategories'
} ,
{
    title: "Delete Category",
    icon: <CgExtensionRemove/>,
    link: './Addcategories'
} 
]


