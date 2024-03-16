import { FaInstagram } from "react-icons/fa";
const Instagram = () => {
  return (
    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
      <div className="align-start flex">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
            {/* <!-- Whatsapp --> */}
            <FaInstagram size={30} />
          </div>
        </div>
        <div className="ml-6 grow">
          <p className="mb-2 font-bold dark:text-white">Whatsapp</p>
          <p className="text-neutral-500 dark:text-neutral-200 text-sm">
            https://www.instagram.com/biz_nest_ai/
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Instagram;