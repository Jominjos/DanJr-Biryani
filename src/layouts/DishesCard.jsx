import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  console.log(props);

  const cardStyles={
    borderRadius: "50px",
border:" 1px solid #E5914F",
backgroundColor:"white",
background: "linear-gradient(360deg, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",

}
  
  return (
    <div style={cardStyles} className=" w-full lg:w-1/4 p-5  rounded-lg">
      <img className=" rounded-xl ml-auto" src={props.img} alt="img" />
      <div className=" space-y-4">
        <h3 className=" font-semibold text-center text-xl pt-6">{props.title}</h3>
        
        <div className=" flex flex-row items-center justify-center gap-4">
          <h3 className=" font-semibold text-lg">{props.price}</h3>
          <Button title="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
