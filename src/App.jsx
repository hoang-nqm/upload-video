import React, { useRef, useState } from 'react';
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import './App.css';

const VideoItem = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="video-section">
      {/* Wrapper này giúp định vị nút bấm luôn ở giữa video */}
      <div className="video-wrapper" onClick={togglePlay}>
        <video
          ref={videoRef}
          className="video-player"
          src={src}
          loop
          playsInline
        />
        
        {/* Lớp phủ điều khiển */}
        <div className={`video-overlay ${!isPlaying ? 'is-paused' : ''}`}>
          {!isPlaying && (
            <div className="icon-box">
              <PlayCircleFilled className="control-icon" />
              <p className="control-text">BẤM ĐỂ PHÁT</p>
            </div>
          )}
          {/* Hiện icon pause nhanh rồi ẩn khi đang phát nếu bạn muốn, 
              hoặc bỏ trống để không che video */}
        </div>
      </div>
    </div>
  );
};

function App() {
  const videoList = ["/video1.mp4", "/video2.mp4"];
  return (
    <div className="app-container">
      {videoList.map((src, index) => (
        <VideoItem key={index} src={src} />
      ))}
    </div>
  );
}

export default App;