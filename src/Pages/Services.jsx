import Heading from "../components/Heading";
import { getServices } from "../data/services";

const Services = () => {
  //UNUSED=-=-=-=-=-=-========================================================================

  //UNUSED=-=-=-=-=-=-========================================================================
  //UNUSED=-=-=-=-=-=-========================================================================
  //UNUSED=-=-=-=-=-=-========================================================================
  //UNUSED=-=-=-=-=-=-========================================================================
  //UNUSED=-=-=-=-=-=-========================================================================

  const services = getServices();
  return (
    <div className="mt-24 mb-14 ">
      <div>
        <Heading>Services</Heading>
        <p className="md:w-1/2 mx-auto text-center text-xl font-bold opacity-75">
          At BizNest AI, we offer a comprehensive range of services tailored to
          meet the needs of both businesses and individuals eager to leverage
          the power of Artificial Intelligence for success
        </p>
      </div>
      {services.map((item) => (
        <div
          key={item.id}
          className="w-full border border-gray-300 rounded-md md:flex bg-[#d3efea9e] border-full p-4 my-4 hover:scale-105 transition-transform cursor-pointer"
        >
          <div className="md:w-1/6 p-2 flex md:justify-start  md:flex-none justify-center">
            <img
              src="https://i.ibb.co/1r1bY15/img1.jpg"
              className="h-32"
              alt="img1"
            />
          </div>
          <div className="md:w-5/6  p-2">
            <span className="font-bold text-xl">{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
