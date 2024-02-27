import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ModelCard from "../components/ModelCard";

const Home = () => {
  return (
    <div className="bg-[#e4e4d88d]">
      <div className="w-10/12 mx-auto ">
        <Navbar></Navbar>
        <Banner></Banner>
        <ModelCard></ModelCard>
      </div>
    </div>
  );
};

export default Home;
