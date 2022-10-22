import { Button, Input } from '@front/components';

import { CreateAccount } from './children/CreateAccount';
import { LostPassword } from './children/LostPassword';
import { useLoginForm } from './hooks/useLoginForm';

export const AuthModalContent = () => {
  const { onSubmit, isLoading, authError, control } = useLoginForm();

  return (
    <div className="px-6 pb-6 lg:px-8">
      <h3 className="mb-4 text-xl font-medium text-white">
        Sign in to our platform
      </h3>
      <form className="space-y-6" onSubmit={onSubmit}>
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
        {authError && (
          <div className="text-center text-red-400">
            Login failed - Please verify your username and password
          </div>
        )}
        <CreateAccount />
      </form>
    </div>
  );
};
