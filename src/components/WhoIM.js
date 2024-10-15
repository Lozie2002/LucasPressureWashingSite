import React from "react";

function WhoIM() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-[70vh] flex flex-wrap items-center justify-center flex-col lg:flex-row relative bg-blue-700">
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10 z-20">
      
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-4/5">
          <span className="flex flex-col gap-3 text-white items-start text-base justify-center font-thin lg:text-lg">
          <h1 className="flex text-white text-2xl lg:text-4xl gap-2 font-bold">
           More About <p className="text-[#ad50eb]">Me</p>
                 </h1>
            <p className="text-start mt-3 mx-auto md:mx-0">
              I’m Aidan Lozell, a recent graduate with a degree in Computer Science, majoring in Cyber Security. 
              Throughout my studies, I built a strong foundation in areas like information security, threat analysis, and network protection. 
              I’m passionate about safeguarding systems from cyber threats and have gained hands-on experience with security protocols, ethical hacking, 
              and vulnerability assessments. Along the way, I sharpened my skills in programming, cryptography, and designing secure systems. 
              I love staying up to date with the latest developments in cyber security and I’m excited to apply what I’ve learned to real-world challenges, 
              helping to protect digital assets and networks in an ever-evolving landscape.
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center z-20">
       
      </div>
    </div>
  );
}

export default WhoIM;
