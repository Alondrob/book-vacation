import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector,  useDispatch  } from "react-redux";
import { useState,useEffect } from "react";


import HeaderLayout from "./components/header/HeaderLayout";
import Feed from "./components/layouts/Feed";
import Form from "./pages/registration-pages/Form";
import Register from "./pages/registration-pages/Register";
import Main from "./pages/layout-pages/Main";
import SignIn from "./pages/registration-pages/SignIn";
import Property from "./pages/registration-pages/Property";
import PostProperty from "./pages/registration-pages/PostProperty";
import PrivateRoute from "./components/shared-components/PrivateRoute";
import { auth } from "./redux/slices/userSlice";

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const userObject = JSON.parse(localStorage.getItem('user'));
    dispatch(auth(userObject));
  }, []);

  const validToken = useSelector((state) => state.user.token);
  console.log(validToken);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route
          path="/post-property" element={validToken ? <PostProperty/> : <SignIn/>}
        />

        <Route path="/property/:id" element={validToken ? <Property/> : <SignIn/>} />
      </Routes>
    </Router>
  );
};

export default App;
