import React from 'react'
import myimage from "../images/home.jpg";


const HeroSection = ({ navigate, name }) => {
  return (
    <div className=" w-full h-auto flex flex-col sm:flex-row justify-around p-4 sm:p-16 bg-white">
      <div className="w-full sm:w-[98%] md:w-[50%] mb-4 sm:mb-0">
        <h6 className="text-start text-slate-600">WELCOME TO</h6>
        <h1 className=" font-bold text-4xl mb-3">Sanjay {name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex veritatis
          pariatur accusamus temporibus animi eum itaque et atque ut
          repudiandae,
        </p>
        <div className=" cursor-pointer mt-5 rounded w-28 p-2 text-center text-white bg-slate-500 hover:bg-blue-900" onClick={navigate}>
          Shop Now
        </div>
      </div>
      <div className="relative">
      <div className="hidden sm:block md:w-2/3 lg:w-1/2 xl:w-1/3 p-4 sm:p-24 absolute -top-7 -right-7 z-0 bg-slate-900 rounded"></div>
        <img
          className="relative z-10 rounded w-full"
          src={myimage}
          alt="heroSection img"
        />
      </div>
    </div>
  )
}

export default HeroSection
