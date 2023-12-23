import React from "react";

 const Button = (props) => {
  return (
     <button href="/dashboard" className={`rounded-lg px-3 py-2 text-${props.classes}-700 font-medium hover:bg-slate-300 hover:text-slate-900`}>{props.text}</button> 
  )
}

function Button2(props) {
  return (
    <button href="/dashboard" className={`rounded-lg px-3 py-2 text-${props.variant}-500  font-medium hover:bg-slate-300 hover:text-slate-900`}>{props.children}</button> 
  )
}


const Button11 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Home", "/dashboard"],
          ["Team", "/team"],
          ["Projects", "/projects"],
          ["Reports", "/reports"],
          ["About", "/about"]
        ].map(([title, url]) => (
          <button
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </button>
        ))}
        <button className="rounded-lg px-3 py-2 text-green-500 font-medium hover:bg-slate-300 hover:text-slate-900" href="/class">Class</button>
        <Button classes="slate" text="haha"/>
        <Button2 variant="yellow">haha kebantai RSG</Button2>
      </nav>
    </div>
  );
};

export default Button11;

