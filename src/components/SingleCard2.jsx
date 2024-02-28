import { useState } from "react";
import { Link } from "react-router-dom";

const SingleCard2 = ({ project }) => {
  const { title, description } = project;

  const githubLink =
    "https://github.com/ahmedrafiq09/Image-Face-Detection-With-OpenCV-And-Python/blob/main/Image%20Face%20Detection.ipynb";

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-60 hover:scale-105 transition-transform hover:bg-stone-200">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {showMore ? description : `${description.slice(0, 100)}...`}
            <span
              className="hover:text-lime-600 text-lime-800 cursor-pointer  font-bold text-xs"
              onClick={toggleShowMore}
            >
              {showMore ? " Show Less" : " Show More"}
            </span>
          </p>
        </div>
        <div className="p-6 pt-0 flex justify-between">
          <Link to="/singleModelInfo">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
              onClick={toggleShowMore}
            >
              Learn More
            </button>
          </Link>

          <a href={githubLink}>
          
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleCard2;
