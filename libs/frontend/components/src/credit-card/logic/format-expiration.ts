export const formatExpiration = (
  expirationMonth?: string,
  expirationYear?: string
): string => {
  if (!expirationMonth && !expirationYear) {
    return '••/••';
  }

  return `${expirationMonth || '••'}/${
    expirationYear ? expirationYear.slice(-2) : '••'
  } `;
};
