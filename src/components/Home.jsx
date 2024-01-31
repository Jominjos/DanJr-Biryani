import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen pt-32 flex flex-col lg:flex-row justify-between items-center  lg:px-32 px-5 bg-[url('./assets/img/mainherosm.png')] bg-cover bg-no-repeat sm:bg-[url('./assets/img/mainhero.png')] ">
      <div className="w-full lg:w-3/5 lg:mr-5  space-y-5 ">
        <h1 className="text-backgroundColor space-y-8 text-white font-semibold text-4xl lg:text-6xl ">
          <div className="text-yellow-500">Authentic</div>
          <div>
            Firewood <span className="text-yellow-500">Biryanis</span>
          </div>
          <div>in Wedding Style</div>
        </h1>
        <p className="text-backgroundColor space-y-5 lg:w-4/6">
          Discover the art of Viragu Aduppu Biryani, crafted in wedding style. Immerse yourself in authentic flavors, straight from our cloud kitchen to your table. A culinary ode to Tamil Nadu's taste buds
        </p>
        <div className="">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
