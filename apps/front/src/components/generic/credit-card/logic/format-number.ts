const fillArray = (count: number, value: string) =>
  count === 0 ? '' : new Array<string>(count).fill(value).join('');

const format = (number: string, isInput: boolean): string => {
  const numberWithoutSpaces = number.split('').filter((c) => c !== ' ');
  let formattedValue = '';

  let index = 0;
  let numberIndex = 0;
  while (isInput ? numberIndex < number.length : numberIndex < 16) {
    const isSpace = index === 4 || index === 9 || index === 14;

    if (isSpace) {
      formattedValue += ' ';
    } else {
      formattedValue += numberWithoutSpaces[numberIndex];
      numberIndex++;
    }
    index++;
  }

  return formattedValue;
};

export const formatNumber = (
  creditCardNumber: string | undefined,
  isInput: boolean
): string => {
  const value = creditCardNumber?.replace(/\D/g, '');

  if (!value || value.length === 0) {
    return isInput ? '' : format(fillArray(16, '•'), isInput);
  }

  if (value.length < 16) {
    const maybeFilledValue = isInput ? '' : fillArray(16 - value.length, '•');
    return format(`${value}${maybeFilledValue}`, isInput);
  }

  return format(value, isInput);
};
