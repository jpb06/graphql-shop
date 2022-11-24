import { useAtom } from 'jotai';

import { modalStateAtom } from '@front/components';

import { AuthModal } from '../modal/auth-modal';

export const useLoginModal = () => {
  const [, setModalState] = useAtom(modalStateAtom);

  const handleLoginClick = () => {
    setModalState(() => ({
      status: 'opened',
      content: AuthModal,
    }));
  };

  return { handleLoginClick };
};
