import React from 'react';
import {IoAddCircleSharp} from "react-icons/io5";
import {AiFillDelete} from "react-icons/ai";
import {IoPersonAdd} from  "react-icons/io5";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {CgExtensionRemove} from "react-icons/cg";
export const sidebardataworker = [
{
    title: "Order Status",
    icon: <IoAddCircleSharp/>,
    link: `/workerorder/${JSON.parse(localStorage.getItem('user'))}`
}
]


