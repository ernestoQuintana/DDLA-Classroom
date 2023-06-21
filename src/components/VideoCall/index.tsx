import * as React from 'react';

interface VideoProps {
    name?: string;
    userAdmin?: string;
  }

const VideoCall = (props:VideoProps) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.userAdmin}</p>
        </div>
    )
}

export default VideoCall;