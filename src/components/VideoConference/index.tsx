import * as React from 'react';

interface VideoProps {
    name?: string;
    userAdmin?: string;
  }

const VideoConference = (props:VideoProps) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.userAdmin}</p>
        </div>
    )
}

export default VideoConference;