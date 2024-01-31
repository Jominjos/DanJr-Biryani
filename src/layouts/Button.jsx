import React from "react";

const Button = (props) => {
 
  return (
    <div>
      <button className=" font-bold px-6 py-3 border-2 border-white text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all rounded-md">
       
        {props.title}
          
      </button>
    </div>
  );
};

export default Button;
