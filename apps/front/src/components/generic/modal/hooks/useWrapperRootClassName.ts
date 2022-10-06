import { useAtom } from 'jotai';

import { modalAnimations } from '../modal-animations.data';
import { modalStateAtom } from '../modal.state';
import { ModalAnimation } from '../types/modal-animation.types';

export const useWrapperRootClassName = (animation: ModalAnimation) => {
  const [state] = useAtom(modalStateAtom);
  const animations = modalAnimations[animation].wrapper;

  switch (state) {
    case 'idle':
      return '';
    case 'closed':
      return animations.close;
    case 'opened':
      return animations.open;
  }
};
