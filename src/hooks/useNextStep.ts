import { useSetRecoilState } from 'recoil';
import { stepState } from '../states';

export default function useNextStep() {
  const setStep = useSetRecoilState(stepState);

  function nextStep() {
    setStep((prevStep) => prevStep + 1);
  }

  return {
    nextStep,
  };
}
