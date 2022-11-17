export const formatCvc = (
  cvc: string | undefined,
  cvcLength: number,
  isInput: boolean
): string => {
  if (!cvc) {
    return isInput ? '' : '•••';
  }

  if (cvc.length > 3) {
    return cvc.substring(0, 3);
  }

  if (!isInput) {
    while (cvc.length < cvcLength) {
      cvc += '•';
    }
  }

  return cvc;
};
