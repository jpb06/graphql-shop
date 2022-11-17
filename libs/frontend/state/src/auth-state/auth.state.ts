import { atom } from 'jotai';

// Extracting this type to avoid a circular dep issue with @front/types
type GqlAuthOutput = {
  id: string;
  email: string;
  lastName: string;
  firstName: string;
  joinDate: Date;
  role: string;
  token: string;
};

export const authStateAtom = atom<
  Omit<GqlAuthOutput, 'joinDate' | 'role'> | undefined
>(undefined);
