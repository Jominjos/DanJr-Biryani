import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen bg-black flex flex-col items-left justify-center md:px-32 px-5">
      <h1 className=" text-4xl text-white font-semibold textalign-start  lg:pt-16 pt-24 pb-10">
        Hear it from our <span className="text-yellow-500">
          
          customers
          </span>
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azura" />
        <ReviewCard img={img2} name="John Deo" />
        <ReviewCard img={img3} name="Victoria Zoe" />
      </div>
    </div>
  );
};

export default Review;
