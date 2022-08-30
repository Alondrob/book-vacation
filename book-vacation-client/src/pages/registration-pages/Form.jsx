import React from "react";
import { useNavigate } from "react-router-dom";
import FormItem from '../../components/shared-components/FormItem';

import HeaderLayout from "../../components/header/HeaderLayout";

const Form = ({ renderFormPage }) => {
  const navigate = useNavigate();

  const signIn = () => {
    navigate("/register");
    renderFormPage();
  };

  return (
    <div >
      <HeaderLayout/>
      <FormItem name='Register' />
      <FormItem name='Login'/>
      <FormItem name='Host Your Home'/>
      <FormItem name='Help'/>

    </div>
  );
};

export default Form;
