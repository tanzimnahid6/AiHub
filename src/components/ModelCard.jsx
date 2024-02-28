import { useState } from "react";
import { getProjects } from "../data/project";

import SingleCard2 from "./SingleCard2";

const projects = getProjects();
const ModelCard = () => {
  const [showContent, setShowContent] = useState(6);
  const [text, setText] = useState(true);

  const toggleContentAll = () => {
    setText(!text)
    setShowContent(projects.length);
  };
  const toggleContentLimit = () => {
    setText(!text)
    setShowContent(6);
  };
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10  my-8 ">
        {projects.length > 0 ? (
          projects
            .slice(0, showContent)
            .map((p) => <SingleCard2 key={p.id} project={p}></SingleCard2>)
        ) : (
          <p>No Model found</p>
        )}
      </div>
      <div className="flex justify-center w-full">
        <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#236A68] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4"
          onClick={text ? toggleContentAll : toggleContentLimit}
        >
          {text ? "Show More" : "Show Less"}
        </button>
      </div>
    </>
  );
};

export default ModelCard;
