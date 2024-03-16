
import { FaCircleChevronRight } from "react-icons/fa6";
import { Parallax } from "react-parallax";



const WhyUs = () => {
  return (
    <>
      <div className="text-center font-bold text-2xl md:text-5xl my-10 ">
        <h1>Why Us</h1>
      </div>

      <Parallax
        blur={3}
        bgImage={""}
        bgImageAlt="fitness-course-bg"
        strength={200}
        className="hero w-full rounded-sm bg-center "
      >
        <div className="py-10">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical cursor-pointer">
            <li>
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl   " />
              </div>
              <div className="timeline-start  hover:shadow-2xl duration-300 transition hover:scale-95 px-2 space-y-2  md:text-end md:w-10/12">
                <div className=" text-xl font-semibold  text-gray-700 ">
                  Expertise and Experience
                </div>
                <p className=" md:text-normal text-sm   text-gray-600 ">
                  BizNest AI brings together a team of seasoned professionals
                  with extensive experience in both business and AI
                  technologies.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl  " />
              </div>
              <div className="timeline-end hover:shadow-2xl duration-300 text-left transition hover:scale-95  px-2 space-y-2 md:w-10/12">
                <div className=" text-xl font-semibold  text-gray-700k">
                  Comprehensive Solutions
                </div>
                <p className=" md:text-normal text-sm   text-gray-600 ">
                  From strategic consulting to implementation and ongoing
                  support, we offer end-to-end solutions designed to address
                  every aspect of your AI journey.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle ">
                <FaCircleChevronRight className="text-2xl    " />
              </div>
              <div className="timeline-start hover:shadow-2xl md:text-end duration-300 transition hover:scale-95  px-2  space-y-2 md:w-10/12">
                <div className=" text-xl font-semibold   text-gray-700">
                  Commitment to Excellence:
                </div>
                <p className="md:text-normal text-sm   text-gray-600 ">
                  At BizNest AI, we're committed to excellence in everything we
                  do. We strive to exceed our clients' expectations .
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl text-black " />
              </div>
              <div className="timeline-end hover:shadow-2xl text-left duration-300 transition hover:scale-95  px-2  space-y-2 md:w-10/12 w-full ">
                <div className=" text-xl font-semibold   text-gray-700">
                  Global Reach
                </div>
                <p className="md:text-normal text-sm   text-gray-600 ">
                  With a focus on serving businesses globally, we understand the
                  diverse needs and challenges faced by companies around the
                  world.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl  text-black " />
              </div>
              <div className="timeline-start  hover:shadow-2xl duration-300 transition hover:scale-95 px-2 space-y-2  md:text-end  md:w-10/12 w-full">
                <div className=" text-xl font-semibold   text-gray-700">
                  Innovative Approach:
                </div>
                <p className="md:text-normal text-sm   text-gray-600 ">
                  We pride ourselves on our innovative approach to AI-driven
                  business solutions.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Parallax>
    </>
  );
};

export default WhyUs;
