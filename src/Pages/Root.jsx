import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-[#FFFFFF] h-screen">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
