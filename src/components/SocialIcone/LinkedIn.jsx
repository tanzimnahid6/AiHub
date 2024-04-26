import { FaLinkedinIn } from "react-icons/fa6";
const LinkedIn = () => {
  return (
    <>
      <a href="#" className="mt-10">
        <div className="flex  items-center gap-5">
          <FaLinkedinIn size={30} color="blue"/>
          <div>
            <p className="font-semibold hover:text-[#1877F2]">LinkedIn</p>
            <p className="text-neutral-500 hover:text-[#1877F2]">
              www.linkedin.com/in/biznestai/
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default LinkedIn;