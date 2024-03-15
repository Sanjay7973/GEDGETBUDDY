import React,{useState} from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Trested = () => {
  const [countStart,setCountStart]=useState(false)
  return (
    <ScrollTrigger onEnter={()=>setCountStart(true)} onExit={()=>setCountStart(false)}>
    <div className=" p-10 mt-10 mb-10 bg-slate-600 w-full h-auto flex flex-col  md:flex-row justify-around">
      <div className="font-bold text-white flex flex-col items-center justify-center p-10">
        <h2 className="text-6xl">
          {countStart && 
          <CountUp start={0} end={20} delay={0.1}/>}+
          </h2>
        <p className="mt-2">OUR SUPER TEAM</p>
      </div>
      <div className="font-bold text-white flex flex-col items-center justify-cente p-10">
      <h2 className="text-6xl">
          {countStart && 
          <CountUp start={0} end={2000} delay={0}/>}+
          </h2>
        <p className="mt-2">HAPPY CUSTOMERS</p>
      </div>
      <div className="font-bold text-white flex flex-col items-center text-center justify-cente p-10">
      <h2 className="text-6xl">
          {countStart && 
          <CountUp start={0} end={78} delay={0}/>}%
          </h2>
        <p className="mt-2">REPEAT CUSTOMER</p>
      </div>
    </div>
    </ScrollTrigger>
  );
};

export default Trested;
