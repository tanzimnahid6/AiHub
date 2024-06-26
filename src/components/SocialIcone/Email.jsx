import { BiLogoGmail } from "react-icons/bi";
const Email = () => {
  return (
    <>
      <a href="#" className="mt-10">
        <div className="flex  items-center gap-5">
          <BiLogoGmail size={30} color="red" />
          <div>
            <p className="font-semibold hover:text-[#1877F2]">Email</p>
            <p className="text-neutral-500 hover:text-[#1877F2]">
              {" "}
              aibiznest@gmail.com
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Email;