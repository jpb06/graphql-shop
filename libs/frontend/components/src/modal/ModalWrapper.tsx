import { useAtom } from 'jotai';
import { PropsWithChildren } from 'react';

import { Modal } from './Modal';
import { useWrapperRootClassName } from './hooks/useWrapperRootClassName';
import { modalStateAtom } from './state/modal.state';
import { ModalAnimation } from './types/modal-animation.types';

interface ModalWrapperProps {
  outsideAnimation?: ModalAnimation;
  modalAnimation?: ModalAnimation;
}

export const ModalWrapper = ({
  children,
  outsideAnimation = 'blow',
  modalAnimation = 'move',
}: PropsWithChildren<ModalWrapperProps>) => {
  const rootClassName = useWrapperRootClassName(outsideAnimation);

  const [{ content }] = useAtom(modalStateAtom);

  if (!content) {
    return <div className={rootClassName}>{children}</div>;
  }

  return (
    <>
      <div className={rootClassName}>{children}</div>
      <Modal animation={modalAnimation} {...content} />
    </>
  );
};
