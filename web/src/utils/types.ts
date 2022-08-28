export interface IUserLogin {
  login: string;
  password: string;
}

export interface IUserResponse {
  id: number;
  name: string;
  login: string;
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: number;
  message: string;
}

export interface IAuthContextData {
  signed: boolean;
  user: IUserResponse | null;
  Login(user: IUserLogin): Promise<ILoginResponse>;
  Logout(): void;
}

export type TWorkChapters = {
  id: number;
  chapter: number;
  title: number;
  date: string;
};

export interface IWorkResponse {
  id: number;
  name: string;
  image: string;
  genres: Array<string>;
  sinopse: string;
  author: string;
  chapters: Array<TWorkChapters>;
}

export type IWorksResponse = [
  {
    title: string;
    works: Array<IWorkResponse>;
  }
];
