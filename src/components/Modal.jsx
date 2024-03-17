const Modal = ({ description, title, handleModelClose,businessImpact }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-transparent backdrop-blur-[1px]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
          <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl  overflow-hidden border border-cyan-200">
            <div className="p-5 lg:p-11 ">
              <div className="">
                <h2 className="lg:text-3xl md:text-2xl text-xl lg:text-[40px]  m-4 font-bold">
                  {title}
                </h2>
                
              </div>
              <p className="text-sm lg:text-base mb-8 lg:my-8">
              <ul className="list-disc list-inside">
                  {businessImpact.map((impact) => (
                    <li key={impact.id} className="my-4">
                      <span className="font-semibold">{impact.title}:</span> {impact.description}
                    </li>
                  ))}
                </ul>
              </p>
              <div className="flex justify-end">
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                  onClick={handleModelClose}
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
