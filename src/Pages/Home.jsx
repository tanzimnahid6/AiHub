import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ModelCard from "../components/ModelCard";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import MissionVision from "../components/MissionVission";
import Features from "../components/Features";

//bg-black bg-opacity-70  z-10 absolute top-0 left-0
const Home = () => {
  return (
    <div className="font-serif">
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto ">
        <div className=""></div>
        <Banner></Banner>
        <ModelCard></ModelCard>
        <Accordion></Accordion>
        <Features></Features>
        <AboutUs></AboutUs>
        <MissionVision></MissionVision>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
