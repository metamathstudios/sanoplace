import { createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const isAuthenticated = false;

  async function signUp() {}

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
