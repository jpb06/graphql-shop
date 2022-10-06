import { randomNumber } from '../logic/random-number';

// ):
const backgrounds = [
  'bg-credit-card-1',
  'bg-credit-card-2',
  'bg-credit-card-3',
  'bg-credit-card-4',
  'bg-credit-card-5',
  'bg-credit-card-6',
  'bg-credit-card-7',
  'bg-credit-card-8',
  'bg-credit-card-9',
  'bg-credit-card-10',
  'bg-credit-card-11',
  'bg-credit-card-12',
  'bg-credit-card-13',
  'bg-credit-card-14',
  'bg-credit-card-15',
];

export const getRandomBackground = () => backgrounds[randomNumber(15)];
