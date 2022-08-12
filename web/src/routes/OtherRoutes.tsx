import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/Home/index";

const OtherRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default OtherRoutes;
