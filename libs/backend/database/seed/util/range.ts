import { randomNumberBetween } from './random-number-between';

export const range = (length: number): Array<number> =>
  Array.from(Array(length), (_, i) => i + 1);

export const rangeBetween = (min: number, max: number): Array<number> =>
  range(randomNumberBetween(min, max));
