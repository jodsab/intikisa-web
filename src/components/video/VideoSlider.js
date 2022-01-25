import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoSlider() {
  return <div>
      <ReactPlayer 
        url={require('../../videos/videoslider.mp4').default}
        width='100%'
        height='100%'
        playing
        muted
        loop
      />
  </div>;
}
