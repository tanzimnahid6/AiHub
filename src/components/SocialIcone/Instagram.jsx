import { FaInstagram } from "react-icons/fa";
const Instagram = () => {
  return (
    <>
      <a href="#" className="mt-10">
        <div className="flex  items-center gap-5">
          <FaInstagram size={30} className="text-pink-600"/>
          <div>
            <p className="font-semibold hover:text-[#1877F2]">Instagram</p>
            <p className="text-neutral-500 hover:text-[#1877F2]">
              www.instagram.com/biz_nest_ai/
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Instagram;