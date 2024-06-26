import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const MyContext = createContext("");

const Root = () => {
  const [bg, setBg] = useState(false);
  return (
    <div className="bg-[#f7f7e9d0] h-full font-serif max-w-[2000px] mx-auto">
      <MyContext.Provider value={{ bg, setBg }}>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto  ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </MyContext.Provider>
      <ToastContainer position="top-center" autoClose={1300} theme="dark" />
    </div>
  );
};

export default Root;
