import Lottie from "lottie-react";
import animation from "../assets/animation.json";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="lg:flex justify-around gap-2 p-4 mt-16 my-4" id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: [null, 1.3, 1.4] }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],

          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="lg:w-1/2 md:order-2 "
      >
        <Lottie animationData={animation} className="h-96"></Lottie>
      </motion.div>
      <motion.div
        animate={{ x: -20 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="lg:w-1/2 w-full md:order-1"
      >
        <p className="text-3xl  md:text-5xl font-bold   bg-gradient-to-r from-[#1e6162] to-[#5cc4a8] bg-clip-text text-transparent leading-1">
          Elevate Your Experience: AI Magic in Every Click
        </p>
        <p className="text-gray-500  font-bold ">
          Welcome to BizNest AI, where innovation meets opportunity! We're
          dedicated to transforming businesses worldwide through the power of
          Artificial Intelligence. Our comprehensive solutions and expert
          guidance empower businesses of all sizes and industries to thrive in
          today's dynamic market landscape. Whether you're looking to boost
          revenue, streamline operations, or enhance customer experiences, we're
          here to help you unlock the full potential of AI. Explore our
          services, discover our success stories, and embark on a journey to
          greater growth and success with BizNest AI. Welcome aboard!
        </p>
        <div className="flex w-full   justify-center mt-10">
          <button className="bg-[#0D9488] hover:bg-[#356965] hover:scale-105 transition-transform text-white font-bold py-2 px-4 rounded">
            Scheduling a Consultation
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
