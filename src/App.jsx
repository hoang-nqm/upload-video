import React, { useRef, useState, useEffect } from 'react';
import { Layout, Button, ConfigProvider } from 'antd';
import { SoundOutlined, AudioMutedOutlined } from '@ant-design/icons';
import './App.css';

const { Content } = Layout;

function App() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Đường dẫn video trong thư mục public
  const videoSrc = "/my-video.mp4"; 

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#ff4d4f' } }}>
      <Layout style={{ minHeight: '100vh', backgroundColor: '#000', overflow: 'hidden' }}>
        <Content className="video-wrapper">
          
          <video
            ref={videoRef}
            className="full-screen-video"
            autoPlay
            muted // Bắt buộc phải có để tự động chạy
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Lớp phủ điều khiển */}
          <div className="overlay-controls">
            <Button 
              type="primary" 
              shape="round" 
              icon={isMuted ? <AudioMutedOutlined /> : <SoundOutlined />} 
              size="large"
              onClick={toggleMute}
              className="mute-button"
            >
              {isMuted ? "Chạm để bật tiếng" : "Đang bật âm thanh"}
            </Button>
          </div>

          {/* Hiệu ứng mờ ở dưới để text dễ đọc (nếu cần) */}
          <div className="bottom-gradient">
            <h2 style={{ color: 'white', marginBottom: 20 }}>Video của bạn</h2>
          </div>

        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;