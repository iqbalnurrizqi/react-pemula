import Button from "../molekul/Button.jsx"

import InputForm from "../molekul/index.jsx"


const FormRegister = () => {
    return (
        <form action="">
        <InputForm label="Fullname" type="text" placeholder="insert your fullname" name="fullname"/>
        <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"/>
        <InputForm label="Password" type="password" placeholder="******" name="password"/>
        <InputForm label="Confirm Password" type="password" placeholder="******" name="password"/>
     
      <Button ClassName="w-full">Register</Button>
    </form>
    );
}

export default FormRegister;