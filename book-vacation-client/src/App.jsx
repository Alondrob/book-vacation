import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Register from "./pages/registration-pages/Register";
import Main from "./pages/layout-pages/Main";
import SignIn from "./pages/registration-pages/SignIn";
import Property from "./pages/registration-pages/Property";
import PostProperty from "./pages/registration-pages/PostProperty";
import PrivateRoute from "./components/shared-components/PrivateRoute";
import { auth } from "./redux/slices/userSlice";
import userEvent from "@testing-library/user-event";

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  useEffect( () => {
    if (localStorage.getItem('user')) {
      const user =  JSON.parse(localStorage.getItem('user'));
      console.log("user", user)
      dispatch(auth(user));
    }
  }, []);
  console.log(user === null)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/post-property" element={<PostProperty />} />

        <Route path="/property/:id" element={<Property />} />
      </Routes>
    </Router>
  );
};

export default App;
