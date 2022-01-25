import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoSlider() {
  return <div>
      <ReactPlayer 
        url={process.env.PUBLIC_URL+'/videos/videoslider.mp4'}
        width='100%'
        height='100%'
        playing
        muted
        loop
      />
  </div>;
}
