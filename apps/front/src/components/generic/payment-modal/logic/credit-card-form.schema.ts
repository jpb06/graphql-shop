import zod from 'zod';

import {
  creditCardRegex,
  cvcRegex,
  monthRegex,
  yearRegex,
} from './schema.validation';

export type PaymentFormModel = {
  number: string;
  name: string;
  expirationMonth: string;
  expirationYear: string;
  cvc: string;
};

export const formSchema: zod.ZodSchema<PaymentFormModel> = zod.object({
  number: zod
    .string()
    .min(1, 'Required')
    .refine((input) => creditCardRegex.test(input)),
  name: zod.string().min(1, 'Required'),
  expirationMonth: zod
    .string()
    .min(1, 'Required')
    .refine((input) => monthRegex.test(input)),
  expirationYear: zod
    .string()
    .min(1, 'Required')
    .refine((input) => yearRegex.test(input)),
  cvc: zod
    .string()
    .min(1, 'Required')
    .refine((input) => cvcRegex.test(input)),
});
