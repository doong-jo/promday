import { atom } from 'recoil';

enum STATES {
  STEP = 'STEP',
}

export const stepState = atom<number>({
  key: STATES.STEP,
  default: 0,
});
