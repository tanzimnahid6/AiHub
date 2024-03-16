import { useState } from "react";
import { getProjects } from "../data/project";

import SingleCard2 from "./SingleCard2";
import Heading from "./Heading";

const projects = getProjects();
const ModelCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  return (
    <div className="my-14" id="model">
      
      <Heading>Our Latest Business Oriented Model</Heading>
      

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:grid-cols-3 gap-6  place-items-center ">
        
        {projects.length > 0 ? (
          projects.map((p) => (
            <SingleCard2
              key={p.id}
              project={p}
              setShowModal={setShowModal}
              showModal={showModal}
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
            ></SingleCard2>
          ))
        ) : (
          <p>No Model found</p>
        )}
      </div>
    </div>
  );
};

export default ModelCard;
