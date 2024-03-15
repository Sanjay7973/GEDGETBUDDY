import React from "react";
import HeroSection from "./components/HeroSection";
import { useNavigate } from "react-router-dom";
import Services from "./components/Services";
import Trested from "./components/Trested";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Product");
  };
  const name='Store'
  return (
    <>
    <HeroSection name={name} navigate={handleNavigate}/>
    <FeatureProduct/>
    <Services/>
    <Trested/>
    </>
  );
};

export default Home;
