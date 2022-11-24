import { atom } from 'jotai';

export type ModalStatus = 'idle' | 'opened' | 'closed';

export type ModalContent = {
  title: string;
  Content: React.FC;
  Footer: React.FC | null;
  width?: string;
};

export type ModalState = {
  status: ModalStatus;
  content?: ModalContent;
};

export const modalStateAtom = atom<ModalState>({
  status: 'idle',
});
