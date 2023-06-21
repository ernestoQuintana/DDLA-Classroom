import * as React from 'react';

interface Chatrops {
    name?: string;
    userAdmin?: string;
  }

const Chat = (props:Chatrops) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.userAdmin}</p>
        </div>
    )
}

export default Chat;