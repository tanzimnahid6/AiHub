import { HiOutlineChartBar } from "react-icons/hi";
import { IoIosCog } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { IoBusinessSharp } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
const Featured = () => {
  return (
    <div>
      <div className="container my-24 mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className="mb-32 text-center">
          <div className="flex justify-center   ">
            <div className="max-w-[700px] text-center ">
              <h2 className="mb-10 text-center text-3xl font-bold">
                <span className="text-[#0D9488]">Featured,</span>
                We Offer
              </h2>
            </div>
          </div>
          <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-x-12 cursor-pointer">
            <div className="mb-12 lg:mb-0 border border-[#0D9488] rounded-lg hover:bg-[#c5edd867] transition-transform ">
              <div className=" inline-block rounded-full  p-4 text-primary shadow-sm">
                <IoBusinessSharp color="#0D9488" size={40} />
              </div>
              <h5 className="mb-4 text-lg font-bold">
                AI Consulting for Businesses
              </h5>
            </div>

            <div className="mb-12 lg:mb-0 border border-[#0D9488] rounded-lg hover:bg-[#c5edd867] transition-transform ">
              <div className=" inline-block rounded-full  p-4 text-primary shadow-sm">
                <HiOutlineChartBar color="#0D9488" size={40} />
              </div>
              <h5 className="mb-4 text-lg font-bold">
                AI Implementation and Integration
              </h5>
            </div>

            <div className="mb-12 lg:mb-0 border border-[#0D9488] rounded-lg hover:bg-[#c5edd867] transition-transform ">
              <div className=" inline-block rounded-full  p-4 text-primary shadow-sm">
                <MdOutlineSupportAgent color="#0D9488" size={40} />
              </div>
              <h5 className="mb-4 text-lg font-bold">
                AI Support and Maintenance
              </h5>
            </div>

            <div className="mb-12 lg:mb-0 border border-[#0D9488] rounded-lg hover:bg-[#c5edd867] transition-transform ">
              <div className=" inline-block rounded-full  p-4 text-primary shadow-sm">
                <IoIosCog color="#0D9488" size={44} />
              </div>
              <h5 className="mb-4 text-lg font-bold">
                AI Training and Education
              </h5>
            </div>

            <div className="mb-12 lg:mb-0 border border-[#0D9488] rounded-lg hover:bg-[#c5edd867] transition-transform ">
              <div className=" inline-block rounded-full  p-4 text-primary shadow-sm">
                <IoIosTrendingUp color="#0D9488" size={44} />
              </div>
              <h5 className="mb-4 text-lg font-bold">
                AI Solution Development
              </h5>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
    </div>
  );
};

export default Featured;
