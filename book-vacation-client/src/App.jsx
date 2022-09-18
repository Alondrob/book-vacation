import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";

import HeaderLayout from './components/header/HeaderLayout';
import Feed from './components/layouts/Feed';
import Form from './pages/registration-pages/Form';
import Register from './pages/registration-pages/Register';
import Main from './pages/layout-pages/Main';
import SignIn from "./pages/registration-pages/SignIn";
import Property from "./pages/registration-pages/Property";
import HostYourHome from "./pages/misc-pages/HostYourHome";
import Help from "./pages/misc-pages/Help";
const App = () => {
  return (
    <Router>
   
        
      <Routes>
     
        <Route path="/" element={<Main/>}/>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/host_your_home" element={<HostYourHome />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        {/* <Route path="/property" element={<Property/>}></Route> */}
        <Route path="/property/:id" element={<Property/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
