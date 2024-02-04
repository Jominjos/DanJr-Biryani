import React from "react";

const ReviewCard = (props) => {
  const cardStyles={
    
border:" 2px solid #E5914F",
background: "linear-gradient(rgb(0 0 0 / 40%) 0%, rgb(38 37 37) 100%)",
backgroundClip: 'padding-box'
  }
  return (
    <div style={cardStyles}  className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none     shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="flex items-center justify-center">
      <iframe width="350" height="200" src={props.url} title="Video Editing CRASH COURSE I Learn Davinci Resolve in 1 Hour" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>

     
    </div>
  );
};

export default ReviewCard;
