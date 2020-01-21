import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Launcher} from 'react-chat-window'
 
export default ({}) => {    
    const [messageList, setmessageList] = useState([])


  useEffect(() => {
    const fetchData = async () => {
       
        const result = await axios({
            method: 'get',
            url: '',
            headers: {
                "authorization": "",
                "content-type": "application/x-www-form-urlencoded"
            }
        })
        console.log(result.data)
        
    };
    fetchData();
}, []);


  
 
  const _onMessageWasSent = (message) => {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }
 
  const _sendMessage = (text) => {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 

    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'Chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={_onMessageWasSent.bind(this)}
        messageList={messageList}
        showEmoji
      />
    </div>)

}