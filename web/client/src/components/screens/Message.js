import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import jwtDecode from 'jwt-decode';
import { render } from 'react-dom';
import '../screens/styles/message.css';
import { useParams } from 'react-router-dom';


export const Message = () => {
    const params = useParams();
    const [Message, setMessage] = useState("");
    const [values, setValues] = useState({ username: "", firstname: "", lastname: "", email: "" });
    const [Messages, setMessages] = useState("");
    const receiver_id = params.q;
    const sender_id = localStorage.getItem('user');
    const type = localStorage.getItem("user_type");

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
                message: Message
            })
        });

        response.then(res => {
            if (res.status === 200) {
                alert("Message sent successfully");
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
                    console.log(data.messages);
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
        console.log(Messages);
    }, [])

    // function renderComponent() {      
    //     const list = []

    //     Messages.forEach((message) => {
    //       list.push(<li>{message}</li>)
    //     })

    //     return (
    //       <div>
    //         {list}
    //       </div>
    //     )
    // }   

    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            <div class="container">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="card chat-app">
                            {/* <div id="plist" class="people-list"> */}
                            {/* <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Search..."/>
                                </div> */}
                            {/* <ul class="list-unstyled chat-list mt-2 mb-0">
                                    <li class="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar"/>
                                            <div class="about">
                                                <div class="name">Vincent Porter</div>
                                                <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                            </div>
                                    </li>
                                    <li class="clearfix active">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                                            <div class="about">
                                                <div class="name">Aiden Chavez</div>
                                                <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                            </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
                                            <div class="about">
                                                <div class="name">Mike Thomas</div>
                                                <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                            </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                                            <div class="about">
                                                <div class="name">Christian Kelly</div>
                                                <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                                            </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar"/>
                                            <div class="about">
                                                <div class="name">Monica Ward</div>
                                                <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                            </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
                                            <div class="about">
                                                <div class="name">Dean Henry</div>
                                                <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                                            </div>
                                    </li>
                                </ul> */}
                            {/* </div> */}
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
                                        {/* <div class="col-lg-6 hidden-sm text-right">
                                            <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                                <div class="chat-history">
                                    <ul class="m-b-0">
                                        <li class="clearfix">
                                            <div class="message-data text-right">
                                                <span class="message-data-time">10:10 AM, Today</span>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                            </div>
                                            <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="message-data">
                                                <span class="message-data-time">10:12 AM, Today</span>
                                            </div>
                                            <div class="message my-message">Are we meeting today?</div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="message-data">
                                                <span class="message-data-time">10:15 AM, Today</span>
                                            </div>
                                            <div class="message my-message">Project has been already finished and I have results to show you.</div>
                                        </li>
                                    </ul>
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
        </>
    )
}
