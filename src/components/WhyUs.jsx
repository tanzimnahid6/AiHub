
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
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl   " />
              </div>
              <div className="timeline-start  hover:shadow-2xl duration-300 transition hover:scale-95 px-2 space-y-2  md:text-end md:w-10/12">
                <div className="md:text-2xl text-xl font-semibold  text-black ">
                  Expertise and Experience:{" "}
                </div>
                <p className="font-semibold md:text-normal text-sm   text-black ">
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
                <div className="md:text-2xl text-xl font-semibold  text-black">
                  Comprehensive Solutions:
                </div>
                <p className="font-semibold md:text-normal text-sm   text-black">
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
                <div className="md:text-2xl text-xl font-semibold  text-black">
                  Commitment to Excellence:
                </div>
                <p className="font-semibold md:text-normal text-sm   text-black">
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
                <div className="md:text-2xl text-xl font-semibold  text-black">
                  Global Reach
                </div>
                <p className="font-semibold md:text-normal text-sm   text-black">
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
                <div className="md:text-2xl text-xl font-semibold  text-black">
                  Innovative Approach:
                </div>
                <p className="font-semibold md:text-normal text-sm   text-black">
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
