import { modalAnimations } from '../logic/modal-animations.data';
import { ModalStatus } from '../state/modal.state';
import { ModalAnimation } from '../types/modal-animation.types';

export const useModalRootClassName = (
  state: ModalStatus,
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
