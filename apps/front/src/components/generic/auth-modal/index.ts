import { ModalStep } from '@front/components';

import { AuthModalContent } from './AuthModalContent';

export const AuthModal: ModalStep = {
  title: 'Authentication',
  Content: AuthModalContent,
  Footer: null,
};
