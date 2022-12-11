import React from "react";
import img2 from "../img/my-bg.png";

const Aboutme = () => {
  return (
    <div id="aboutme" className="p-20 bg-slate-700">
      <div className="md:flex container mx-auto items-center gap-6">
        <div className="md:w-1/2 p-14">
          <img src={img2} alt="" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-center text-5xl font-semibold mb-5  text-orange-400">
            About me
          </h1>
          <p className="text-lg text-white">
            I am a professional web developer. I working in this field 1+ year.
            I love to do coding. My first technology is Ract JS. I have done so
            many porject with MERN technology I am expert with HTMl, CSS,
            JavaScript, Tailwind CSS, REact JS, Mongo DB, Express JS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
