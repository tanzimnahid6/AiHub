const MissionVision = () => {
  return (
    <>
      {" "}
      <div className="text-center font-bold text-2xl md:text-5xl py-8">
        <h1>Mission/Vision</h1>
      </div>
      <div className="md:flex gap-2 justify-center py-16 ">
        <div className="md:w-1/2">
          <h1 className="block font-bold text-xl my-2">Mission:</h1> 
          <p className="px-4">
            At BizNest AI, our mission is to democratize Artificial Intelligence
            and empower businesses worldwide to thrive in an ever-evolving
            market landscape. We are committed to providing accessible,
            innovative, and practical AI solutions that drive sustainable
            growth, efficiency, and competitiveness for our clients.
          </p>
        </div>
     
        <div className="md:w-1/2 ">
          <h1 className="block font-bold text-xl my-2">Vision:</h1> 
          <p className="px-4">
            Our vision is to be the leading catalyst for business transformation
            through AI, shaping a future where every business, regardless of
            size or industry, can harness the full potential of AI to achieve
            unprecedented success. We aspire to create a global community of
            AI-driven businesses, where innovation flourishes, opportunities
            abound, and prosperity is shared. Through our dedication to
            excellence, collaboration, and continuous learning, we aim to
            inspire and empower businesses to embrace AI as a cornerstone of
            their success.
          </p>
        </div>
      </div>
    </>
  );
};

export default MissionVision;
