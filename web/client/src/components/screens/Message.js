import React, {createContext} from 'react'
import { useState } from "react";
import { useEffect } from "react";
import '../screens/styles/message.css';
import { useParams } from 'react-router-dom';
import Chat from './messagecard';
import Navbar from './navbar';
import NavbarCustomer from './navbarCustomer';
var id = createContext();


export const Message = () => {
    const params = useParams();
    const [Message, setMessage] = useState("");
    const [values, setValues] = useState({ username: "", firstname: "", lastname: "", email: "" });
    const [Messages, setMessages] = useState("");
    const receiver_id = params.q;
    const sender_id = localStorage.getItem('user');
    id = params.q;
    const sender_username = localStorage.getItem('username');
    
    async function getUser() {

        const response = await fetch('http://localhost:5000/api/auth/profile/'+receiver_id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        if (data.status === 'ok') {
            setValues({
                username: data.user.username,
                firstname: data.user.firstname,
                lastname: data.user.lastname,
                email: data.user.email,
            });
        }
        else {
            alert(data.error);
        }
    }

    function sendMesage(e) {
        e.preventDefault();
       
        const response = fetch('http://localhost:5000/api/auth/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sender_id: sender_id,
                receiver_id: receiver_id,
                sender_username: sender_username,
                receiver_username: values.username,
                message: Message
            })
        });

        response.then(res => {
            if (res.status === 200) {
                alert("Message sent successfully");
                GetMessages();
                window.location.reload(false);
            }
            else {
                alert("Message not sent");
            }
        });
    }


    async function GetMessages() {

        const response = fetch('http://localhost:5000/api/auth/getmessage/'+sender_id+'/'+receiver_id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        response.then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    setMessages(data.messages);
                });
                
            }
            else {
                alert("Message not retetived");
            }
            
        });
    }

    useEffect(() => {
        getUser();
        GetMessages();
    }, [])

    return (
        <div>
            <NavbarCustomer/>
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            <div class="container">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="card chat-app">
                            <div class="chat">
                                <div class="chat-header clearfix">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <a href="#" data-toggle="modal" data-target="#view_info">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                            </a>
                                            <div class="chat-about">
                                                <h6 class="m-b-0">{values.username}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Chat/>
                                </div>
                                <div class="chat-message clearfix">
                                    <div class="input-group mb-0">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fa fa-send"></i></span>
                                        </div>
                                        <input type="text" class="form-control" onChange={(e) => setMessage(e.target.value)} placeholder="Enter text here..." />
                                        <button type="submit" className="btn btn-primary" onClick={sendMesage}>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export {id}