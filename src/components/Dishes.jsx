import React from "react";
import bimg1 from "../assets/img/img1.jpg";
import bimg2 from "../assets/img/img2.jpg";
import bimg3 from "../assets/img/img3.jpg";
import aimg1 from "../assets/img/addon1.png";
import aimg2 from "../assets/img/addon2.png";
import aimg3 from "../assets/img/addon3.png";
import dimg1 from "../assets/img/desert1.png";
import dimg2 from "../assets/img/desert2.png";
// import DishesCard from "../layouts/DishesCard";
import BiryaniCard from "../layouts/BiryaniCard";
// import Button from "../layouts/Button";
const biryanisdata = [
  {
    heading: "Chicken ",
    name: "Biryani Combo",
    des: "served with egg raita,Bread halwa brinjal",
    img: bimg1,
    price: "394",
  },
  {
    heading: "Mutton",
    name: "Biryani Combo",
    des: "served with egg raita,Bread halwa brinjal",
    img: bimg2,
    price: "494",
  },
  {
    heading: "Egg",
    name: "Biryani Combo",
    des: "served with egg raita,Bread halwa brinjal",
    img: bimg3,
    price: "294",
  },
];
const addondata = [
  {
    heading: "Chicken 65 ",
    name: "Biryani Combo",
    des: "250 grams, 5 to 6 pieces with bone pieces",
    img: aimg1,
    price: "394",
  },
  {
    heading: "Fresh Raitha",
    name: "Biryani Combo",
    des: "Made with fresh tender coconut pulps, milk and jaggery",
    img: aimg2,
    price: "494",
  },
  {
    heading: "Brinjal Gravy",
    name: "Biryani Combo",
    des: "Freshly made yummy brinjal gravy",
    img: aimg3,
    price: "294",
  },
];
const desertdata = [
  {
    heading: "Elaneer Payasam ",
    name: "Biryani Combo",
    des: "served with egg raita,Bread halwa brinjal",
    img: dimg1,
    price: "394",
  },
  {
    heading: "Bread Halwa",
    name: "Biryani Combo",
    des: "served with egg raita,Bread halwa brinjal",
    img: bimg2,
    price: "494",
  },
];
const Dishes = () => {
  return (
    <>
      <div className=" bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className=" text-4xl font-semibold text-yellow-500 text-center pt-24 pb-10">
          Biryanis
        </h1>

        <div className=" flex flex-wrap gap-8 justify-center">
          {biryanisdata &&
            biryanisdata.length > 0 &&
            biryanisdata.map((d, i) => (
              <BiryaniCard details={d} key={d.name} />
            ))}
          {/* <BiryaniCard details={biryanisdata[0]}/>
        <DishesCard img={img2} title="Tasty Dish" price="$12.99" /> */}
        </div>
        {/*       
      <div className="mt-9 mb-9">
          <Button title="View More" />
        </div> */}
      </div>
      <div className=" bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className=" text-4xl font-semibold text-yellow-500 text-center pt-24 pb-10">
          Add on
        </h1>

        <div className=" flex flex-wrap gap-8 justify-center">
          {addondata &&
            addondata.length > 0 &&
            addondata.map((d, i) => <BiryaniCard details={d} key={d.name} />)}
          {/* <BiryaniCard details={biryanisdata[0]}/>
       <DishesCard img={img2} title="Tasty Dish" price="$12.99" /> */}
        </div>

        {/* <div className="mt-9 mb-9">
         <Button title="View More" />
       </div> */}
      </div>
      <div className=" bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className=" text-4xl font-semibold text-yellow-500 text-center pt-24 pb-10">
          Deserts
        </h1>

        <div className=" flex flex-wrap gap-8 justify-center">
          {desertdata &&
            desertdata.length > 0 &&
            desertdata.map((d, i) => <BiryaniCard details={d} key={d.name} />)}
          {/* <BiryaniCard details={biryanisdata[0]}/>
       <DishesCard img={img2} title="Tasty Dish" price="$12.99" /> */}
        </div>

        {/* <div className="mt-9 mb-9">
         <Button title="View More" />
       </div> */}
      </div>
    </>
  );
};

export default Dishes;
