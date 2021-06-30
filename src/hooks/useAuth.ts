import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type UseAuthReturnType = {
  user: User | undefined;
  signInWithGoogle: () => void;
};

export function useAuth(): UseAuthReturnType {
  const value = useContext(AuthContext);

  return value;
}
