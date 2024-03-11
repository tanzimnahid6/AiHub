const MissionAndVision = () => {
  return (
    <>
      {/* Title  */}
      <div className="text-center font-bold text-2xl md:text-5xl flex justify-center gap-5  my-10">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#236A68]">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#236A68] text-sky-300 relative inline-block">
            <span className="relative text-white subheading">Mission</span>
          </span>
        </h2>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#236A68]">
          &
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#236A68] text-sky-300 relative inline-block ml-3">
            <span className="relative text-white subheading">Vision</span>
          </span>
        </h2>
      </div>
      {/* Mission and vision Description */}
      <div className=" bg-blueGray-200 ">
        <div className="container mx-auto ">
          <div className="flex flex-col sm:flex-row md:flex-row  my-10 lg:gap-20  md:gap-10  justify-between items-center">
            <div className="w-full lg:w-7/12 ">
              <p className="leading-relaxed mt-4 mb-4 ">
                <span className="font-bold text-[#236A68] text-lg">
                  Mission:
                </span>{" "}
                <span >
                  {" "}
                  At BizNest AI, our mission is to democratize Artificial
                  Intelligence and empower businesses worldwide to thrive in an
                  ever-evolving market landscape. We are committed to providing
                  accessible, innovative, and practical AI solutions that drive
                  sustainable growth, efficiency, and competitiveness for our
                  clients.
                </span>
              </p>
              <p className="text-black  leading-relaxed mt-0 mb-4 ">
                <span className="font-bold text-[#236A68]">Vision:</span>
                <span >
                  Our vision is to be the leading catalyst for business
                  transformation through AI, shaping a future where every
                  business, regardless of size or industry, can harness the full
                  potential of AI to achieve unprecedented success. We aspire to
                  create a global community of AI-driven businesses, where
                  innovation flourishes, opportunities abound, and prosperity is
                  shared. Through our dedication to excellence, collaboration,
                  and continuous learning, we aim to inspire and empower
                  businesses to embrace AI as a cornerstone of their success.
                </span>
              </p>
            </div>
            <div className="w-full lg:w-4/12   ">
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
      </div>
    </>
  );
};

export default MissionAndVision;
