import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Layout, Menu, theme } from 'antd';
import './App.css';
import LegacyParcel from './LegacyParcel';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NativeComponent from './NativeComponent';
import NativeComponent2 from './NativeComponent2';

const { Header, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Montserrat',
        },
      }}
    >
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
            <div className='demo-logo-vertical' />
            <Menu
              theme='dark'
              mode='inline'
              // defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: <Link to='native'>Native Component</Link>,
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: <Link to='other'>Another Native Component</Link>,
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: <Link to='dashboard'>LegacyParcel</Link>,
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <Button
                type='text'
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              dummy Header
            </Header>
            <Routes>
              <Route path='native' element={<NativeComponent />} />
              <Route path='other' element={<NativeComponent2 />} />
              <Route path='*' element={<LegacyParcel />} />
            </Routes>
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
