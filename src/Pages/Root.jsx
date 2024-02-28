import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-[#f4f4d98d] h-full">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
