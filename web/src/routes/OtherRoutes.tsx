import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../views/Home/index";

const OtherRoutes = (props: any) => {
  return (
    <BrowserRouter>
      <Navbar user={props.user} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default OtherRoutes;
