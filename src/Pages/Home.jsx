import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ModelCard from "../components/ModelCard";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto ">
        <Banner></Banner>
        <ModelCard></ModelCard>
        <Accordion></Accordion>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
