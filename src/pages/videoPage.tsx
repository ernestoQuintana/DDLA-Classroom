// import React from 'react';
// import Encabezado from '@/layouts/header';
// import SectionFooter from '@/layouts/footer';
// import Chat from '@/components/Chat';
// import VideoCall from '@/components/VideoCall';

import React from 'react';
import Jitsi from 'react-jitsi';
import '../styles/jitsi.css'
function VideoPage() {
  const domain = 'meet.jit.si';
  const roomName = 'my-jitsi-room';

  const handleAPI = () => {
    console.log('Meeting started');
  };

  return (
    <div className="videoPage">
      <Jitsi
        domain={domain}
        roomName={roomName}
        displayName="John Doe"
        onAPILoad={handleAPI}
      />
    </div>
  );
}

export default VideoPage;
// const VideoPage = () => {
//   return (
//     <div>
//       <Encabezado />
//       <main>
//         <div className="video-chat-container">

//           <Chat />
//         </div>
//       </main>
//       <SectionFooter />
//     </div>
//   );
// };

// export default VideoPage;