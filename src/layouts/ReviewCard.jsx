import React from "react";

const ReviewCard = (props) => {
  const cardStyles={
    borderRadius: "50px",
border:" 1px solid #E5914F",
background: "linear-gradient(rgb(0 0 0 / 40%) 0%, rgb(38 37 37) 100%)",
backgroundClip: 'padding-box'
  }
  return (
    <div style={cardStyles}  className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
      <iframe width="350" height="200" src={props.url} title="Video Editing CRASH COURSE I Learn Davinci Resolve in 1 Hour" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        {/* <img className=" rounded-full w-1/4" src={props.img} alt="img" /> */}
        {/* <h3 className=" font-semibold ">{props.name}</h3> */}
      </div>
    </div>
  );
};

export default ReviewCard;
