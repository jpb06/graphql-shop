import { ButtonVariant } from '../types/button-variant.type';

export const getVariantClasses = (variant: ButtonVariant) => {
  switch (variant) {
    case 'blue':
      return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 text-white';
    case 'green':
      return 'bg-green-600 hover:bg-green-700 focus:ring-green-800 text-white';
    case 'neutral':
      return 'border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-900 focus:z-10 focus:ring-gray-700 bg-gray-800';
  }
};
