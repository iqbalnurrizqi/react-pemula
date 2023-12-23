import React from 'react';

const Button = (props) => {
    const { onClick=() => {}, ClassName, children, type="button" } = props;
    return (
        <button 
        className={`h-10 ${ClassName} rounded-lg px-6 py-2 bg-blue-600 text-white font-medium hover:bg-slate-300 hover:text-slate-900`}
        type={type}
        onClick={onClick}>{children}</button> 
    );
}

export default Button;