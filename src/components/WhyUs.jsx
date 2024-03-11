
import { FaCircleChevronRight } from "react-icons/fa6";
import { Parallax } from "react-parallax";



const WhyUs = () => {
  return (
    <>
      <div className="text-center font-bold text-2xl md:text-5xl my-10 ">
        <h1>Why Us</h1>
      </div>
      {/* <section className=" bg-blueGray-200">
        <div className="container mx-auto px-4">
     
          <div className="flex flex-wrap items-center  ">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-4 shadow-lg rounded-full bg-slate-300">
              <FaUserFriends size={30} />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p className=" font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                <span className="font-bold">Expertise and Experience:</span>{" "}
                BizNest AI brings together a team of seasoned professionals with
                extensive experience in both business and AI technologies. Our
                expertise enables us to deliver innovative solutions tailored to
                address the unique needs and challenges of each client.
              </p>
              <p className=" font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                <span className="font-bold">Comprehensive Solutions:</span> From
                strategic consulting to implementation and ongoing support, we
                offer end-to-end solutions designed to address every aspect of
                your AI journey. Whether you're looking to optimize operations,
                enhance customer experiences, or unlock new revenue streams, we
                have the tools and expertise to help you succeed.
              </p>
              <a href="#" className="font-bold text-blueGray-700 mt-8">
                Check on BizNest AI!
              </a>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-[#4d736b]">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-8">
          <div className=" mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Made with{" "}
                  <a
                    href=""
                    className="text-blueGray-500 hover:text-gray-800 text-green-700"
                    target="_blank"
                  >
                    BizNest AI
                  </a>{" "}
                  by{" "}
                  <a
                    href=""
                    className="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank"
                  >
                    {" "}
                    Creative Tim
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section> */}
      <Parallax
        blur={1}
        bgImage={"https://i.ibb.co/tbHZyP1/fitness-course-bg.webp"}
        bgImageAlt="fitness-course-bg"
        strength={200}
        className="hero w-full rounded-sm bg-center "
      >
        <div className="py-10 px-[2%] sm:px-[5%] lg:px-[8%]">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl text-sky-100  " />
              </div>
              <div className="timeline-start  hover:shadow-2xl duration-300 transition hover:scale-95 px-2 py-3 space-y-2 md:text-end mb-9">
                <div className="text-2xl font-bold text-[#e5c466] text-left">
                  BExpertise and Experience:{" "}
                </div>
                <p className="font-semibold max-w-sm text-sky-200 text-left">
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
                <FaCircleChevronRight className="text-2xl text-sky-100  " />
              </div>
              <div className="timeline-end hover:shadow-2xl duration-300 text-left transition hover:scale-95 mb-9 px-2 py-3 space-y-2">
                <div className="text-2xl font-semibold text-[#e5c466]">
                  Comprehensive Solutions:
                </div>
                <p className="font-semibold max-w-sm text-sky-200">
                  From strategic consulting to implementation and ongoing
                  support, we offer end-to-end solutions designed to address
                  every aspect of your AI journey.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl text-sky-100  " />
              </div>
              <div className="timeline-start hover:shadow-2xl text-left duration-300 transition hover:scale-95 mb-9 px-2 py-3 space-y-2 md:text-end">
                <div className="text-2xl font-semibold text-[#e5c466]">
                  Commitment to Excellence:
                </div>
                <p className="font-semibold max-w-sm text-sky-200">
                  At BizNest AI, we're committed to excellence in everything we
                  do. We strive to exceed our clients' expectations .
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <FaCircleChevronRight className="text-2xl text-sky-100  " />
              </div>
              <div className="timeline-end hover:shadow-2xl text-left duration-300 transition hover:scale-95 mb-9 px-2 py-3 space-y-2">
                <div className="text-2xl font-semibold text-[#e5c466]">
                  Global Reach
                </div>
                <p className="font-semibold max-w-sm text-sky-200">
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
                <FaCircleChevronRight className="text-2xl text-sky-100  " />
              </div>
              <div className="timeline-start hover:shadow-2xl duration-300 transition hover:scale-95 py-3 px-3 md:text-end">
                <div className="text-2xl font-semibold text-[#e5c466]">
                  Innovative Approach:
                </div>
                <p className="font-semibold text-sky-200">
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
