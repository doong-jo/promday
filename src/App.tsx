import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import { Viewer } from '../src/components';

const Footer = styled.footer`
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Viewer />
      <Footer>
        Created by{' '}
        <Typography.Link href="https://github.com/doong-jo">
          Sungdong Jo
        </Typography.Link>
      </Footer>
    </div>
  );
}

export default App;
