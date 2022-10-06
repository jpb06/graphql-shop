import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { modalStateAtom } from '../modal.state';

export const useResetModalStateOnFirstRender = () => {
  const [, setState] = useAtom(modalStateAtom);

  useEffect(() => {
    setState('idle');
  }, [setState]);
};
