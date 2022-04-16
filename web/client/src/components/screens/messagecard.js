import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import '../screens/styles/message.css';
import {id} from './Message';

class MessageList extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
    this.receiver_id = id;
    this.sender_id = localStorage.getItem('user');
    this.getMessages = this.getMessages.bind(this);
  }

  async componentDidMount() {
    await this.getMessages();
  }

  async getMessages() {

    const response = fetch('http://localhost:5000/api/auth/getmessage/' + this.sender_id + '/' + this.receiver_id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response.then(res => {
      if (res.status === 200) {
        res.json().then(data => {
          this.setState({ messages: data.messages });
        });
      }
      else {
        alert("Message not retetived");
      }
    });
  }



  render() {

    const Message = ({ sender_id, receiver_id, content, time }) => (
      <div class="container">
        <div class="card chat-app">
          <div class="chat-history">
            <div class="message-data text-right">
              <span class="message-data-time">{time}</span>
            </div>
            <div class="message other-message float-right"> {content} </div>
          </div>
        </div>
      </div>
    );
    
    let chatlist = this.state.messages?.map((message) => (
      <Message
        sender_id={message.sender}
        receiver_id={message.receiver}
        content={message.content}
        time={message.timestamp}
        key={message._id}
      />
    ));

    return (
      <>  
          {chatlist}
      </>
    );
  }
}


export default withRouter(MessageList);

