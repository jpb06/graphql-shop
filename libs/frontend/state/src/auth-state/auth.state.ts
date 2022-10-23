import { atom } from 'jotai';

import { GqlAuthOutput } from '@front/api';

export const authState = atom<
  Omit<GqlAuthOutput, 'joinDate' | 'role'> | undefined
>(undefined);
