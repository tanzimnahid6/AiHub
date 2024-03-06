import { FaUserFriends } from "react-icons/fa";
const WhyUs = () => {
  return (
    <>
      <div className="text-center font-bold text-2xl md:text-5xl my-10 ">
        <h1>Why Us</h1>
      </div>
      <section className=" bg-blueGray-200">
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
      </section>
    </>
  );
};

export default WhyUs;
