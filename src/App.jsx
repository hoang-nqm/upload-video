import React from 'react';
import { Layout, Card, Typography, ConfigProvider } from 'antd';
import './App.css';

const { Content } = Layout;
const { Title } = Typography;

function App() {
  // Nếu video nằm trong thư mục public/my-video.mp4
  const videoSrc = "/my-video.mp4"; 

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', backgroundColor: '#000' }}>
        <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          {/* Container cho video - Chiếm toàn màn hình hoặc theo khung */}
          <div className="main-container">
            <Card
              bordered={false}
              bodyStyle={{ padding: 0 }}
              className="video-card"
            >
              <video
                className="video-player"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src={videoSrc} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
              
              {/* <div className="video-overlay">
                <Title level={4} style={{ color: 'white', margin: 0, textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                  Video đang phát trực tiếp
                </Title>
              </div> */}
            </Card>
          </div>

        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;