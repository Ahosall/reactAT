import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../views/Login/index";

const SignRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SignRoutes;
