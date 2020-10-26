import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { stepState } from '../states';
import { Intro, PickDates, PickDays, PickTimes, Receipt } from '.';

const Container = styled.main`
  padding: 120px;
  height: 100vw;
`;

function Viewer() {
  const step = useRecoilValue(stepState);

  return (
    <Container>
      {step === 0 && <Intro />}
      {step === 1 && <PickDates />}
      {step === 2 && <PickDays />}
      {step === 3 && <PickTimes />}
      {step === 4 && <Receipt />}
    </Container>
  );
}

export default Viewer;
