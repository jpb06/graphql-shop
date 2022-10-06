import { ModalAnimations } from './types/modal-animation.types';

export const modalAnimations: ModalAnimations = {
  blow: {
    modal: {
      open: 'animate-blow-modal',
      close: 'animate-blow-modal-close',
    },
    wrapper: {
      open: 'animate-blow-wrapper',
      close: 'animate-blow-wrapper-close',
    },
  },
  move: {
    modal: { open: 'animate-move-modal', close: 'animate-move-modal-close' },
    wrapper: {
      open: 'animate-move-wrapper',
      close: 'animate-move-wrapper-close',
    },
  },
};
