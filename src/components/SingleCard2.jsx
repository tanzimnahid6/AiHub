import { toast } from "react-toastify";
import { MdOutlineElectricBolt } from "react-icons/md";
import Modal from "./Modal";

const SingleCard2 = ({
  project,
  showModal,
  setShowModal,
  selectedModel,
  setSelectedModel,
}) => {
  const { title, description, gitHubUrl, outputUrl } = project;

  const handleModelSelection = () => {
    setSelectedModel(project);
    setShowModal(true);
  };

  const handleModelClose = () => {
    setShowModal(false);
    setSelectedModel(null);
  };

  const notify = () => toast("Repository not found coming soon!");

  return (
    <>
      {showModal && (
        <Modal
          description={selectedModel.description}
          title={selectedModel.title}
          handleModelClose={handleModelClose}
        />
      )}
      <div className="relative flex flex-col text-gray-700 gap-4 bg-white shadow-lg bg-clip-border rounded-xl w-full  hover:scale-105 transition-transform hover:bg-stone-200 p-2 ">
        <div className="p-2  h-2/3 ">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            <MdOutlineElectricBolt color="#00BCD4" className="inline-block " />
            {title}
          </h5>
          <p className="block  text-base antialiased font-light leading-relaxed text-inherit ">
            {`${description.slice(0, 130)}...`}
          </p>
        </div>

        <div className="p-4 flex justify-between">
          <div className="flex flex-col gap-2">
            <a href={gitHubUrl}>
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Model
              </button>
            </a>
          </div>

          {outputUrl ? (
            <div>
              <a href={outputUrl}>
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Output
                </button>
              </a>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => notify()}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Output
            </button>
          )}
        </div>

        <div className="px-4 text-center pb-4">
          <a>
            <button
              onClick={handleModelSelection}
              type="button"
              className="py-3 px-4  items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#0D9488] text-[#0D9488] hover:border-[#0D9488] hover:text-white   hover:bg-[#0D9488] disabled:opacity-50 disabled:pointer-events-none dark:border-teal-500 dark:text-teal-500 dark:hover:text-teal-400 dark:hover:border-teal-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 w-full"
            >
              Business impact
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleCard2;
