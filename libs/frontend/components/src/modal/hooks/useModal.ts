import { useAtom } from 'jotai';

import {
  ModalContent,
  modalStateAtom,
  ModalStatus,
} from '../state/modal.state';

export const useModal = () => {
  const [, setModalState] = useAtom(modalStateAtom);

  const updateModal = (
    content: ModalContent | undefined,
    status: ModalStatus = 'opened'
  ) => {
    setModalState(() => ({
      status,
      content,
    }));
  };

  return { updateModal };
};
