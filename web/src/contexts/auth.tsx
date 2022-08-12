import { createContext, useState } from "react";
import api from "./../services/api";

interface AuthContextData {
  signed: boolean;
  Login(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  return (
    <AuthContext.Provider value={{ signed: true, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

const Login = async () => {
  const [user, setUser] = useState<object | null>(null);

  const response = await api.post("/login", {
    email: "ahosall@email.com",
    password: "123456",
  });

  setUser(response.data.user);
};

export default AuthContext;
