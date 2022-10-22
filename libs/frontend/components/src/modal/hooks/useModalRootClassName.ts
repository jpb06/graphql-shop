import { modalAnimations } from '../modal-animations.data';
import { ModalState } from '../modal.state';
import { ModalAnimation } from '../types/modal-animation.types';

export const useModalRootClassName = (
  state: ModalState,
  animation: ModalAnimation
) => {
  const animations = modalAnimations[animation].modal;

  switch (state) {
    case 'idle':
      return 'hidden';
    case 'opened':
      return animations.open;
    case 'closed':
      return animations.close;
  }
};
