import React from 'react';
import {IoAddCircleSharp} from "react-icons/io5";
import {AiFillDelete} from "react-icons/ai";
import {IoPersonAdd} from  "react-icons/io5";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {CgExtensionRemove} from "react-icons/cg";
export const sidebardataCustomer = [

    {
        title: "View Orders",
        icon: <IoPersonAdd/>,
        link: `/order/${JSON.parse(localStorage.getItem('user'))}`
    } ,
    {
    title: "Place Order",
    icon: <IoAddCircleSharp/>,
    link: `/pppp`
}
]


