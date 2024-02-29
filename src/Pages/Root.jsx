import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Root = () => {
  return (
    <div className="bg-[#f4f4d98d] h-full">
      <Outlet></Outlet>
      <ToastContainer position="top-center" autoClose={1300} theme="dark"/>
    </div>
  );
};

export default Root;
