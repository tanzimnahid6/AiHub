
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
        bgImage={"https://i.ibb.co/Dr3ZM91/230619-jmv-img0.jpg"}
        bgImageAlt="fitness-course-bg"
        strength={200}
        className="hero w-full rounded-sm bg-center "
      >
        <div className="py-10">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li className="px-10 md:px-0">
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl  text-[#A1D1C9]  " />
              </div>
              <div className="timeline-start  hover:shadow-2xl duration-300 transition hover:scale-95 px-2 space-y-2  md:text-end md:w-10/12">
                <div className="text-2xl font-bold  text-white ">
                  Expertise and Experience:{" "}
                </div>
                <p className="font-semibold   text-[#A1D1C9] ">
                  BizNest AI brings together a team of seasoned professionals
                  with extensive experience in both business and AI
                  technologies.
                </p>
              </div>
              <hr />
            </li>
            <li className="px-10 md:px-0">
              <hr />
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl  text-[#A1D1C9]  " />
              </div>
              <div className="timeline-end hover:shadow-2xl duration-300 text-left transition hover:scale-95  px-2 space-y-2 md:w-10/12">
                <div className="text-2xl font-semibold  text-white">
                  Comprehensive Solutions:
                </div>
                <p className="font-semibold   text-[#A1D1C9]">
                  From strategic consulting to implementation and ongoing
                  support, we offer end-to-end solutions designed to address
                  every aspect of your AI journey.
                </p>
              </div>
              <hr />
            </li>
            <li className="px-10 md:px-0">
              <hr />
              <div className="timeline-middle ">
                <FaCircleChevronRight className="text-2xl  text-[#A1D1C9]  " />
              </div>
              <div className="timeline-start hover:shadow-2xl md:text-end duration-300 transition hover:scale-95  px-2  space-y-2 md:w-10/12">
                <div className="text-2xl font-semibold  text-white">
                  Commitment to Excellence:
                </div>
                <p className="font-semibold   text-[#A1D1C9]">
                  At BizNest AI, we're committed to excellence in everything we
                  do. We strive to exceed our clients' expectations .
                </p>
              </div>
              <hr />
            </li>
            <li className="px-10 md:px-0">
              <hr />
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl  text-[#A1D1C9]  " />
              </div>
              <div className="timeline-end hover:shadow-2xl text-left duration-300 transition hover:scale-95  px-2  space-y-2 md:w-3/4">
                <div className="text-2xl font-semibold  text-white">
                  Global Reach
                </div>
                <p className="font-semibold   text-[#A1D1C9]">
                  With a focus on serving businesses globally, we understand the
                  diverse needs and challenges faced by companies around the
                  world.
                </p>
              </div>
              <hr />
            </li>
            <li className="px-10 md:px-0">
              <hr />
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl  text-[#A1D1C9]  " />
              </div>
              <div className="timeline-start  hover:shadow-2xl duration-300 transition hover:scale-95 px-2 space-y-2  md:text-end  md:w-10/12">
                <div className="text-2xl font-semibold  text-white">
                  Innovative Approach:
                </div>
                <p className="font-semibold   text-[#A1D1C9]">
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
