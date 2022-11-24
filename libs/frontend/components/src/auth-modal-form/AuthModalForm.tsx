import { BaseSyntheticEvent } from 'react';
import { Control } from 'react-hook-form';

import { Button, Input, Title } from '..';
import { CreateAccount } from './children/CreateAccount';
import { LostPassword } from './children/LostPassword';
import { LoginFormModel } from './hooks/useLoginForm';

type AuthModalFormProps = {
  control: Control<LoginFormModel, unknown>;
  onSubmit: (
    e?: BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => Promise<void>;
  isLoading: boolean;
  error: unknown;
};

export const AuthModalForm = ({
  onSubmit,
  control,
  isLoading,
  error,
}: AuthModalFormProps) => (
  <div className="px-6 pb-6 lg:px-8">
    <Title>Sign in to our platform</Title>
    <form className="space-y-6" onSubmit={onSubmit}>
      <>
        <Input
          control={control}
          type="email"
          name="email"
          label="Your email"
          placeholder="name@company.com"
          isLoading={isLoading}
        />
        <Input
          control={control}
          type="password"
          name="password"
          label="Your password"
          placeholder="••••••••"
          isLoading={isLoading}
        />
        <LostPassword />
        <Button
          isLoading={isLoading}
          variant="blue"
          className="w-full"
          loadingText="Logging in ..."
        >
          Login to your account
        </Button>
        {error && (
          <div className="text-center text-red-400">
            Login failed - Please verify your username and password
          </div>
        )}
        <CreateAccount />
      </>
    </form>
  </div>
);
