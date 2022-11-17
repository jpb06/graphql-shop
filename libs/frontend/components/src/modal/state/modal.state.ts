import { atom } from 'jotai';

export type ModalState = 'idle' | 'opened' | 'closed';

export const modalStateAtom = atom<ModalState>('idle');
