import { render, screen } from '@test-utils/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import AuthButton from './AuthButton';

describe('AuthButton', () => {
  test('Should match the snapshot', () => {
    const { asFragment } = render(<AuthButton />);
    expect(asFragment).toMatchSnapshot();
  });

  test('Should have text LogIn when user is logOut', () => {
    render(<AuthButton />);
    expect(
      screen.getByRole('button', { name: /sign in/i })
    ).toBeInTheDocument();
  });

  test('Should toggle states', async () => {
    render(<AuthButton />);
    const signIn = screen.getByRole('button', { name: /sign in/i });
    expect(signIn).toBeInTheDocument();
    await userEvent.click(signIn);

    const signOut = screen.getByRole('button', { name: /sign out/i });
    expect(signOut).toBeInTheDocument();
    await userEvent.click(signOut);

    expect(signIn).toBeInTheDocument();
  });
});
