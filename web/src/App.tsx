import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";

import PageNotFound from "./views/error/404";

import Home from "./views/home/index";
import Preview from "./views/preview/index";

import Profile from "./views/profile/index";

import Login from "./views/login/index";

import { useAuth } from "./contexts/auth";

function App() {
  const { signed, user } = useAuth();

  return (
    <BrowserRouter>
      <Header logged={signed} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="*" element={<PageNotFound />} />

        {signed ? (
          <>
            <Route path="/profile" element={<Profile user={user} />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Home />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
