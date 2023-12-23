import React from 'react';
import AutsLayouts from '../assets/attomic design/Layouts/AutsLayouts';
import FormRegister from '../assets/attomic design/Fragments/FormRegister';

const RegisterPage = () => {
    return (
        <AutsLayouts title="Register" type="register">
            <FormRegister/>
            
        </AutsLayouts>
    );
}

export default RegisterPage;