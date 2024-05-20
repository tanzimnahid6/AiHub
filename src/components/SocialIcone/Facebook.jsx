import { FaFacebookF } from "react-icons/fa";
const Facebook = () => {
  return (
    <>
      <a href="#" className="mt-10">
        <div className="flex  items-center gap-5">
          <FaFacebookF size={30} className="text-blue-600" />
          <div>
            <p className="font-semibold hover:text-[#1877F2]">Facebook</p>
            <p className="text-neutral-500 hover:text-[#1877F2]">
              www.facebook.com/BizNestAI
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Facebook;
