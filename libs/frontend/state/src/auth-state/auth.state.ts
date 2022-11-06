import { atom } from 'jotai';

// Extracting this type to avoid a circular dep issue with @front/types
type GqlAuthOutput = {
  id: number;
  email: string;
  lastName: string;
  firstName: string;
  joinDate: Date;
  role: string;
  token: string;
};

export const authState = atom<
  Omit<GqlAuthOutput, 'joinDate' | 'role'> | undefined
>(undefined);
