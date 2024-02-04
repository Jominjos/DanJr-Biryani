import React from "react";
// import img from "../assets/img/aboutus.png";
import Button from "../layouts/Button";
import ReviewCard from "../layouts/ReviewCard";

const About = () => {
  return (
    <div className="  bg-black min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 ">
      <div className=" space-y-4 lg:pt-14">
        <h1 className=" text-white font-semibold text-4xl text-center md:text-start">
          About<span className="text-yellow-500">Us</span>
        </h1>

        <div className=" flex flex-col md:flex-row gap-5 mt-5">
          <ReviewCard
            key={1}
            url={
              "https://www.youtube.com/embed/BOWKURpNDfo?si=D8x9sQ4V5RlfjVDS"
            }
          />
          <ReviewCard url={"https://www.youtube.com/embed/qbrOHPt-cN0"} />
          <ReviewCard url={"https://www.youtube.com/embed/P-0VvySSxrw"} />
        </div>

        <div className="w-1/1 text-white ">
          <p>
            At the heart of{" "}
            <span className="text-red-500">Danjr Wedding Biryani</span> is the
            vision of Dan Jr who is a youtuber having 2.4M+ subscribers,
            blending passion and expertise to redefine your biryani experience.
            With a legacy rooted in tradition, our biryanis reflect the
            authentic flavors of a bygone era, carefully prepared in a
            contemporary cloud kitchen setting.
          </p>
          <p>
            Our commitment extends beyond culinary excellence; it's about
            sharing the joy of flavorful biryanis that transcend borders. Each
            plate is a testament to our dedication to quality, taste, and the
            cultural heritage of biryani-making.
          </p>
          <p>
            Driven by a love for the craft, Dan Jr's culinary journey unfolds in
            every biryani we serve, inviting you to savor the essence of
            tradition with each delicious bite. Welcome to Danjr Wedding
            Biriyani, where passion meets plate, and every meal is a celebration
            of timeless taste.
          </p>
        </div>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>

      {/*  <img className="w-1/2" src={img} alt="img" /> */}
    </div>
  );
};

export default About;
//fs
