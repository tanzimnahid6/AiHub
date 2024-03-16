import Banner from "../components/Banner";

import Accordion from "../components/Accordion";


import WhyUs from "../components/WhyUs";
import Featured from "../components/Featured";
import MarqueeE from "../components/Marquee";

//bg-black bg-opacity-70  z-10 absolute top-0 left-0
const Home = () => {
  return (
    <div>
      <MarqueeE></MarqueeE>
      <Banner></Banner>
      <Featured></Featured>
      <WhyUs></WhyUs>
      <Accordion></Accordion>
    </div>
  );
};

export default Home;
