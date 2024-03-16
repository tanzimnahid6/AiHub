import { FaFacebookF } from "react-icons/fa";
const Facebook = () => {
  return (
    <>
      <a href="#" className="mt-10">
        <div className="flex  items-center gap-5">
          <FaFacebookF className="text-3xl text-blue-600" />
          <div>
            <p className="font-semibold hover:text-[#1877F2]">FaceBook</p>
            <p className="text-neutral-500 hover:text-[#1877F2]">
              {" "}
              www.facebook.com/BizNestAI
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Facebook;