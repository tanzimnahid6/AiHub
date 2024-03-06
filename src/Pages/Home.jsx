import Banner from "../components/Banner";


import Accordion from "../components/Accordion";
import ContactUs from "../components/ContactUs";


import WhyUs from "../components/WhyUs";

//bg-black bg-opacity-70  z-10 absolute top-0 left-0
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyUs></WhyUs>
      <Accordion></Accordion>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
