export type ModalAnimation = 'blow' | 'move';

type ModalAnimationStates = {
  open: string;
  close: string;
};

type ModalAnimationTargets = {
  modal: ModalAnimationStates;
  wrapper: ModalAnimationStates;
};

export type ModalAnimations = {
  blow: ModalAnimationTargets;
  move: ModalAnimationTargets;
};
