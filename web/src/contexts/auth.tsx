import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";

import api from "../services/api";

interface IUserLogin {
  email: string;
  password: string;
}

interface iUserResponse {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface IAuthContextData {
  signed: boolean;
  user: object | null;
  Login(user: IUserLogin): Promise<string>;
  Logout(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<iUserResponse | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      (async () => {
        const lsUser = JSON.parse(storagedUser);

        const response = await api.get(
          `/auth/?auth=${storagedToken}&user=${lsUser.id}`
        );

        if (response.data.status === 200) {
          setUser(lsUser);
        }
      })();
    }
  }, []);

  const Login = async (user: IUserLogin) => {
    const response = await api.post("/auth/login", user);

    if (response.data.status === 200) {
      let rUser = response.data.user;
      delete rUser.password;

      setUser(rUser);

      localStorage.setItem("@App:user", JSON.stringify(response.data.user));
      localStorage.setItem("@App:token", response.data.token);

      return "User logged!";
    } else if (response.data.status === 403) {
      return response.data.message;
    }
  };

  const Logout = async () => {
    await api.post("/auth/logout", {
      id: user?.id,
    });

    setUser(null);

    localStorage.removeItem("@App:user");
    localStorage.removeItem("@App:token");
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
