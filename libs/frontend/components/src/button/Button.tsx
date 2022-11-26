import { forwardRef, LegacyRef, PropsWithChildren } from 'react';

import Spinner from '@front/assets/icons/spinner.svg';

import { getVariantClasses } from './logic/get-variant-classes';
import { ButtonVariant } from './types/button-variant.type';

type ButtonProps = {
  onClick?: () => void;
  variant: ButtonVariant;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
};

export const Button = forwardRef(
  (
    {
      onClick,
      variant,
      className = '',
      isLoading = false,
      loadingText,
      children,
    }: PropsWithChildren<ButtonProps>,
    ref: LegacyRef<HTMLButtonElement> | undefined
  ) => {
    const variantStyles = getVariantClasses(variant);

    return (
      <button
        ref={ref}
        type="submit"
        className={`mr-2 mb-2 rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4 ${variantStyles} ${className} inline-flex items-center justify-center text-center text-xl`}
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Spinner className="mr-2 h-4 w-4 animate-spin text-sky-700" />
            {loadingText}
          </>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  }
);
