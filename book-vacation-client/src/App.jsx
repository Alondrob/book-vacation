import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import React from "react";

import HeaderLayout from "./components/header/HeaderLayout";
import Feed from "./components/layouts/Feed";
import Form from "./pages/registration-pages/Form";
import Register from "./pages/registration-pages/Register";
import Main from "./pages/layout-pages/Main";
import SignIn from "./pages/registration-pages/SignIn";
import Property from "./pages/registration-pages/Property";
import RegisterProperty from "./pages/registration-pages/RegisterProperty";
import HostYourHome from "./pages/misc-pages/HostYourHome";
import Help from "./pages/misc-pages/Help";
import PostProperty from "./pages/registration-pages/PostProperty";
const App = () => {
  const userData = useSelector((state) => state.user.user);

  console.log(userData);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/host_your_home" element={<PostProperty />} />
        <Route path="/post-property" element={<PostProperty />} />
        <Route path="/property/:id" element={<Property />} />
      </Routes>
    </Router>
  );
};

export default App;
