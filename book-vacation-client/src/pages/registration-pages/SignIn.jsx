import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/header/HeaderLayout";
import FormField from "../../components/shared-components/FormField";
import RegistrationButton from "../../components/shared-components/RegistrationButton";
import { loginUser } from "../../redux/api-requests/userRequests";

const SignIn = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (stateName, value) => {
    switch (stateName) {
      case "email": {
        setFormData({ ...formData, email: value });
        break;
      }
      case "password": {
        setFormData({ ...formData, password: value });
        break;
      }
    }
  };
  
  const login = () => {
      dispatch(loginUser(formData))
  }
  return (
    <div className=" h-screen bg-vacation-pattern">
      <Header />

      <FormField
        stateName={"email"}
        placeholder={"Email..."}
        type={"email"}
        marginTop={"mt-36"}
        handleInput={handleInput}
      />
      <FormField
        stateName={"password"}
        placeholder={"Password..."}
        type={"password"}
        handleInput={handleInput}
      />
      <RegistrationButton
        name={"Login"}
        marginTop={"mt-12"}
        submitFunction={login}
      />
    </div>
  );
};

export default SignIn;
