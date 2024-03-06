import Banner from "../components/Banner";
import ModelCard from "../components/ModelCard";

import Accordion from "../components/Accordion";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import MissionVision from "../components/MissionVission";

import WhyUs from "../components/WhyUs";

//bg-black bg-opacity-70  z-10 absolute top-0 left-0
const Home = () => {
  return (
    <div className="font-serif">
      <Banner></Banner>
      <ModelCard></ModelCard>
      <Accordion></Accordion>
      <WhyUs></WhyUs>
      <AboutUs></AboutUs>
      <MissionVision></MissionVision>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
