import { PropsWithChildren } from 'react';

import { Modal } from './Modal';
import { useWrapperRootClassName } from './hooks/useWrapperRootClassName';
import { ModalAnimation } from './types/modal-animation.types';

type ModalWrapperProps = {
  title: string;
  Content: React.FC;
  Footer: React.FC | null;
  outsideAnimation?: ModalAnimation;
  modalAnimation?: ModalAnimation;
  width?: string;
};

export const ModalWrapper = ({
  children,
  title,
  Content,
  Footer,
  outsideAnimation = 'blow',
  modalAnimation = 'move',
  width,
}: PropsWithChildren<ModalWrapperProps>) => {
  const rootClassName = useWrapperRootClassName(outsideAnimation);

  return (
    <>
      <div className={rootClassName}>{children}</div>
      <Modal
        title={title}
        Content={Content}
        Footer={Footer}
        animation={modalAnimation}
        width={width}
      />
    </>
  );
};
