import * as React from 'react';
import VideoConference from '../VideoConference/index.tsx';
import Chat from './Chat';
import Title from './Title';

const Aula = () =>{

    return(
        <TitleComponent title="Aulas DDLA" description="Bienvenidos a las aulas DDLA">

        </TitleComponent>
        <div className="contenedor_usuario">
            <label>
                Nombre de usuario:
                <input type="text" value={user} />
            </label>

        </div>
        <div className="video_container">
            <VideoConference src="">
        </div>
        <div className="chat_container">
            <Chat></Chat>
        </div>
    );
}