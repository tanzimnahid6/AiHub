import AboutUsPara1 from "../components/About/AboutPara1";
import AboutUSPara2 from "../components/About/AboutPara2";
import MissionAndVision from "../components/About/Mission";

const About = () => {
  return (
    <div className="my-20">
      <p className="lg:text-5xl md:text-3xl text-2xl  w-3/4 mt-28 font-bold   bg-gradient-to-r from-[#1e6162] to-[#5cc4a8] bg-clip-text text-transparent leading-1 mx-auto text-center my-10">
        Driving Business Transformation: Our AI Journey
      </p>
      <AboutUsPara1></AboutUsPara1>
      <AboutUSPara2></AboutUSPara2>
      <MissionAndVision></MissionAndVision>
    </div>
  );
};

export default About;
