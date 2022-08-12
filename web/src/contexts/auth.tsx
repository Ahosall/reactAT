import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";

import api, { settings } from "../services/api";

interface IUserLogin {
  email: string;
  password: string;
}

interface IAuthContextData {
  signed: boolean;
  user: object | null;
  Login(user: IUserLogin): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      settings.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  const Login = async (user: IUserLogin) => {
    const response = await api.post("/login", user);

    setUser(response.data.user);

    localStorage.setItem("@App:user", JSON.stringify(response.data.user));
    localStorage.setItem("@App:token", response.data.token);
  };

  const Logout = () => {
    setUser(null);

    sessionStorage.removeItem("@App:user");
    sessionStorage.removeItem("App:token");
  };

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
