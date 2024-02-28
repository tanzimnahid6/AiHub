import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-[#bfbf958d] h-full">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
