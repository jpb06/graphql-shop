export const obfuscateCreditCardNumber = (number: string): string => {
  const lastFourNumbers = number.slice(-4);

  return `${'•'.repeat(number.length - 4)}${lastFourNumbers}`;
};
