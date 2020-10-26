import React from 'react';
import { Button, Typography } from 'antd';
import styled from 'styled-components';

import { useNextStep } from '../hooks';

const { Title } = Typography;

const Container = styled.section`
  text-align: right;

  button {
    margin-top: 120px;
  }
`;

function Intro() {
  const { nextStep } = useNextStep();

  return (
    <Container>
      <Title>약속 날짜를 정해드릴게요.</Title>
      <Button type="primary" size="large" onClick={nextStep}>
        다음
      </Button>
    </Container>
  );
}

export default Intro;
