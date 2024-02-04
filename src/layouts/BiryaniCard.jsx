import React from "react";

import Button from "./Button";

const BiryaniCard = (props) => {
  console.log(props.details);
  const cardStyles = {
    borderRadius: "50px",
    border: " 1px solid #E5914F",
    background: "linear-gradient(rgb(0 0 0 / 40%) 0%, rgb(38 37 37) 100%)",
    backgroundClip: "padding-box",
  };

  return (
    <div style={cardStyles} className=" w-full lg:w-1/4 p-5  rounded-lg">
      <img
        className=" rounded-xl lg:h-108 mx-auto "
        src={props.details.img}
        alt="img"
      />
      <div className=" space-y-4">
        <h2 className=" text-yellow-500 font-semibold text-center text-xl pt-6">
          {props.details.heading}
        </h2>
        <h3 className=" text-white font-semibold text-center text-xl pt-6">
          {props.details.name}
        </h3>
        <h2 className="text-gray-500 text-center"> {props.details.des}</h2>
        <div className=" flex flex-row items-center justify-center gap-4">
          <h3 className=" text-yellow-500  font-semibold text-lg">
            ₹{props.details.price}
          </h3>
          {/* <Button title="Buy Now" /> */}
        </div>
      </div>
    </div>
  );
};

export default BiryaniCard;

//f
