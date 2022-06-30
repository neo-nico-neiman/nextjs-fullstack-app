import AuthContext from '@state/auth/AuthContext';
import { useContext } from 'react';

export interface IAuthButton extends React.ComponentPropsWithoutRef<'button'> {}

const AuthButton: React.FC<IAuthButton> = ({ className, ...buttonProps }) => {
  const { authenticated, logIn, logOut } = useContext(AuthContext);

  return (
    <button
      {...buttonProps}
      className={`${className} btn-primary`}
      onClick={authenticated ? logOut : logIn}
    >
      {authenticated ? 'Sign Out' : 'Sign In'}
    </button>
  );
};

export default AuthButton;
