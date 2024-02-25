import Lottie from "lottie-react";
import animation from "../assets/animation.json";
const Banner = () => {
  return (
    <div className="md:flex justify-around gap-2 p-4 h-[450px] mt-16">
      <div className="md:w-1/2 md:order-2  border border-red-100">
        <Lottie animationData={animation} className="h-96"></Lottie>
      </div>
      <div className="md:w-1/2 md:order-1  border border-red-100">
        <p className="text-4xl md:text-7xl font-bold  bg-gradient-to-r from-[#1e6162] to-[#5cc4a8] bg-clip-text text-transparent leading-1">
          Elevate Your Experience: AI Magic in Every Click
        </p>
        <p className="text-gray-500 leading-8 text-xl md:text-2xl font-bold mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ut
          nisi voluptatem saepe excepturi voluptatem saepe excepturi.
        </p>
      </div>
    </div>
  );
};

export default Banner;
