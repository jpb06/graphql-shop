import Spinner from '../../../../public/icons/spinner.svg';
import { useLoginForm } from './hooks/useLoginForm';

export const AuthModalContent = () => {
  const { register, onSubmit, isLoading, formErrors, authError } =
    useLoginForm();

  return (
    <div className="px-6 pb-6 lg:px-8">
      <h3 className="mb-4 text-xl font-medium text-white">
        Sign in to our platform
      </h3>
      <form className="space-y-6" onSubmit={onSubmit}>
        <>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-500 bg-gray-600 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              placeholder="name@company.com"
              required
              {...register('email', { required: true })}
              disabled={Boolean(isLoading)}
            />
            {formErrors.email && (
              <p className="mt-2 text-sm text-red-500">
                {formErrors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              required
              {...register('password', { required: true })}
              disabled={Boolean(isLoading)}
            />
            {formErrors.password && (
              <p className="mt-2 text-sm text-red-500">
                {formErrors.password.message}
              </p>
            )}
          </div>
        </>
        <div className="flex justify-end">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={Boolean(isLoading)}
        >
          {isLoading ? (
            <Spinner className="h-4 w-4 animate-spin text-sky-700" />
          ) : (
            'Login to your account'
          )}
        </button>
        {authError && (
          <div className="text-center text-red-400">
            Login failed; please verify your username and password
          </div>
        )}
        <div className="text-sm font-medium text-gray-300">
          Not registered?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Create account
          </a>
        </div>
      </form>
    </div>
  );
};
