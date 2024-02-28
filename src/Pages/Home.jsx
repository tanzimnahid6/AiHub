import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ModelCard from "../components/ModelCard";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto ">
        <Banner></Banner>
        <ModelCard></ModelCard>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
