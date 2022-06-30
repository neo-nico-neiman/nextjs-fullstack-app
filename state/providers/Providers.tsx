import { ReactNode } from 'react';
import { AuthProvider } from '../auth/AuthContext';

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
