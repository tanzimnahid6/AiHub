import { useState } from "react";
import { getProjects } from "../data/project";

import SingleCard2 from "./SingleCard2";
import { motion } from "framer-motion";

const projects = getProjects();
const ModelCard = () => {
  const [showContent, setShowContent] = useState(6);
  const [text, setText] = useState(true);

  const toggleContentAll = () => {
    setText(!text);
    setShowContent(projects.length);
  };
  const toggleContentLimit = () => {
    setText(!text);
    setShowContent(6);
  };
  return (
    <div className="my-14">
      <h1 className="text-center font-bold text-5xl ">Our Latest Model</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:grid-cols-3 gap-6  place-items-center ">
        {projects.length > 0 ? (
          projects
            .slice(0, showContent)
            .map((p) => <SingleCard2 key={p.id} project={p}></SingleCard2>)
        ) : (
          <p>No Model found</p>
        )}
      </div>
      <div className="flex justify-center w-full">
        <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.8 },
        }}
        whileTap={{ scale: 0.9 }}
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#236A68] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4"
          onClick={text ? toggleContentAll : toggleContentLimit}
        >
          {text ? "Show More" : "Show Less"}
        </motion.button>
      </div>
    </div>
  );
};

export default ModelCard;
