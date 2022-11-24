import { useAtom } from 'jotai';

import CloseIcon from '@front/assets/icons/close-icon.svg';

import { useModalRootClassName } from './hooks/useModalRootClassName';
import { ModalContent, modalStateAtom } from './state/modal.state';
import { ModalAnimation } from './types/modal-animation.types';

interface ModalProps extends ModalContent {
  animation: ModalAnimation;
  width?: string;
}

export const Modal = ({
  title,
  Content,
  Footer,
  animation,
  width = 'w-96',
}: ModalProps) => {
  const [{ status }, setState] = useAtom(modalStateAtom);
  const animationClassName = useModalRootClassName(status, animation);

  const handleClose = () => {
    setState((state) => ({ ...state, status: 'closed' }));
  };

  return (
    <div
      tabIndex={-1}
      aria-hidden={status !== 'opened' ? 'true' : 'false'}
      className={`h-modal fixed right-0 left-0 top-20 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden sm:h-full md:inset-0 md:top-0 ${animationClassName}`}
    >
      <div className="relative contents h-full w-full max-w-2xl p-4 md:h-auto">
        <div className={`relative ${width} rounded-lg bg-gray-700 shadow`}>
          {/* Modal header */}
          <div className="flex items-start justify-between rounded-t border-b border-gray-600 p-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-600 hover:text-white"
              onClick={handleClose}
            >
              <CloseIcon className="h-5 w-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="space-y-6 py-6">
            <Content />
          </div>
          {/* Modal footer */}
          {Footer && (
            <div className="flex items-center space-x-2 rounded-b border-t border-gray-600 p-6">
              <Footer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
