import React from 'react';

import { BsFillPlayFill, BsPauseFill, PsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <section className='app__video'>
      <video src={meal} ref={vidRef} type="video/mp4" loop controle={false} muted></video>
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
          { playVideo 
            ? <BsPauseFill color="#FFF" fontSize={30}/>
            : <BsFillPlayFill color="#FFF" fontSize={30}/> 
          }
        </div>
      </div>
    </section>
  )
};

export default Intro;
