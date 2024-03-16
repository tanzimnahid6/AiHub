const Heading = ({ children }) => {
  return (
    <div>
      <p className="lg:text-4xl md:text-3xl text-2xl  w-3/4 mt-28 font-bold   bg-gradient-to-r from-[#1e6162] to-[#5cc4a8] bg-clip-text text-transparent leading-1 mx-auto text-center my-10">
        {children}
      </p>
    </div>
  );
};

export default Heading;
