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
    <div className="bg-[#f4f4d98d] h-full font-serif">
      <MyContext.Provider value={{ bg, setBg }}>
        <Navbar></Navbar>
        <div className="w-10/12 mx-auto min-w-md ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </MyContext.Provider>
      <ToastContainer position="top-center" autoClose={1300} theme="dark" />
    </div>
  );
};

export default Root;
