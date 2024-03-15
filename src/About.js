import HeroSection from "./components/HeroSection";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Product");
  };
  const name = 'Ecommerce'
  return (
    <>
    <HeroSection navigate={handleNavigate} name={name}/>
    </>
  );
};

export default About;
