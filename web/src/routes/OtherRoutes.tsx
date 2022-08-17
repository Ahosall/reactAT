import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../views/Home/index";
import Profile from "./../views/Profile/index";

const OtherRoutes = (props: any) => {
  return (
    <BrowserRouter>
      <Navbar user={props.user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile user={props.user} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default OtherRoutes;
