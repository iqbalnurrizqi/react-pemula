import { useEffect, useRef, useState } from "react";
import Button from "../molekul/Button.jsx";
import InputForm from "../molekul/index.jsx";
import { login } from "../../../services/Auth.services.js";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {

    event.preventDefault();
    // localStorage.setItem("isLogin", event.target.email.value )
    // localStorage.setItem("isPassword", event.target.password.value )
    
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res); 
        window.location.href = "/products"
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="username"
        type="text"
        placeholder="Djon Doe"
        name="username"
        ref={usernameRef}
        />
      <InputForm
        label="Password  "
        type="password"
        placeholder="******"
        name="password"
        />

      <Button ClassName="w-full" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
