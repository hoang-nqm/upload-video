import React, { useRef, useState, useEffect } from 'react';
import { Button, ConfigProvider } from 'antd';
import { SoundOutlined, AudioMutedOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Hàm xử lý bật/tắt tiếng dành riêng cho Safari
  const toggleMute = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      if (isMuted) {
        video.muted = false;
        // Quan trọng: Gọi play() sau khi bỏ mute để Safari kích hoạt âm thanh
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("Safari đã mở âm thanh thành công");
          }).catch(error => {
            console.log("Safari chặn âm thanh: ", error);
          });
        }
        setIsMuted(false);
      } else {
        video.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#ff4d4f' } }}>
      <div className="video-container">
        <video
          ref={videoRef}
          className="video-player"
          autoPlay
          muted
          loop
          playsInline // Bắt buộc cho iOS
          preload="auto"
        >
          <source src="/my-video.mp4" type="video/mp4" />
        </video>

        {/* Nút điều khiển âm lượng */}
        <div className="volume-control-wrapper">
          <Button 
            type="primary" 
            shape="circle" 
            icon={isMuted ? <AudioMutedOutlined /> : <SoundOutlined />} 
            size="large"
            onClick={toggleMute}
            className={`mute-btn ${isMuted ? 'is-muted' : ''}`}
          />
          <span className="mute-text">
            {isMuted ? "Chạm để mở âm thanh" : "Âm thanh đang bật"}
          </span>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;