import React from "react";
import AutsLayouts from "../assets/attomic design/Layouts/AutsLayouts";
import FormLogin from "../assets/attomic design/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AutsLayouts title="login" type="login">
      <FormLogin />
    </AutsLayouts>
  );
};

export default LoginPage;
