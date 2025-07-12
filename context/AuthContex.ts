import { createContext } from 'react';

export type AuthContextType = {
  user: { email: string } | null;
  role: string;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  role: '',
  logout: () => {},
});
